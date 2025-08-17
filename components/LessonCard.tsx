'use client'

import React, { useState, useEffect } from 'react'
import { 
  Award, 
  Star, 
  Trophy, 
  Zap, 
  Target, 
  Shield, 
  Crown, 
  Clock, 
  Code, 
  BookOpen, 
  Coffee, 
  Flame,
  TrendingUp,
  Calendar,
  BarChart3,
  Users,
  Brain,
  Rocket,
  CheckCircle2,
  Play,
  Settings,
  Download,
  AlertTriangle,
  Sun,
  Moon,
  LogOut,
  User,
  ChevronRight,
  Activity,
  FileText,
  Timer
} from 'lucide-react'

import { useProgressStore } from '../stores/useProgressStore'
import { auth } from '../lib/supabase'
import { getLessonsByWeek, getCurrentLesson } from '../lib/curriculum'

// Achievement Badge Component
function AchievementBadge({ achievement, size = "md" }: any) {
  const tierColors = {
    bronze: 'from-orange-400 to-orange-600',
    silver: 'from-gray-300 to-gray-500',
    gold: 'from-yellow-400 to-yellow-600',
    platinum: 'from-blue-400 to-purple-600',
    legendary: 'from-purple-500 to-pink-600'
  }
  
  const sizeClasses = size === "lg" ? "w-16 h-16" : size === "sm" ? "w-8 h-8" : "w-12 h-12"
  const iconSize = size === "lg" ? "w-8 h-8" : size === "sm" ? "w-4 h-4" : "w-6 h-6"
  
  return (
    <div className="group relative">
      <div className={`${sizeClasses} bg-gradient-to-r ${tierColors[achievement.tier as keyof typeof tierColors] || tierColors.bronze} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}>
        <Trophy className={`${iconSize} text-white`} />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
        <div className="font-semibold">{achievement.title}</div>
        <div className="text-xs text-gray-300">{achievement.description}</div>
        <div className="text-xs text-yellow-400">+{achievement.points} XP</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
      </div>
    </div>
  )
}

// Stat Card Component
function StatCard({ icon: Icon, label, value, target, color, trend, className = "" }: any) {
  const percentage = target ? (value / target) * 100 : 100
  
  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
            <TrendingUp className="w-4 h-4" />
            {trend}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">{value}</span>
          {target && <span className="text-white/60 text-sm">/ {target}</span>}
        </div>
        <p className="text-white/70 text-sm">{label}</p>
        
        {target && (
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

// Level Progress Component
function LevelProgressBar({ user }: any) {
  const getLevelInfo = (level: number) => {
    const levels = [
      { level: 1, title: 'Rookie', minXP: 0, maxXP: 500 },
      { level: 2, title: 'Apprentice', minXP: 500, maxXP: 1000 },
      { level: 3, title: 'Developer', minXP: 1000, maxXP: 2000 },
      { level: 4, title: 'Expert', minXP: 2000, maxXP: 3500 },
      { level: 5, title: 'AI Wizard', minXP: 3500, maxXP: 5000 },
      { level: 6, title: 'Legend', minXP: 5000, maxXP: Infinity }
    ]
    return levels.find(l => l.level === level) || levels[0]
  }
  
  const currentLevelInfo = getLevelInfo(user.currentLevel)
  const nextLevelInfo = getLevelInfo(user.currentLevel + 1)
  
  const progressInLevel = user.totalXP - currentLevelInfo.minXP
  const totalLevelXP = nextLevelInfo ? nextLevelInfo.minXP - currentLevelInfo.minXP : 1000
  const progressPercentage = (progressInLevel / totalLevelXP) * 100
  
  return (
    <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🤖</div>
          <div>
            <h2 className="text-2xl font-bold text-white">Welcome back!</h2>
            <p className="text-white/70">Level {user.currentLevel} {currentLevelInfo.title}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-1 text-3xl font-bold text-white">
            <Zap className="w-6 h-6 text-yellow-400" />
            {user.totalXP.toLocaleString()}
          </div>
          <div className="text-white/60 text-sm">Total XP</div>
        </div>
      </div>
      
      {/* Level Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/60 text-sm">Level {user.currentLevel}</span>
          <span className="text-white/60 text-sm">
            {nextLevelInfo ? `Level ${user.currentLevel + 1}` : 'Max Level'}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-1000 ease-out relative"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-white/60 text-sm">
            {nextLevelInfo 
              ? `${nextLevelInfo.minXP - user.totalXP} XP to next level`
              : 'Maximum level reached!'
            }
          </span>
        </div>
      </div>
    </div>
  )
}

// Streak Counter Component
function StreakCounter({ currentStreak, longestStreak }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
          <Flame className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Learning Streak</h3>
          <p className="text-white/70 text-sm">Keep it going!</p>
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-orange-400 mb-1">
          {currentStreak}
        </div>
        <div className="text-white/80 text-sm mb-2">Days in a row</div>
        <div className="text-white/60 text-xs mb-4">
          Best: {longestStreak} days
        </div>
        
        {/* Streak visualization */}
        <div className="flex justify-center gap-1">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < currentStreak % 7 ? 'bg-orange-400' : 'bg-white/20'
              }`}
            ></div>
          ))}
        </div>
        <div className="text-white/60 text-xs mt-2">This week</div>
      </div>
    </div>
  )
}

