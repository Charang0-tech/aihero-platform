'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useProgressStore } from '@/stores/useProgressStore'
import { curriculum, SUBSCRIPTION_TIERS, getAccessibleWeeks } from '@/lib/curriculum'
import { 
  Trophy, Zap, Clock, Target, CheckCircle, Lock, Star, 
  Crown, Rocket, Brain, Code, Users, TrendingUp, 
  PlayCircle, Calendar, Award, Gift, ChevronRight 
} from 'lucide-react'

export default function Dashboard() {
  const {
    subscription,
    userStats,
    lessonProgress,
    weekProgress,
    hasAccessToWeek,
    setShowUpgradeModal,
    showUpgradeModal,
    upgradeSubscription,
    addXP,
    calculateLevel
  } = useProgressStore()

  const [selectedTier, setSelectedTier] = useState<'intermediate' | 'advanced'>('intermediate')
  
  const accessibleWeeks = getAccessibleWeeks(subscription.tier)
  const currentLevel = calculateLevel()
  const progressToNextLevel = (userStats.xpPoints % 100)

  // Calculate overall progress
  const totalAccessibleLessons = accessibleWeeks.reduce((total, week) => total + week.lessons.length, 0)
  const completedLessons = Object.values(lessonProgress).filter(lesson => lesson.completed).length
  const overallProgress = totalAccessibleLessons > 0 ? (completedLessons / totalAccessibleLessons) * 100 : 0

  const TierCard = ({ 
    tier, 
    tierKey, 
    isCurrentTier, 
    isUpgrade = false 
  }: { 
    tier: any, 
    tierKey: string, 
    isCurrentTier: boolean, 
    isUpgrade?: boolean 
  }) => {
    const colors = {
      emerald: 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
      blue: 'border-blue-500 bg-blue-500/10 text-blue-400', 
      purple: 'border-purple-500 bg-purple-500/10 text-purple-400'
    }

    const icons = {
      free: Gift,
      intermediate: Brain,
      advanced: Crown
    }

    const Icon = icons[tierKey as keyof typeof icons] || Gift

    return (
      <div className={`
        relative p-6 rounded-xl border-2 transition-all duration-300
        ${isCurrentTier 
          ? `${colors[tier.color as keyof typeof colors]} scale-105` 
          : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
        }
        ${isUpgrade ? 'cursor-pointer hover:scale-102' : ''}
      `}
      onClick={isUpgrade ? () => setSelectedTier(tierKey as any) : undefined}
      >
        {isCurrentTier && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              CURRENT PLAN
            </span>
          </div>
        )}
        
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8" />
          <div>
            <h3 className="text-xl font-bold text-white">{tier.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">${tier.price}</span>
              <span className="text-gray-400 text-sm">/{tier.duration}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {tier.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        {isUpgrade && !isCurrentTier && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              upgradeSubscription(tierKey as any)
            }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Upgrade to {tier.name}
          </button>
        )}
      </div>
    )
  }

  const WeekCard = ({ week }: { week: any }) => {
    const hasAccess = hasAccessToWeek(week.week)
    const weekProgressData = weekProgress[week.week]
    const completedLessonsInWeek = week.lessons.filter((lesson: any) => 
      lessonProgress[lesson.id]?.completed
    ).length
    const weekProgressPercent = (completedLessonsInWeek / week.lessons.length) * 100

    return (
      <div className={`
        relative p-6 rounded-xl border transition-all duration-300
        ${hasAccess 
          ? 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/70' 
          : 'border-gray-800 bg-gray-900/50 opacity-60'
        }
      `}>
        {!hasAccess && (
          <div className="absolute inset-0 bg-gray-900/80 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Lock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400 font-semibold">Upgrade Required</p>
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Unlock Week {week.week}
              </button>
            </div>
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Week {week.week}</h3>
            <h4 className="text-lg text-blue-400 mb-2">{week.title}</h4>
            <p className="text-gray-400 text-sm">{week.focus}</p>
          </div>
          <div className="flex items-center gap-2">
            {week.tier !== 'free' && (
              <div className={`
                px-2 py-1 rounded-full text-xs font-semibold
                ${week.tier === 'intermediate' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}
              `}>
                {week.tier.toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {hasAccess && (
          <>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Progress</span>
                <span className="text-gray-300">{completedLessonsInWeek}/{week.lessons.length} lessons</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${weekProgressPercent}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 mb-4">
              {week.lessons.map((lesson: any) => (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.id}`}
                  className="group"
                >
                  <div className={`
                    p-3 rounded-lg border text-center transition-all duration-200
                    ${lessonProgress[lesson.id]?.completed
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                      : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-white'
                    }
                  `}>
                    {lessonProgress[lesson.id]?.completed ? (
                      <CheckCircle className="w-5 h-5 mx-auto mb-1" />
                    ) : (
                      <PlayCircle className="w-5 h-5 mx-auto mb-1 group-hover:text-blue-400" />
                    )}
                    <p className="text-xs font-semibold">{lesson.day.substring(0, 3)}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href={`/week/${week.week}`}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
            >
              View Week Details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Bootcamp 2025
              </h1>
              <p className="text-gray-400 mt-1">Transform into an AI Developer in 24 weeks</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{currentLevel}</div>
                <div className="text-xs text-gray-400">Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{userStats.streakDays}</div>
                <div className="text-xs text-gray-400">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{Math.round(overallProgress)}%</div>
                <div className="text-xs text-gray-400">Complete</div>
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">XP Progress to Level {currentLevel + 1}</span>
              <span className="text-gray-300">{progressToNextLevel}/100 XP</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressToNextLevel}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Current Subscription Status */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Current Subscription</h2>
                <p className="text-gray-300">
                  You're on the <span className="text-emerald-400 font-semibold">{SUBSCRIPTION_TIERS[subscription.tier].name}</span> plan
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Access to weeks 1-{SUBSCRIPTION_TIERS[subscription.tier].maxWeek}
                </p>
              </div>
              
              {subscription.tier === 'free' && (
                <button
                  onClick={() => setShowUpgradeModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  Upgrade Now
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Weekly Progress Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((week) => (
              <WeekCard key={week.week} week={week} />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
              <div className="text-2xl font-bold text-white">{userStats.totalLessonsCompleted}</div>
              <div className="text-gray-400 text-sm">Lessons Completed</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Clock className="w-8 h-8 text-blue-400 mb-3" />
              <div className="text-2xl font-bold text-white">{Math.round(userStats.totalTimeSpent / 60)}h</div>
              <div className="text-gray-400 text-sm">Time Invested</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Star className="w-8 h-8 text-purple-400 mb-3" />
              <div className="text-2xl font-bold text-white">{userStats.portfolioProjects}</div>
              <div className="text-gray-400 text-sm">Portfolio Projects</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Zap className="w-8 h-8 text-emerald-400 mb-3" />
              <div className="text-2xl font-bold text-white">{userStats.xpPoints}</div>
              <div className="text-gray-400 text-sm">XP Points</div>
            </div>
          </div>
        </section>
      </main>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Unlock Your AI Potential</h2>
              <p className="text-gray-400">Choose the plan that fits your learning goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <TierCard 
                tier={SUBSCRIPTION_TIERS.intermediate} 
                tierKey="intermediate"
                isCurrentTier={selectedTier === 'intermediate'}
                isUpgrade={true}
              />
              <TierCard 
                tier={SUBSCRIPTION_TIERS.advanced} 
                tierKey="advanced"
                isCurrentTier={selectedTier === 'advanced'}
                isUpgrade={true}
              />
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Maybe Later
              </button>
              <button
                onClick={() => upgradeSubscription(selectedTier)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Start {SUBSCRIPTION_TIERS[selectedTier].name} - ${SUBSCRIPTION_TIERS[selectedTier].price}/month
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}