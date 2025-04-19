"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Trophy,
  Award,
  Star,
  Users,
  Calendar,
  Medal
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RankingData {
  playerId: string;
  playerName: string;
  startggPlayerId?: string;
  averageScore: number;
  tournamentCount: number;
  semesterName: string;
}

interface SemesterData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

export function SmashPrPage() {
  const [rankings, setRankings] = useState<RankingData[]>([]);
  const [filteredRankings, setFilteredRankings] = useState<RankingData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [semesterName, setSemesterName] = useState<string>("");
  const [semesters, setSemesters] = useState<SemesterData[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [minTournamentCount, setMinTournamentCount] = useState<number>(3);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/smash-rankings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch rankings');
        }
        
        const data = await response.json();
        
        if (data.rankings && data.rankings.length > 0) {
          setRankings(data.rankings);
          setSemesterName(data.rankings[0].semesterName);
          setFilteredRankings(
            data.rankings.filter((player: RankingData) => player.tournamentCount >= minTournamentCount)
          );
        }

        if (data.semesters && data.semesters.length > 0) {
          setSemesters(data.semesters);
          setSelectedSemester(data.currentSemesterId || data.semesters[0].id);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching rankings:', error);
        setError('Failed to load rankings. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchRankings();
  }, []);

  // Update filtered rankings when min tournament count changes
  useEffect(() => {
    setFilteredRankings(
      rankings.filter(player => player.tournamentCount >= minTournamentCount)
    );
  }, [minTournamentCount, rankings]);

  // Fetch rankings for a specific semester
  const fetchSemesterRankings = async (semesterId: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/smash-rankings?semesterId=${semesterId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch semester rankings');
      }
      
      const data = await response.json();
      
      if (data.rankings && data.rankings.length > 0) {
        setRankings(data.rankings);
        setSemesterName(data.rankings[0].semesterName);
        setFilteredRankings(
          data.rankings.filter((player: RankingData) => player.tournamentCount >= minTournamentCount)
        );
      } else {
        setRankings([]);
        setFilteredRankings([]);
        
        // Find semester name from semesters array
        const semester = semesters.find(sem => sem.id === semesterId);
        if (semester) {
          setSemesterName(semester.name);
        }
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching semester rankings:', error);
      setError('Failed to load semester rankings. Please try again later.');
      setIsLoading(false);
    }
  };

  // Handle semester change
  const handleSemesterChange = (value: string) => {
    setSelectedSemester(value);
    fetchSemesterRankings(value);
  };

  // Handle min tournament count change
  const handleMinTournamentChange = (value: string) => {
    setMinTournamentCount(parseInt(value));
  };

  // Returns medal component based on rank
  const getMedalForRank = (rank: number) => {
    switch (rank) {
      case 1:
        return <Medal className="h-8 w-8 text-yellow-500 stroke-[1.5]" />;
      case 2:
        return <Medal className="h-7 w-7 text-gray-400 stroke-[1.5]" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-700 stroke-[1.5]" />;
      default:
        return null;
    }
  };

  // Format score to 2 decimal places
  const formatScore = (score: number) => {
    return score.toFixed(2);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <section className="bg-elon-maroon py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-4xl relative">
            {/* Orange accent bar */}
            <div className="absolute -top-8 left-0 h-1 w-24 bg-elon-gold rounded"></div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Smash PR Rankings
            </h1>
            <div className="text-lg md:text-xl text-white/90 max-w-2xl">
              {isLoading ? (
                <div className="h-6 w-64 bg-white/20 animate-pulse rounded-md"></div>
              ) : (
                <span>Current rankings for {semesterName}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rankings section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Filters and Controls */}
          <div className="mb-16 flex flex-col md:flex-row items-center gap-6 justify-between bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            {/* Semester Select */}
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-3">
                <label htmlFor="semester-select" className="font-medium text-gray-700 whitespace-nowrap">
                  Semester:
                </label>
                <Select
                  disabled={isLoading || semesters.length === 0}
                  value={selectedSemester}
                  onValueChange={handleSemesterChange}
                >
                  <SelectTrigger id="semester-select" className="w-[180px] bg-white shadow-sm">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {semesters.map((semester) => (
                      <SelectItem key={semester.id} value={semester.id}>
                        {semester.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Min Tournament Count */}
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-3">
                <label htmlFor="tournament-count" className="font-medium text-gray-700 whitespace-nowrap">
                  Min Tournaments:
                </label>
                <Select
                  disabled={isLoading}
                  value={minTournamentCount.toString()}
                  onValueChange={handleMinTournamentChange}
                >
                  <SelectTrigger id="tournament-count" className="w-[150px] bg-white shadow-sm">
                    <SelectValue placeholder="Min count" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="1">1 Tournament</SelectItem>
                    <SelectItem value="2">2 Tournaments</SelectItem>
                    <SelectItem value="3">3 Tournaments</SelectItem>
                    <SelectItem value="4">4 Tournaments</SelectItem>
                    <SelectItem value="5">5 Tournaments</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Rankings Display */}
          {isLoading ? (
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                      </div>
                      <Skeleton className="h-6 w-16" />
                    </div>
                    <Skeleton className="h-8 w-36 mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-3/4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            // Error state
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="text-center text-red-600">
                  <p className="text-lg font-medium mb-4">{error}</p>
                  <Button 
                    onClick={() => window.location.reload()}
                    className="bg-elon-maroon hover:bg-elon-maroon/90 text-white"
                  >
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : filteredRankings.length === 0 ? (
            // No rankings state
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-gray-600 mb-4">
                  No players with {minTournamentCount} or more tournaments for {semesterName}.
                </p>
                <p className="text-gray-600">
                  Try adjusting the minimum tournament count or selecting a different semester.
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Professional Podium Display */}
              {filteredRankings.length >= 3 && (
                <>
                  <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Top 3 Players</h2>
                    <hr className="flex-grow ml-4 border-t border-gray-200" />
                  </div>
                  
                  <div className=" relative mt-8">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-50 to-transparent opacity-50 pointer-events-none"></div>          
                    <div className="flex justify-center items-end">
                      <div className="relative w-full max-w-4xl mx-auto pt-16 pb-8">
                        <div className="flex justify-center items-end gap-4 md:gap-8 mb-8 h-64">
                          {/* 2nd Place */}
                          <div className="w-1/4 flex flex-col items-center">
                            <div className="flex flex-col items-center mb-4">
                              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-200 via-gray-100 to-slate-300">
                                <div className="flex flex-col items-center justify-center">
                                  <span className="text-3xl font-bold text-slate-700">2</span>
                                  <div className="mt-1">{getMedalForRank(2)}</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-36 bg-gradient-to-t from-slate-300 to-slate-200 rounded-t-xl shadow-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-gray-900/5"></div>
                              <div className="absolute bottom-0 inset-x-0 pb-3 px-2 text-center">
                                <div className="bg-white/80 rounded-md py-1 px-2 mb-1 mx-auto max-w-[90%]">
                                  <p className="font-bold text-elon-maroon line-clamp-1">{filteredRankings[1].playerName}</p>
                                </div>
                                <Badge className="bg-white text-slate-700 border-slate-300">
                                  {formatScore(filteredRankings[1].averageScore)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          {/* 1st Place */}
                          <div className="w-1/3 flex flex-col items-center z-10">
                            <div className="flex flex-col items-center mb-4">
                              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-elon-gold via-yellow-300 to-elon-gold">
                                <div className="flex flex-col items-center justify-center">
                                  <span className="text-4xl font-bold text-white">1</span>
                                  <div className="mt-1">{getMedalForRank(1)}</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-52 bg-gradient-to-t from-elon-gold to-yellow-400 rounded-t-xl shadow-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-yellow-500/10"></div>
                              <div className="absolute bottom-0 inset-x-0 pb-4 px-2 text-center">
                                <div className="bg-white/80 rounded-md py-1 px-2 mb-2 mx-auto max-w-[90%]">
                                  <p className="font-bold text-elon-maroon text-lg line-clamp-1">{filteredRankings[0].playerName}</p>
                                </div>
                                <Badge className="bg-white text-elon-gold border-transparent shadow-sm">
                                  {formatScore(filteredRankings[0].averageScore)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          {/* 3rd Place */}
                          <div className="w-1/4 flex flex-col items-center">
                            <div className="flex flex-col items-center mb-4">
                              <div className="w-18 h-18 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700">
                                <div className="flex flex-col items-center justify-center">
                                  <span className="text-2xl font-bold text-white">3</span>
                                  <div className="mt-1">{getMedalForRank(3)}</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-24 bg-gradient-to-t from-amber-700 to-amber-500 rounded-t-xl shadow-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-amber-800/10"></div>
                              <div className="absolute bottom-0 inset-x-0 pb-3 px-2 text-center">
                                <div className="bg-white/80 rounded-md py-1 px-2 mb-1 mx-auto max-w-[90%]">
                                  <p className="font-bold text-elon-maroon line-clamp-1">{filteredRankings[2].playerName}</p>
                                </div>
                                <Badge className="bg-white text-amber-700 border-amber-400">
                                  {formatScore(filteredRankings[2].averageScore)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Platform base */}
                        <div className="h-4 bg-gray-200 rounded-full mx-8 shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Full Rankings List */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Full Rankings</h2>
                <hr className="flex-grow ml-4 border-t border-gray-200" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRankings.map((player, index) => (
                  <Card 
                    key={player.playerId} 
                    className={`border ${index < 3 ? 'border-elon-gold/50' : 'border-gray-200'} hover:shadow-md transition-shadow`}
                  >
                    <CardHeader className={`pb-2 ${index < 3 ? 'bg-elon-gold/10' : ''}`}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 bg-elon-maroon text-white rounded-full font-bold">
                            {index + 1}
                          </span>
                          {getMedalForRank(index + 1)}
                        </div>
                        <Badge variant="outline" className="text-elon-maroon border-elon-maroon/30">
                          Score: {formatScore(player.averageScore)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mt-2">
                        {player.playerName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-gray-700 mb-1">
                        <Trophy className="h-4 w-4 mr-2 text-elon-maroon" />
                        <span>Rank: <strong>#{index + 1}</strong></span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-4 w-4 mr-2 text-elon-maroon" />
                        <span>Tournament Count: <strong>{player.tournamentCount}</strong></span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Call to action - join tournaments */}
          <Card className="mt-16 border-t-4 border-t-elon-maroon">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Want to be on the PR?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join our weekly Smash tournaments and climb the rankings! Connect with us on Discord for tournament announcements and sign-ups.
                </p>
                <Button 
                  className="bg-elon-maroon hover:bg-elon-maroon/90 text-white"
                  asChild
                >
                  <a 
                    href="https://discord.gg/W7BfUNd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Our Discord
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}