// Quick Actions Component
function QuickActions() {
  const { currentWeek, currentDay, exportData } = useProgressStore()
  
  const handleExportData = () => {
    const data = exportData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `aihero-progress-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Rocket className="w-5 h-5 text-blue-400" />
        Quick Actions
      </h3>
      
      <div className="space-y-3">
        <button 
          onClick={() => {
            const currentLesson = getCurrentLesson(currentWeek, currentDay)
            if (currentLesson) {
              window.location.href = `/lesson/${currentLesson.id}`
            }
          }}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4" />
          Continue Today's Lesson
        </button>
        
        <button 
          onClick={() => window.location.href = '/analytics'}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <BarChart3 className="w-4 h-4" />
          View Analytics
        </button>
        
        <button 
          onClick={handleExportData}
          className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export Progress
        </button>
      </div>
    </div>
  )
}

// Recent Achievements Component
function RecentAchievements({ achievements }: any) {
  const recentAchievements = achievements.slice(-3)
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Recent Achievements
        </h3>
        <span className="text-white/60 text-sm">{achievements.length} total</span>
      </div>
      
      {recentAchievements.length > 0 ? (
        <div className="space-y-3">
          {recentAchievements.map((achievement: any, index: number) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <AchievementBadge achievement={achievement} size="sm" />
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">{achievement.title}</div>
                <div className="text-white/60 text-xs">
                  {achievement.unlockedAt ? new Date(achievement.unlockedAt).toLocaleDateString() : 'Recently unlocked'}
                </div>
              </div>
              <div className="text-yellow-400 text-xs font-bold">+{achievement.points}</div>
            </div>
          ))}
          
          <button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm">
            View All Achievements
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <Trophy className="w-12 h-12 text-white/30 mx-auto mb-3" />
          <p className="text-white/60 text-sm">No achievements unlocked yet</p>
          <p className="text-white/40 text-xs">Complete your first lesson to get started!</p>
        </div>
      )}
    </div>
  )
}
function LessonCard({ lesson, onStart }: any) {
  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'from-green-500 to-green-600';
    if (difficulty <= 3) return 'from-yellow-500 to-yellow-600';
    if (difficulty <= 4) return 'from-orange-500 to-orange-600';
    return 'from-red-500 to-red-600';
  };

  const getDifficultyText = (difficulty: number) => {
    if (difficulty <= 2) return 'Beginner';
    if (difficulty <= 3) return 'Intermediate';
    if (difficulty <= 4) return 'Advanced';
    return 'Expert';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
         onClick={() => onStart(lesson.id)}>
      
      <div className="flex items-center justify-between mb-3">
        <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getDifficultyColor(lesson.difficulty)}`}>
          {getDifficultyText(lesson.difficulty)}
        </div>
        <div className="text-white/60 text-sm">
          {Math.floor(lesson.duration / 60)}h {lesson.duration % 60}m
        </div>
      </div>

      <h3 className="text-white font-semibold mb-2 line-clamp-2">
        {lesson.title}
      </h3>

      <p className="text-white/70 text-sm mb-3 line-clamp-2">
        {lesson.target}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-white/60 text-xs">
          {lesson.day}
        </span>
        <button 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium px-3 py-1 rounded-lg transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onStart(lesson.id);
          }}
        >
          Start →
        </button>
      </div>
    </div>
  );
}

