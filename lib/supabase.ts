import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

// Enhanced Database types for AIHero with gamification
export interface Database {
  public: {
    Tables: {
      // Enhanced users table with gamification
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          current_week: number
          current_day: string
          // Gamification columns
          total_xp: number
          current_level: number
          daily_streak: number
          longest_streak: number
          last_study_date: string | null
          perfect_weeks: number
          comeback_count: number
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          current_week?: number
          current_day?: string
          total_xp?: number
          current_level?: number
          daily_streak?: number
          longest_streak?: number
          last_study_date?: string | null
          perfect_weeks?: number
          comeback_count?: number
        }
        Update: {
          current_week?: number
          current_day?: string
          total_xp?: number
          current_level?: number
          daily_streak?: number
          longest_streak?: number
          last_study_date?: string | null
          perfect_weeks?: number
          comeback_count?: number
        }
      }
      
      // Original lessons table
      lessons: {
        Row: {
          id: string
          week: number
          day: string
          title: string
          content: any // JSONB
          evaluation_criteria: any // JSONB
          duration: number
          target: string
          deliverable: string
          difficulty: number
          math_prep: string | null
          created_at: string
        }
        Insert: {
          id: string
          week: number
          day: string
          title: string
          content: any
          evaluation_criteria: any
          duration?: number
          target: string
          deliverable: string
          difficulty?: number
          math_prep?: string | null
          created_at?: string
        }
        Update: {
          week?: number
          day?: string
          title?: string
          content?: any
          evaluation_criteria?: any
          duration?: number
          target?: string
          deliverable?: string
          difficulty?: number
          math_prep?: string | null
        }
      }

      // Enhanced user_progress table with gamification
      user_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          started_at: string
          completed_at: string | null
          time_spent: number
          attempts: number
          success: boolean
          code_submission: string | null
          feedback: string | null
          difficulty_rating: number
          // Gamification columns
          xp_earned: number
          confidence_rating: number | null
          breakthrough_moments: string[] | null
          struggled_with: string[] | null
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          started_at?: string
          completed_at?: string | null
          time_spent?: number
          attempts?: number
          success?: boolean
          code_submission?: string | null
          feedback?: string | null
          difficulty_rating?: number
          xp_earned?: number
          confidence_rating?: number | null
          breakthrough_moments?: string[] | null
          struggled_with?: string[] | null
        }
        Update: {
          completed_at?: string | null
          time_spent?: number
          attempts?: number
          success?: boolean
          code_submission?: string | null
          feedback?: string | null
          difficulty_rating?: number
          xp_earned?: number
          confidence_rating?: number | null
          breakthrough_moments?: string[] | null
          struggled_with?: string[] | null
        }
      }

      // New gamification tables
      user_achievements: {
        Row: {
          id: string
          user_id: string
          achievement_id: string
          title: string
          description: string
          tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'legendary'
          category: 'consistency' | 'skill' | 'resilience' | 'elite'
          points: number
          unlocked_at: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          achievement_id: string
          title: string
          description: string
          tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'legendary'
          category: 'consistency' | 'skill' | 'resilience' | 'elite'
          points: number
          unlocked_at?: string
          created_at?: string
        }
        Update: {
          // Achievements are immutable once created
        }
      }

      weekly_progress: {
        Row: {
          id: string
          user_id: string
          week_number: number
          lessons_completed: number
          total_lessons: number
          xp_earned: number
          total_time_spent: number
          achievements_unlocked: string[] | null
          is_perfect_week: boolean
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          week_number: number
          lessons_completed?: number
          total_lessons?: number
          xp_earned?: number
          total_time_spent?: number
          achievements_unlocked?: string[] | null
          is_perfect_week?: boolean
          completed_at?: string | null
          created_at?: string
        }
        Update: {
          lessons_completed?: number
          xp_earned?: number
          total_time_spent?: number
          achievements_unlocked?: string[] | null
          is_perfect_week?: boolean
          completed_at?: string | null
        }
      }

      study_sessions: {
        Row: {
          id: string
          user_id: string
          study_date: string
          lessons_completed: number
          total_minutes: number
          xp_earned: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          study_date: string
          lessons_completed?: number
          total_minutes?: number
          xp_earned?: number
          created_at?: string
        }
        Update: {
          lessons_completed?: number
          total_minutes?: number
          xp_earned?: number
        }
      }
    }
    Views: {
      user_stats: {
        Row: {
          id: string
          email: string
          total_xp: number
          current_level: number
          daily_streak: number
          longest_streak: number
          perfect_weeks: number
          total_achievements: number
          lessons_completed: number
          total_minutes_studied: number
          avg_difficulty: number
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Get Supabase URL and Key from environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Default client for general use
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Level configuration
const USER_LEVELS = [
  { level: 1, title: 'Rookie', minXP: 0, maxXP: 500 },
  { level: 2, title: 'Apprentice', minXP: 500, maxXP: 1000 },
  { level: 3, title: 'Developer', minXP: 1000, maxXP: 2000 },
  { level: 4, title: 'Expert', minXP: 2000, maxXP: 3500 },
  { level: 5, title: 'AI Wizard', minXP: 3500, maxXP: 5000 },
  { level: 6, title: 'Legend', minXP: 5000, maxXP: Infinity }
]

// Helper function to calculate level from XP
function calculateLevelFromXP(xp: number): number {
  for (let i = USER_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= USER_LEVELS[i].minXP) {
      return USER_LEVELS[i].level
    }
  }
  return 1
}

// Helper function to get level info
export function getLevelInfo(level: number) {
  return USER_LEVELS.find(l => l.level === level) || USER_LEVELS[0]
}

// Helper function to get level from XP
export function getLevelFromXP(xp: number) {
  return [...USER_LEVELS].reverse().find(l => xp >= l.minXP) || USER_LEVELS[0]
}

// Authentication helpers
export const auth = {
  signUp: async (email: string, password: string, metadata?: any) => {
    const result = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
    
    // Create user record if signup successful
    if (result.data.user && !result.error) {
      await supabase.from('users').insert({
        id: result.data.user.id,
        email: result.data.user.email!,
        current_week: 1,
        current_day: 'Monday',
        total_xp: 0,
        current_level: 1,
        daily_streak: 0,
        longest_streak: 0,
        perfect_weeks: 0,
        comeback_count: 0
      })
    }
    
    return result
  },
  
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  },
  
  signOut: async () => {
    return await supabase.auth.signOut()
  },
  
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },
  
  getCurrentSession: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    return session
  }
}

