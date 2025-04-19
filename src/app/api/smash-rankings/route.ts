// src/app/api/smash-rankings/route.ts
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

// MongoDB connection string from environment variable
const uri = process.env.MONGODB_URI;

export async function GET(request: Request) {
  if (!uri) {
    return NextResponse.json(
      { error: "MongoDB connection string is not defined" },
      { status: 500 }
    );
  }

  // Get query parameters
  const url = new URL(request.url);
  const semesterId = url.searchParams.get('semesterId');

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
    
    // Return rankings and semester data
    return NextResponse.json({
      rankings,
      semesters: allSemesters,
      currentSemesterId
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