function WeekProgressHeader({ weekNumber, completedLessons, totalLessons }: any) {
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          Week {weekNumber} Progress
        </h2>
        <div className="text-right">
          <div className="text-xl font-bold text-white">
            {completedLessons}/{totalLessons}
          </div>
          <div className="text-white/60 text-sm">Lessons Complete</div>
        </div>
      </div>
      
      <div className="w-full bg-white/20 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-white/60 mt-2">
        <span>{progressPercentage.toFixed(1)}% Complete</span>
        <span>
          {totalLessons - completedLessons > 0 
            ? `${totalLessons - completedLessons} lessons remaining`
            : 'Week completed! 🎉'
          }
        </span>
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  
  const {
    currentWeek,
    currentDay,
    totalHoursLogged,
    totalSessionsCompleted,
    consecutiveDays,
    lessons,
    totalXP,
    currentLevel,
    levelTitle,
    dailyStreak,
    longestStreak,
    unlockedAchievements,
    averageDifficulty,
    dropoutRisk,
    perfectWeeks,
    masteredTopics,
    setUserId,
    syncWithDatabase
  } = useProgressStore()

  // Initialize user and sync data
  useEffect(() => {
    const initializeUser = async () => {
      try {
        const currentUser = await auth.getCurrentUser()
        if (currentUser) {
          setUser(currentUser)
          setUserId(currentUser.id)
          await syncWithDatabase()
        }
      } catch (error) {
        console.error('Error initializing user:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeUser()

    // Update current time every minute
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [setUserId, syncWithDatabase])

  // Handle sign out
  const handleSignOut = async () => {
    await auth.signOut()
    window.location.href = '/auth/signin'
  }

  // Get current week lessons
  const weekLessons = getLessonsByWeek(currentWeek)
  const completedLessons = weekLessons.filter(lesson => lessons[lesson.id]?.completed).length
  const weeklyXP = weekLessons.reduce((sum, lesson) => sum + (lessons[lesson.id]?.xpEarned || 0), 0)
  
  // Calculate today's stats
  const todayLessons = Object.values(lessons).filter(lesson => {
    const completedToday = lesson.completedAt && 
      new Date(lesson.completedAt).toDateString() === new Date().toDateString()
    return completedToday
  })
  
  const todayXP = todayLessons.reduce((sum, lesson) => sum + (lesson.xpEarned || 0), 0)
  const todayMinutes = todayLessons.reduce((sum, lesson) => sum + (lesson.timeSpent || 0), 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading your progress...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">🧠 AIHero</h1>
          <p className="text-white/70 mb-8">Please sign in to continue your learning journey</p>
          <button 
            onClick={() => window.location.href = '/auth/signin'}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              🧠 AIHero Dashboard
            </h1>
            <p className="text-white/70">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.href = '/settings'}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={handleSignOut}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Level Progress */}
        <LevelProgressBar 
          user={{ 
            currentLevel, 
            levelTitle, 
            totalXP 
          }} 
        />

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Zap}
            label="XP Today"
            value={todayXP}
            target={150}
            color="from-yellow-400 to-orange-500"
            trend={todayXP > 100 ? "+15%" : undefined}
          />
          <StatCard
            icon={Clock}
            label="Study Time Today"
            value={`${todayMinutes}m`}
            target={150}
            color="from-blue-400 to-blue-600"
          />
          <StatCard
            icon={BookOpen}
            label="Lessons Completed"
            value={Object.values(lessons).filter(l => l.completed).length}
            color="from-green-400 to-green-600"
          />
          <StatCard
            icon={Target}
            label="Average Difficulty"
            value={averageDifficulty.toFixed(1)}
            color="from-purple-400 to-purple-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Week Progress */}
            <WeekProgressHeader
              weekNumber={currentWeek}
              completedLessons={completedLessons}
              totalLessons={weekLessons.length}
              weeklyXP={weeklyXP}
            />

            {/* Current Week Lessons */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  Week {currentWeek} Lessons
                </h3>
                <div className="text-white/60 text-sm">
                  {completedLessons}/{weekLessons.length} completed
                </div>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {weekLessons.slice(0, 4).map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    onStart={(lessonId: string) => window.location.href = `/lesson/${lessonId}`}
                    onContinue={(lessonId: string) => window.location.href = `/lesson/${lessonId}`}
                    className="h-full"
                  />
                ))}
              </div>
              
              {weekLessons.length > 4 && (
                <button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  View All Week {currentWeek} Lessons
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Study Progress Overview */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Progress Overview
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{totalHoursLogged.toFixed(1)}</div>
                  <div className="text-white/60 text-sm">Hours Logged</div>
                  <div className="text-white/40 text-xs">/ 210 total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{perfectWeeks}</div>
                  <div className="text-white/60 text-sm">Perfect Weeks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{masteredTopics.length}</div>
                  <div className="text-white/60 text-sm">Topics Mastered</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    dropoutRisk === 'LOW' ? 'text-green-400' : 
                    dropoutRisk === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {dropoutRisk}
                  </div>
                  <div className="text-white/60 text-sm">Risk Level</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <QuickActions />
            
            <StreakCounter 
              currentStreak={dailyStreak}
              longestStreak={longestStreak}
            />
            
            <RecentAchievements achievements={unlockedAchievements} />
            
            {/* Daily Challenge */}
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                Today's Challenge
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm">Daily XP Goal</span>
                    <span className="text-white font-semibold text-sm">{todayXP}/150</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-1000"
                      style={{ width: `${Math.min((todayXP / 150) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-center pt-2">
                  <div className="text-2xl font-bold text-white">{Math.round((todayXP / 150) * 100)}%</div>
                  <div className="text-white/60 text-xs">Daily Goal Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-white">Week {currentWeek}</div>
              <div className="text-white/60 text-sm">Current Week</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-400">{currentDay}</div>
              <div className="text-white/60 text-sm">Current Day</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-400">
                {Math.round((Object.values(lessons).filter(l => l.completed).length / 84) * 100)}%
              </div>
              <div className="text-white/60 text-sm">Course Progress</div>
            </div>
            <div>
              <div className="text-xl font-bold text-yellow-400">{totalXP}</div>
              <div className="text-white/60 text-sm">Total XP</div>
            </div>
            <div>
              <div className="text-xl font-bold text-purple-400">#{currentLevel}</div>
              <div className="text-white/60 text-sm">Current Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
