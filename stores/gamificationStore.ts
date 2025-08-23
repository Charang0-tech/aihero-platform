// stores/gamificationStore.ts
// Complete gamification system for AIHero platform

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types for gamification system
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'learning' | 'streak' | 'social' | 'project' | 'milestone';
  points: number;
  unlocked: boolean;
  unlockedAt?: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  requirements: {
    type: 'lessons_completed' | 'streak_days' | 'projects_built' | 'assessments_perfect' | 'discussion_posts';
    target: number;
    current?: number;
  };
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: string;
  earnedAt: Date;
}

export interface StreakData {
  current: number;
  longest: number;
  lastStudyDate: string | null;
  weeklyGoal: number;
  weeklyProgress: number;
}

export interface LearningStats {
  totalPoints: number;
  level: number;
  xpToNextLevel: number;
  totalXp: number;
  lessonsCompleted: number;
  projectsBuilt: number;
  assessmentsPerfect: number;
  discussionPosts: number;
  codeExecutions: number;
  studyTimeMinutes: number;
  weeklyStats: {
    week: string;
    lessonsCompleted: number;
    studyTime: number;
    points: number;
  }[];
}

export interface UserProgress {
  userId: string;
  currentWeek: number;
  currentLesson: string;
  completedLessons: string[];
  completedAssessments: { [lessonId: string]: { score: number; attempts: number } };
  projectSubmissions: { [lessonId: string]: { code: string; submittedAt: Date; score?: number } };
  discussionResponses: { [lessonId: string]: { responses: string[]; submittedAt: Date } };
  lastActiveDate: Date;
  subscriptionTier: 'free' | 'intermediate' | 'advanced' | 'professional';
  subscriptionExpiry?: Date;
}

interface GamificationState {
  // User progress and stats
  userProgress: UserProgress;
  learningStats: LearningStats;
  streakData: StreakData;
  achievements: Achievement[];
  badges: Badge[];
  
  // UI state
  showLevelUpModal: boolean;
  showAchievementModal: Achievement | null;
  showStreakCelebration: boolean;
  
  // Actions
  completeLesson: (lessonId: string, timeSpent: number) => void;
  submitAssessment: (lessonId: string, score: number) => void;
  submitProject: (lessonId: string, code: string) => void;
  addDiscussionPost: (lessonId: string, response: string) => void;
  updateStreak: () => void;
  unlockAchievement: (achievementId: string) => void;
  addBadge: (badge: Badge) => void;
  calculateLevel: () => number;
  getXpForLevel: (level: number) => number;
  
  // Analytics
  getWeeklyProgress: () => any;
  getLearningInsights: () => any;
  exportUserData: () => any;
}

