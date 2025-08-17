// stores/useProgressStore.ts - Updated for Freemium Model

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LessonProgress {
  id: string
  completed: boolean
  score?: number
  timeSpent: number // minutes
  lastAccessed: Date
  deliverableSubmitted: boolean
  notes?: string
}

interface WeekProgress {
  week: number
  lessonsCompleted: number
  totalLessons: number
  weeklyScore: number
  isCompleted: boolean
  unlockedAt?: Date
}

interface UserStats {
  totalTimeSpent: number
  streakDays: number
  lastActiveDate: Date
  totalLessonsCompleted: number
  portfolioProjects: number
  currentLevel: number
  xpPoints: number
}

interface SubscriptionInfo {
  tier: 'free' | 'intermediate' | 'advanced'
  startDate: Date
  isActive: boolean
  paymentStatus: 'active' | 'pending' | 'failed' | 'cancelled'
  nextBillingDate?: Date
  cancelAtPeriodEnd?: boolean
}

interface ProgressStore {
  // User subscription and access
  subscription: SubscriptionInfo
  
  // Progress tracking
  lessonProgress: Record<string, LessonProgress>
  weekProgress: Record<number, WeekProgress>
  userStats: UserStats
  
  // UI state
  showUpgradeModal: boolean
  currentLessonId?: string
  
  // Actions
  markLessonCompleted: (lessonId: string, score?: number, timeSpent?: number) => void
  markDeliverableSubmitted: (lessonId: string) => void
  updateLessonNotes: (lessonId: string, notes: string) => void
  updateTimeSpent: (lessonId: string, minutes: number) => void
  
  // Week progress
  calculateWeekProgress: (weekNumber: number) => void
  unlockWeek: (weekNumber: number) => void
  
  // Subscription management
  upgradeSubscription: (newTier: 'intermediate' | 'advanced') => void
  cancelSubscription: () => void
  
  // UI actions
  setShowUpgradeModal: (show: boolean) => void
  setCurrentLesson: (lessonId: string) => void
  
  // Stats and achievements
  updateStreak: () => void
  addXP: (points: number) => void
  calculateLevel: () => number
  
  // Access control
  hasAccessToWeek: (weekNumber: number) => boolean
  hasAccessToLesson: (lessonId: string) => boolean
  getRemainingFreeWeeks: () => number
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      // Initial subscription - free tier
      subscription: {
        tier: 'free',
        startDate: new Date(),
        isActive: true,
        paymentStatus: 'active'
      },
      
      // Initial progress state
      lessonProgress: {},
      weekProgress: {},
      
      // Initial user stats
      userStats: {
        totalTimeSpent: 0,
        streakDays: 0,
        lastActiveDate: new Date(),
        totalLessonsCompleted: 0,
        portfolioProjects: 0,
        currentLevel: 1,
        xpPoints: 0
      },
      
      // UI state
      showUpgradeModal: false,
      currentLessonId: undefined,
      
      // Lesson actions
      markLessonCompleted: (lessonId: string, score = 100, timeSpent = 0) => {
        set((state) => {
          const newLessonProgress = {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              id: lessonId,
              completed: true,
              score,
              timeSpent: (state.lessonProgress[lessonId]?.timeSpent || 0) + timeSpent,
              lastAccessed: new Date(),
              deliverableSubmitted: state.lessonProgress[lessonId]?.deliverableSubmitted || false
            }
          }
          
          const newStats = {
            ...state.userStats,
            totalLessonsCompleted: state.userStats.totalLessonsCompleted + 1,
            totalTimeSpent: state.userStats.totalTimeSpent + timeSpent,
            lastActiveDate: new Date()
          }
          
          return {
            ...state,
            lessonProgress: newLessonProgress,
            userStats: newStats
          }
        })
        
