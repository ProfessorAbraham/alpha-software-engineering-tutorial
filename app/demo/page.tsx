"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

const demoVideos = [
  {
    id: "intro",
    title: "ASET Program Overview",
    description: "Get an overview of our comprehensive AI and Data Science programs",
    duration: "5:30",
    category: "Introduction",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "data-science",
    title: "Data Science Package Demo",
    description: "See what you'll learn in our Data Science program with real project examples",
    duration: "8:45",
    category: "Data Science",
    youtubeId: "9bZkp7q19f0",
  },
  {
    id: "ai-package",
    title: "AI Package Walkthrough",
    description: "Explore our Artificial Intelligence curriculum and capstone projects",
    duration: "7:20",
    category: "Artificial Intelligence",
    youtubeId: "3JZ_D3ELwOQ",
  },
  {
    id: "mentorship",
    title: "1-on-1 Mentorship Experience",
    description: "See how our personalized mentorship program works",
    duration: "4:15",
    category: "Mentorship",
    youtubeId: "L_jWHffIx5E",
  },
  {
    id: "success-stories",
    title: "Student Success Stories",
    description: "Hear from graduates who transformed their careers with ASET",
    duration: "6:30",
    category: "Success Stories",
    youtubeId: "kJQP7kiw5Fk",
  },
  {
    id: "projects",
    title: "Capstone Projects Showcase",
    description: "See the amazing projects our students build during the program",
    duration: "9:10",
    category: "Projects",
    youtubeId: "RgKAFK5djSk",
  },
]

function getYoutubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}

export default function DemoPage() {
  const [selectedVideo, setSelectedVideo] = useState(demoVideos[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ASET</span>{" "}
              Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our demo videos to see exactly what you'll learn and how our programs can transform your career
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{selectedVideo.category}</Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedVideo.duration}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h2>
                  <p className="text-gray-600 mb-6">{selectedVideo.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/enroll" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Enroll Now
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      >
                        Ask Questions
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video List */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Demo Videos</CardTitle>
                  <CardDescription>Explore different aspects of our programs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {demoVideos.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => setSelectedVideo(video)}
                      className={`cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                        selectedVideo.id === video.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="relative flex-shrink-0">
                            <img
                              src={getYoutubeThumbnail(video.youtubeId)}
                              alt={video.title}
                              className="w-16 h-12 object-cover rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">{video.title}</h4>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{video.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="text-xs">
                                {video.category}
                              </Badge>
                              <span className="text-xs text-gray-500">{video.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Why Students Choose ASET</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm">Students Enrolled</span>
                      </div>
                      <span className="font-semibold">500+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span className="text-sm">Average Rating</span>
                      </div>
                      <span className="font-semibold">4.9/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm">Completion Rate</span>
                      </div>
                      <span className="font-semibold">92%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}