'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { 
  Brain, 
  BookOpen, 
  Target, 
  Clock, 
  Trophy, 
  PlayCircle, 
  User, 
  Settings, 
  LogOut,
  Star,
  Zap,
  Calendar,
  BarChart3
} from 'lucide-react'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/auth/signin')
        return
      }

      setUser(user)

      // Get user profile
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()

      setProfile(profile)
      setLoading(false)
    }

    getUser()
  }, [router, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Hero Platform</h1>
                <p className="text-sm text-gray-400">Master Python Programming</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white font-medium">
                  {profile?.first_name} {profile?.last_name}
                </p>
                <p className="text-sm text-gray-400">
                  {profile?.coding_experience?.replace('-', ' ') || 'New Learner'}
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  🎉 Welcome to AI Hero, {profile?.first_name}!
                </h2>
                <p className="text-gray-300 text-lg mt-1">
                  Your Python programming journey starts here. Ready to become an AI Hero?
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Learning Goal</p>
                    <p className="text-gray-300 text-sm">
                      {profile?.learning_goal?.replace('-', ' ') || 'Not specified'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Time Commitment</p>
                    <p className="text-gray-300 text-sm">
                      {profile?.time_commitment || 'Not specified'} hours/day
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="text-white font-medium">Experience Level</p>
                    <p className="text-gray-300 text-sm">
                      {profile?.coding_experience?.replace('-', ' ') || 'Beginner'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <PlayCircle className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Start Learning</h3>
            <p className="text-gray-400 text-sm">Begin your first Python lesson</p>
          </button>

          <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Browse Curriculum</h3>
            <p className="text-gray-400 text-sm">Explore all 84 lessons</p>
          </button>

          <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-400 text-sm">View your learning analytics</p>
          </button>

          <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Study Schedule</h3>
            <p className="text-gray-400 text-sm">Plan your learning sessions</p>
          </button>
        </div>

        {/* Learning Path Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Progress */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Your Learning Journey
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Week 1: Python Fundamentals</span>
                  <span className="text-green-400 text-sm font-medium">Ready to Start</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">Installation, variables, data types, and basic operations</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Week 2: Control Structures</span>
                  <span className="text-gray-400 text-sm">Locked</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gray-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">Loops, conditionals, and decision making</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Week 3: Functions & Modules</span>
                  <span className="text-gray-400 text-sm">Locked</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gray-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">Creating reusable code and organizing projects</p>
              </div>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Start First Lesson
            </button>
          </div>

          {/* Motivation & Next Steps */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-400" />
              Your Motivation
            </h3>
            
            {profile?.motivation ? (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <p className="text-gray-300 italic">"{profile.motivation}"</p>
              </div>
            ) : (
              <div className="bg-gray-500/10 border border-gray-500/30 rounded-lg p-4 mb-6">
                <p className="text-gray-400 italic">Complete your profile to add your motivation!</p>
              </div>
            )}

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Next Steps:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-gray-300">Complete your first Python lesson</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-300">Set up your development environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-300">Join the AI Hero community</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-6 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <User className="w-5 h-5" />
              Complete Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}