        // Add XP for completion
        get().addXP(score > 80 ? 50 : 25)
        get().updateStreak()
      },
      
      markDeliverableSubmitted: (lessonId: string) => {
        set((state) => ({
          ...state,
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              id: lessonId,
              deliverableSubmitted: true,
              lastAccessed: new Date(),
              completed: state.lessonProgress[lessonId]?.completed || false,
              timeSpent: state.lessonProgress[lessonId]?.timeSpent || 0
            }
          }
        }))
        
        // Extra XP for portfolio projects
        get().addXP(25)
      },
      
      updateLessonNotes: (lessonId: string, notes: string) => {
        set((state) => ({
          ...state,
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              id: lessonId,
              notes,
              lastAccessed: new Date(),
              completed: state.lessonProgress[lessonId]?.completed || false,
              timeSpent: state.lessonProgress[lessonId]?.timeSpent || 0,
              deliverableSubmitted: state.lessonProgress[lessonId]?.deliverableSubmitted || false
            }
          }
        }))
      },
      
      updateTimeSpent: (lessonId: string, minutes: number) => {
        set((state) => ({
          ...state,
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              id: lessonId,
              timeSpent: (state.lessonProgress[lessonId]?.timeSpent || 0) + minutes,
              lastAccessed: new Date(),
              completed: state.lessonProgress[lessonId]?.completed || false,
              deliverableSubmitted: state.lessonProgress[lessonId]?.deliverableSubmitted || false
            }
          },
          userStats: {
            ...state.userStats,
            totalTimeSpent: state.userStats.totalTimeSpent + minutes,
            lastActiveDate: new Date()
          }
        }))
      },
      
      // Week progress calculation
      calculateWeekProgress: (weekNumber: number) => {
        const state = get()
        // This would need to be implemented with actual curriculum data
        // For now, just update the week as accessed
        set((currentState) => ({
          ...currentState,
          weekProgress: {
            ...currentState.weekProgress,
            [weekNumber]: {
              ...currentState.weekProgress[weekNumber],
              week: weekNumber,
              lessonsCompleted: 0, // Calculate based on actual lessons
              totalLessons: 5, // Default, should come from curriculum
              weeklyScore: 0,
              isCompleted: false
            }
          }
        }))
      },
      
      unlockWeek: (weekNumber: number) => {
        set((state) => ({
          ...state,
          weekProgress: {
            ...state.weekProgress,
            [weekNumber]: {
              ...state.weekProgress[weekNumber],
              week: weekNumber,
              unlockedAt: new Date(),
              lessonsCompleted: 0,
              totalLessons: 5,
              weeklyScore: 0,
              isCompleted: false
            }
          }
        }))
      },
      
      // Subscription management
      upgradeSubscription: (newTier: 'intermediate' | 'advanced') => {
        set((state) => ({
          ...state,
          subscription: {
            ...state.subscription,
            tier: newTier,
            startDate: new Date(),
            isActive: true,
            paymentStatus: 'active',
            nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
          },
          showUpgradeModal: false
        }))
      },
      
      cancelSubscription: () => {
        set((state) => ({
          ...state,
          subscription: {
            ...state.subscription,
            paymentStatus: 'cancelled',
            cancelAtPeriodEnd: true
          }
        }))
      },
      
      // UI actions
      setShowUpgradeModal: (show: boolean) => {
        set((state) => ({ ...state, showUpgradeModal: show }))
      },
      
      setCurrentLesson: (lessonId: string) => {
        set((state) => ({ ...state, currentLessonId: lessonId }))
      },
      
      // Stats and achievements
      updateStreak: () => {
        const state = get()
        const today = new Date()
        const lastActive = new Date(state.userStats.lastActiveDate)
        const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))
        
        set((currentState) => ({
          ...currentState,
          userStats: {
            ...currentState.userStats,
            streakDays: daysDiff <= 1 ? currentState.userStats.streakDays + 1 : 1,
            lastActiveDate: today
          }
        }))
      },
      
      addXP: (points: number) => {
        set((state) => {
          const newXP = state.userStats.xpPoints + points
          const newLevel = get().calculateLevel()
          
          return {
            ...state,
            userStats: {
              ...state.userStats,
              xpPoints: newXP,
              currentLevel: newLevel
            }
          }
        })
      },
      
      calculateLevel: () => {
        const xp = get().userStats.xpPoints
        return Math.floor(xp / 100) + 1 // Level up every 100 XP
      },
      
      // Access control
      hasAccessToWeek: (weekNumber: number) => {
        const state = get()
        const tier = state.subscription.tier
        
        if (tier === 'free' && weekNumber <= 8) return true
        if (tier === 'intermediate' && weekNumber <= 16) return true
        if (tier === 'advanced' && weekNumber <= 24) return true
        
        return false
      },
      
      hasAccessToLesson: (lessonId: string) => {
        // Extract week number from lesson ID (assuming format like 'w1-mon')
        const weekMatch = lessonId.match(/w(\d+)-/)
        if (!weekMatch) return false
        
        const weekNumber = parseInt(weekMatch[1])
        return get().hasAccessToWeek(weekNumber)
      },
      
      getRemainingFreeWeeks: () => {
        const state = get()
        if (state.subscription.tier !== 'free') return 0
        
        const completedFreeWeeks = Object.keys(state.weekProgress)
          .map(Number)
          .filter(week => week <= 8 && state.weekProgress[week]?.isCompleted)
          .length
        
        return Math.max(0, 8 - completedFreeWeeks)
      }
    }),
    {
      name: 'ai-bootcamp-progress',
      version: 1,
    }
  )
)