// Achievement definitions
const achievementDefinitions: Achievement[] = [
  // Learning Achievements
  {
    id: 'first_lesson',
    title: 'First Steps',
    description: 'Complete your first AI lesson',
    icon: '🎓',
    category: 'learning',
    points: 50,
    unlocked: false,
    rarity: 'common',
    requirements: { type: 'lessons_completed', target: 1 }
  },
  {
    id: 'week_warrior',
    title: 'Week Warrior',
    description: 'Complete an entire week of lessons',
    icon: '⚡',
    category: 'learning',
    points: 200,
    unlocked: false,
    rarity: 'rare',
    requirements: { type: 'lessons_completed', target: 6 }
  },
  {
    id: 'python_master',
    title: 'Python Master',
    description: 'Complete the first 12 weeks (Free Tier)',
    icon: '🐍',
    category: 'milestone',
    points: 1000,
    unlocked: false,
    rarity: 'epic',
    requirements: { type: 'lessons_completed', target: 72 }
  },
  
  // Streak Achievements
  {
    id: 'on_fire',
    title: 'On Fire!',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    category: 'streak',
    points: 300,
    unlocked: false,
    rarity: 'rare',
    requirements: { type: 'streak_days', target: 7 }
  },
  {
    id: 'unstoppable',
    title: 'Unstoppable',
    description: 'Maintain a 30-day learning streak',
    icon: '💪',
    category: 'streak',
    points: 1500,
    unlocked: false,
    rarity: 'legendary',
    requirements: { type: 'streak_days', target: 30 }
  },
  
  // Project Achievements
  {
    id: 'builder',
    title: 'Builder',
    description: 'Complete your first portfolio project',
    icon: '🛠️',
    category: 'project',
    points: 400,
    unlocked: false,
    rarity: 'rare',
    requirements: { type: 'projects_built', target: 1 }
  },
  {
    id: 'architect',
    title: 'AI Architect',
    description: 'Build 10 AI projects',
    icon: '🏗️',
    category: 'project',
    points: 2000,
    unlocked: false,
    rarity: 'legendary',
    requirements: { type: 'projects_built', target: 10 }
  },
  
  // Assessment Achievements
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Get 100% on 5 assessments',
    icon: '💯',
    category: 'learning',
    points: 500,
    unlocked: false,
    rarity: 'epic',
    requirements: { type: 'assessments_perfect', target: 5 }
  },
  
  // Social Achievements
  {
    id: 'contributor',
    title: 'Community Contributor',
    description: 'Post 20 discussion responses',
    icon: '💬',
    category: 'social',
    points: 300,
    unlocked: false,
    rarity: 'rare',
    requirements: { type: 'discussion_posts', target: 20 }
  }
];

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      // Initial state
      userProgress: {
        userId: '',
        currentWeek: 1,
        currentLesson: '',
        completedLessons: [],
        completedAssessments: {},
        projectSubmissions: {},
        discussionResponses: {},
        lastActiveDate: new Date(),
        subscriptionTier: 'free'
      },
      
      learningStats: {
        totalPoints: 0,
        level: 1,
        xpToNextLevel: 100,
        totalXp: 0,
        lessonsCompleted: 0,
        projectsBuilt: 0,
        assessmentsPerfect: 0,
        discussionPosts: 0,
        codeExecutions: 0,
        studyTimeMinutes: 0,
        weeklyStats: []
      },
      
      streakData: {
        current: 0,
        longest: 0,
        lastStudyDate: null,
        weeklyGoal: 5,
        weeklyProgress: 0
      },
      
      achievements: achievementDefinitions,
      badges: [],
      
      showLevelUpModal: false,
      showAchievementModal: null,
      showStreakCelebration: false,
      
      // Actions
      completeLesson: (lessonId: string, timeSpent: number) => {
        set((state) => {
          const newCompletedLessons = [...state.userProgress.completedLessons, lessonId];
          const newTotalPoints = state.learningStats.totalPoints + 50; // Base points per lesson
          const newTotalXp = state.learningStats.totalXp + 50;
          const newLevel = Math.floor(newTotalXp / 100) + 1;
          const showLevelUp = newLevel > state.learningStats.level;
          
          // Update weekly stats
          const currentWeek = new Date().toISOString().slice(0, 10);
          const weeklyStats = [...state.learningStats.weeklyStats];
          const currentWeekIndex = weeklyStats.findIndex(week => week.week === currentWeek);
          
          if (currentWeekIndex >= 0) {
            weeklyStats[currentWeekIndex].lessonsCompleted++;
            weeklyStats[currentWeekIndex].studyTime += timeSpent;
            weeklyStats[currentWeekIndex].points += 50;
          } else {
            weeklyStats.push({
              week: currentWeek,
              lessonsCompleted: 1,
              studyTime: timeSpent,
              points: 50
            });
          }
          
          return {
            userProgress: {
              ...state.userProgress,
              completedLessons: newCompletedLessons,
              lastActiveDate: new Date()
            },
            learningStats: {
              ...state.learningStats,
              totalPoints: newTotalPoints,
              totalXp: newTotalXp,
              level: newLevel,
              xpToNextLevel: ((newLevel) * 100) - newTotalXp,
              lessonsCompleted: state.learningStats.lessonsCompleted + 1,
              studyTimeMinutes: state.learningStats.studyTimeMinutes + timeSpent,
              weeklyStats
            },
            showLevelUpModal: showLevelUp
          };
        });
        
        // Check achievements
        get().updateStreak();
        get().checkAchievements();
      },
      
      submitAssessment: (lessonId: string, score: number) => {
        set((state) => {
          const bonusPoints = score === 100 ? 100 : Math.floor(score / 2); // Bonus for perfect scores
          
          return {
            userProgress: {
              ...state.userProgress,
              completedAssessments: {
                ...state.userProgress.completedAssessments,
                [lessonId]: { score, attempts: (state.userProgress.completedAssessments[lessonId]?.attempts || 0) + 1 }
              }
            },
            learningStats: {
              ...state.learningStats,
              totalPoints: state.learningStats.totalPoints + bonusPoints,
              totalXp: state.learningStats.totalXp + bonusPoints,
              assessmentsPerfect: score === 100 ? state.learningStats.assessmentsPerfect + 1 : state.learningStats.assessmentsPerfect
            }
          };
        });
      },
      
      submitProject: (lessonId: string, code: string) => {
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            projectSubmissions: {
              ...state.userProgress.projectSubmissions,
              [lessonId]: { code, submittedAt: new Date() }
            }
          },
          learningStats: {
            ...state.learningStats,
            projectsBuilt: state.learningStats.projectsBuilt + 1,
            totalPoints: state.learningStats.totalPoints + 200, // Projects worth more points
            totalXp: state.learningStats.totalXp + 200
          }
        }));
      },
      
      addDiscussionPost: (lessonId: string, response: string) => {
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            discussionResponses: {
              ...state.userProgress.discussionResponses,
              [lessonId]: {
                responses: [...(state.userProgress.discussionResponses[lessonId]?.responses || []), response],
                submittedAt: new Date()
              }
            }
          },
          learningStats: {
            ...state.learningStats,
            discussionPosts: state.learningStats.discussionPosts + 1,
            totalPoints: state.learningStats.totalPoints + 25,
            totalXp: state.learningStats.totalXp + 25
          }
        }));
      },
      
      updateStreak: () => {
        set((state) => {
          const today = new Date().toDateString();
          const lastStudyDate = state.streakData.lastStudyDate;
          const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
          
          let newStreak = state.streakData.current;
          let showCelebration = false;
          
          if (!lastStudyDate) {
            // First time studying
            newStreak = 1;
            showCelebration = true;
          } else if (lastStudyDate === yesterday) {
            // Continuing streak
            newStreak = state.streakData.current + 1;
            showCelebration = newStreak % 7 === 0; // Celebrate weekly milestones
          } else if (lastStudyDate !== today) {
            // Streak broken
            newStreak = 1;
          }
          
          return {
            streakData: {
              ...state.streakData,
              current: newStreak,
              longest: Math.max(newStreak, state.streakData.longest),
              lastStudyDate: today
            },
            showStreakCelebration: showCelebration
          };
        });
      },
      checkAchievements: () => {
        const state = get();
        const stats = state.learningStats;
        const streak = state.streakData;
        
        state.achievements.forEach(achievement => {
          if (!achievement.unlocked) {
            let shouldUnlock = false;
            
            switch (achievement.requirements.type) {
              case 'lessons_completed':
                shouldUnlock = stats.lessonsCompleted >= achievement.requirements.target;
                break;
              case 'streak_days':
                shouldUnlock = streak.current >= achievement.requirements.target;
                break;
              case 'projects_built':
                shouldUnlock = stats.projectsBuilt >= achievement.requirements.target;
                break;
              case 'assessments_perfect':
                shouldUnlock = stats.assessmentsPerfect >= achievement.requirements.target;
                break;
              case 'discussion_posts':
                shouldUnlock = stats.discussionPosts >= achievement.requirements.target;
                break;
            }
            
            if (shouldUnlock) {
              get().unlockAchievement(achievement.id);
            }
          }
        });
      },
      
      unlockAchievement: (achievementId: string) => {
        set((state) => {
          const achievement = state.achievements.find(a => a.id === achievementId);
          if (achievement && !achievement.unlocked) {
            return {
              achievements: state.achievements.map(a => 
                a.id === achievementId 
                  ? { ...a, unlocked: true, unlockedAt: new Date() }
                  : a
              ),
              learningStats: {
                ...state.learningStats,
                totalPoints: state.learningStats.totalPoints + achievement.points,
                totalXp: state.learningStats.totalXp + achievement.points
              },
              showAchievementModal: achievement
            };
          }
          return state;
        });
      },
      
      addBadge: (badge: Badge) => {
        set((state) => ({
          badges: [...state.badges, badge]
        }));
      },
      
      calculateLevel: () => {
        const { totalXp } = get().learningStats;
        return Math.floor(totalXp / 100) + 1;
      },
      
      getXpForLevel: (level: number) => {
        return level * 100;
      },
      
      getWeeklyProgress: () => {
        const { weeklyStats } = get().learningStats;
        return weeklyStats.slice(-7); // Last 7 weeks
      },
      
      getLearningInsights: () => {
        const state = get();
        const { learningStats, streakData, userProgress } = state;
        
        return {
          totalStudyTime: `${Math.floor(learningStats.studyTimeMinutes / 60)}h ${learningStats.studyTimeMinutes % 60}m`,
          averageSessionTime: learningStats.lessonsCompleted > 0 
            ? `${Math.floor(learningStats.studyTimeMinutes / learningStats.lessonsCompleted)}m`
            : '0m',
          completionRate: userProgress.completedLessons.length,
          streakInfo: {
            current: streakData.current,
            longest: streakData.longest
          },
          achievements: state.achievements.filter(a => a.unlocked).length,
          nextMilestone: state.achievements.find(a => !a.unlocked)
        };
      },
      
      exportUserData: () => {
        const state = get();
        return {
          timestamp: new Date().toISOString(),
          userProgress: state.userProgress,
          learningStats: state.learningStats,
          achievements: state.achievements.filter(a => a.unlocked),
          streakData: state.streakData
        };
      }
    }),
    {
      name: 'aihero-gamification',
      version: 1
    }
  )
);

// Additional helper functions
export const getLevelColor = (level: number): string => {
  if (level < 5) return 'from-green-400 to-green-600';
  if (level < 10) return 'from-blue-400 to-blue-600';
  if (level < 20) return 'from-purple-400 to-purple-600';
  if (level < 50) return 'from-orange-400 to-orange-600';
  return 'from-red-400 to-red-600';
};

export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'common': return 'text-gray-400 border-gray-400';
    case 'rare': return 'text-blue-400 border-blue-400';
    case 'epic': return 'text-purple-400 border-purple-400';
    case 'legendary': return 'text-yellow-400 border-yellow-400';
    default: return 'text-gray-400 border-gray-400';
  }
};