// NEW: AIHero gamification operations
export const gamification = {
  // Achievement operations
  achievements: {
    getByUser: async (userId: string) => {
      return await supabase
        .from('user_achievements')
        .select('*')
        .eq('user_id', userId)
        .order('unlocked_at', { ascending: false })
    },

    unlock: async (userId: string, achievementData: Database['public']['Tables']['user_achievements']['Insert']) => {
      // Check if achievement already exists
      const { data: existing } = await supabase
        .from('user_achievements')
        .select('id')
        .eq('user_id', userId)
        .eq('achievement_id', achievementData.achievement_id)
        .single()

      if (existing) {
        throw new Error('Achievement already unlocked')
      }

      // Insert new achievement
      const result = await supabase
        .from('user_achievements')
        .insert({ ...achievementData, user_id: userId })
        .select()
        .single()

      // Add XP to user
      if (!result.error && result.data) {
        await gamification.updateUserXP(userId, result.data.points)
      }

      return result
    },

    checkExists: async (userId: string, achievementId: string) => {
      const { data } = await supabase
        .from('user_achievements')
        .select('id')
        .eq('user_id', userId)
        .eq('achievement_id', achievementId)
        .single()
      return !!data
    }
  },

  // User and XP operations
  users: {
    get: async (userId: string) => {
      return await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()
    },

    create: async (userData: Database['public']['Tables']['users']['Insert']) => {
      return await supabase
        .from('users')
        .insert(userData)
        .select()
        .single()
    },

    update: async (userId: string, updates: Database['public']['Tables']['users']['Update']) => {
      return await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()
    }
  },

  updateUserXP: async (userId: string, xpToAdd: number) => {
    const { data: user } = await supabase
      .from('users')
      .select('total_xp, current_level')
      .eq('id', userId)
      .single()

    if (!user) throw new Error('User not found')

    const newXP = user.total_xp + xpToAdd
    const newLevel = calculateLevelFromXP(newXP)

    return await supabase
      .from('users')
      .update({ 
        total_xp: newXP, 
        current_level: newLevel 
      })
      .eq('id', userId)
      .select()
      .single()
  },

  // Lesson progress operations
  lessons: {
    getAll: async () => {
      return await supabase
        .from('lessons')
        .select('*')
        .order('week', { ascending: true })
        .order('day', { ascending: true })
    },

    getByWeek: async (week: number) => {
      return await supabase
        .from('lessons')
        .select('*')
        .eq('week', week)
        .order('day', { ascending: true })
    },

    getById: async (lessonId: string) => {
      return await supabase
        .from('lessons')
        .select('*')
        .eq('id', lessonId)
        .single()
    }
  },

  progress: {
    start: async (userId: string, lessonId: string) => {
      return await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          lesson_id: lessonId,
          started_at: new Date().toISOString(),
          attempts: 1,
          time_spent: 0,
          success: false,
          difficulty_rating: 0,
          xp_earned: 0
        })
        .select()
        .single()
    },

    complete: async (userId: string, lessonId: string, data: {
      timeSpent: number
      success: boolean
      difficultyRating: number
      confidenceRating?: number
      breakthroughMoments?: string[]
      struggledWith?: string[]
      codeSubmission?: string
      feedback?: string
      xpEarned: number
    }) => {
      return await supabase
        .from('user_progress')
        .update({
          completed_at: new Date().toISOString(),
          time_spent: data.timeSpent,
          success: data.success,
          difficulty_rating: data.difficultyRating,
          confidence_rating: data.confidenceRating || null,
          breakthrough_moments: data.breakthroughMoments || null,
          struggled_with: data.struggledWith || null,
          code_submission: data.codeSubmission || null,
          feedback: data.feedback || null,
          xp_earned: data.xpEarned
        })
        .eq('user_id', userId)
        .eq('lesson_id', lessonId)
        .select()
        .single()
    },

    getByUser: async (userId: string) => {
      return await supabase
        .from('user_progress')
        .select(`
          *,
          lessons (
            title,
            week,
            day,
            difficulty
          )
        `)
        .eq('user_id', userId)
        .order('started_at', { ascending: false })
    }
  },

  // Streak operations
  updateStreak: async (userId: string) => {
    const today = new Date().toISOString().split('T')[0]
    
    // Get or create today's study session
    const { data: session, error } = await supabase
      .from('study_sessions')
      .upsert(
        { 
          user_id: userId, 
          study_date: today,
          lessons_completed: 1,
          total_minutes: 0,
          xp_earned: 0
        },
        { onConflict: 'user_id,study_date' }
      )
      .select()
      .single()

    if (error) throw error

    // Update user streak
    const { data: user } = await supabase
      .from('users')
      .select('daily_streak, longest_streak, last_study_date')
      .eq('id', userId)
      .single()

    if (!user) throw new Error('User not found')

    const lastStudyDate = user.last_study_date
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]

    let newStreak = 1
    if (lastStudyDate === yesterdayStr) {
      newStreak = user.daily_streak + 1
    } else if (lastStudyDate === today) {
      newStreak = user.daily_streak // Same day, don't increase
    }

    const newLongestStreak = Math.max(user.longest_streak, newStreak)

    return await supabase
      .from('users')
      .update({
        daily_streak: newStreak,
        longest_streak: newLongestStreak,
        last_study_date: today
      })
      .eq('id', userId)
      .select()
      .single()
  },

  // Get comprehensive user stats
  getUserStats: async (userId: string) => {
    return await supabase
      .from('user_stats')
      .select('*')
      .eq('id', userId)
      .single()
  }
}

// Utility functions for XP calculation
export const xpUtils = {
  calculateLessonXP: (difficultyRating: number, attempts: number, timeSpent: number) => {
    const baseXP = 50
    const difficultyMultiplier = difficultyRating * 20
    const efficiencyBonus = attempts === 1 ? 50 : Math.max(0, 30 - (attempts * 5))
    const timeBonus = timeSpent <= 120 ? 25 : timeSpent <= 180 ? 10 : 0
    
    return Math.floor(baseXP + difficultyMultiplier + efficiencyBonus + timeBonus)
  }
}

// Export the main client
export default supabase
