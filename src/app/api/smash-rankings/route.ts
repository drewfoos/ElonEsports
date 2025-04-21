// src/app/api/smash-rankings/route.ts
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { rateLimit } from "@/lib/rate-limit";

// MongoDB connection string from environment variable
const uri = process.env.MONGODB_URI;

// Cache configuration
const CACHE_DURATION = 0; // 1 week in milliseconds
type CacheEntry = {
  timestamp: number;
  data: unknown;
};
const cache = new Map<string, CacheEntry>();

// Create a rate limiter instance - 30 requests per minute
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 100 // Max 100 users per minute
});

export async function GET(request: Request) {
  // Apply rate limiting
  try {
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "anonymous";
    
    await limiter.check(NextResponse.json({}, { status: 200 }), ip, 30);
  } catch (error) {
    console.log("Rate limit exceeded:", error);
    return NextResponse.json(
      { error: "Too many requests, please try again later." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  if (!uri) {
    return NextResponse.json(
      { error: "MongoDB connection string is not defined" },
      { status: 500 }
    );
  }

  // Get query parameters
  const url = new URL(request.url);
  const semesterId = url.searchParams.get('semesterId');
  const cacheKey = semesterId || 'default';
  
  // Check cache first
  const cacheEntry = cache.get(cacheKey);
  if (cacheEntry && (Date.now() - cacheEntry.timestamp) < CACHE_DURATION) {
    // Return cached data with cache header
    return NextResponse.json(cacheEntry.data, {
      headers: {
        "Cache-Control": "public, max-age=86400", // 1 day in seconds
        "X-Cache": "HIT"
      }
    });
  }

  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db();
    
    // Get all semesters for the dropdown
    const semestersCollection = db.collection('Semester');
    const allSemesters = await semestersCollection
      .find()
      .sort({ endDate: -1 })
      .toArray()
      .then(semesters => semesters.map(semester => ({
        id: semester._id.toString(),
        name: semester.name,
        startDate: semester.startDate,
        endDate: semester.endDate
      })));
    
    if (!allSemesters || allSemesters.length === 0) {
      return NextResponse.json(
        { error: "No semesters found" },
        { status: 404 }
      );
    }
    
    // Determine which semester to use for rankings
    const currentSemester = allSemesters[0]; // Most recent semester by default
    const currentSemesterId = currentSemester.id;
    
    // Use provided semester ID or default to most recent
    const targetSemesterId = semesterId || currentSemesterId;
    
    // Get rankings for the target semester
    const semesterScoresCollection = db.collection('SemesterScore');
    const rankings = await semesterScoresCollection
      .aggregate([
        {
          $match: { 
            semesterId: new ObjectId(targetSemesterId)
          }
        },
        {
          $lookup: {
            from: 'Player',
            localField: 'playerId',
            foreignField: '_id',
            as: 'playerInfo'
          }
        },
        {
          $unwind: '$playerInfo'
        },
        {
          $sort: { 
            averageScore: 1 
          }
        },
        {
          $project: {
            _id: 0,
            playerId: '$playerId',
            playerName: '$playerInfo.gamerTag',
            startggPlayerId: '$playerInfo.startggPlayerId',
            averageScore: 1,
            tournamentCount: 1,
            semesterName: {
              $arrayElemAt: [
                {
                  $filter: {
                    input: allSemesters,
                    as: 'sem',
                    cond: { $eq: ['$$sem.id', targetSemesterId] }
                  }
                },
                0
              ]
            }
          }
        }
      ])
      .toArray()
      .then(rankingsArray => {
        // Find the target semester name
        const semester = allSemesters.find(s => s.id === targetSemesterId);
        const semesterName = semester ? semester.name : '';
        
        // Add semester name to each record
        return rankingsArray.map(ranking => ({
          ...ranking,
          semesterName
        }));
      });
    
    // Store response data
    const responseData = {
      rankings,
      semesters: allSemesters,
      currentSemesterId
    };
    
    // Update cache
    cache.set(cacheKey, {
      timestamp: Date.now(),
      data: responseData
    });
    
    // Return rankings and semester data with cache headers
    return NextResponse.json(responseData, {
      headers: {
        "Cache-Control": "public, max-age=86400", // 1 day in seconds
        "X-Cache": "MISS"
      }
    });
  } catch (error) {
    console.error('Error fetching rankings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rankings' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}