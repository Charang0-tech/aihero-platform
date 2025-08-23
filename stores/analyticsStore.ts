// stores/analyticsStore.ts
// Comprehensive learning analytics and data collection system

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types for comprehensive analytics
export interface LearningEvent {
  id: string;
  userId: string;
  sessionId: string;
  timestamp: Date;
  eventType: 'lesson_started' | 'lesson_completed' | 'lesson_paused' | 'assessment_started' | 'assessment_completed' | 
            'code_executed' | 'code_error' | 'discussion_post' | 'project_submitted' | 'hint_requested' | 
            'solution_viewed' | 'video_watched' | 'tab_switched' | 'page_focus_lost' | 'page_focus_gained';
  
  // Context data
  lessonId?: string;
  weekNumber?: number;
  difficulty?: number;
  
  // Performance data
  duration?: number; // milliseconds
  score?: number;
  attempts?: number;
  hintsUsed?: number;
  
  // Behavioral data
  scrollDepth?: number;
  clickPattern?: string[];
  timeOnPage?: number;
  deviceType?: 'desktop' | 'mobile' | 'tablet';
  browserAgent?: string;
  
  // Learning data
  codeAttempts?: number;
  errorMessages?: string[];
  completionTime?: number;
  strugglingIndicators?: string[];
  
  // Engagement data
  activeTime?: number;
  idleTime?: number;
  interactionCount?: number;
  
  metadata?: Record<string, any>;
}

export interface LearningSession {
  sessionId: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  totalDuration?: number;
  lessonsAttempted: string[];
  lessonsCompleted: string[];
  eventsCount: number;
  avgFocusTime: number;
  strugglingLessons: string[];
  achievementsUnlocked: string[];
  deviceInfo: {
    type: 'desktop' | 'mobile' | 'tablet';
    browser: string;
    os: string;
    screenResolution?: string;
  };
}

export interface LearningPattern {
  userId: string;
  weeklyPatterns: {
    bestDays: string[];
    bestTimes: string[];
    avgSessionLength: number;
    consistency: number; // 0-100
  };
  learningStyle: {
    preferredPace: 'fast' | 'medium' | 'slow';
    learningPath: 'sequential' | 'explorative' | 'mixed';
    engagementType: 'visual' | 'hands-on' | 'theoretical' | 'mixed';
    strugglingAreas: string[];
    strengthAreas: string[];
  };
  retentionMetrics: {
    shortTerm: number; // % retention after 1 day
    mediumTerm: number; // % retention after 1 week
    longTerm: number; // % retention after 1 month
  };
  predictiveScore: {
    completionLikelihood: number; // 0-100
    churnRisk: number; // 0-100
    upgradeProability: number; // 0-100
  };
}

export interface PerformanceMetrics {
  userId: string;
  overall: {
    lessonsCompleted: number;
    averageScore: number;
    totalStudyTime: number;
    streak: number;
    completionRate: number;
  };
  byWeek: {
    weekNumber: number;
    lessonsCompleted: number;
    averageScore: number;
    timeSpent: number;
    difficulty: number;
    completionRate: number;
  }[];
  byTopic: {
    topic: string;
    mastery: number; // 0-100
    timeSpent: number;
    strugglingAreas: string[];
  }[];
  trends: {
    scoreProgression: number[];
    timeProgression: number[];
    difficultyProgression: number[];
  };
}

export interface PlatformAnalytics {
  userEngagement: {
    dailyActiveUsers: number;
    weeklyActiveUsers: number;
    monthlyActiveUsers: number;
    averageSessionDuration: number;
    bounceRate: number;
    retentionRate: {
      day1: number;
      day7: number;
      day30: number;
    };
  };
  contentPerformance: {
    mostPopularLessons: { lessonId: string; completions: number; avgScore: number }[];
    leastPopularLessons: { lessonId: string; completions: number; avgScore: number }[];
    highestDropoffPoints: { lessonId: string; dropoffRate: number }[];
    bestPerformingContent: { lessonId: string; avgScore: number; satisfaction: number }[];
  };
  subscriptionMetrics: {
    conversionRate: number;
    upgradeRate: number;
    churnRate: number;
    revenuePerUser: number;
    lifetimeValue: number;
  };
}

interface AnalyticsState {
  // User data
  currentSession: LearningSession | null;
  userEvents: LearningEvent[];
  learningPattern: LearningPattern | null;
  performanceMetrics: PerformanceMetrics | null;
  
  // Platform data
  platformAnalytics: PlatformAnalytics | null;
  
  // Settings
  trackingEnabled: boolean;
  dataRetentionDays: number;
  
  // Actions
  startSession: (userId: string, deviceInfo: any) => string;
  endSession: () => void;
  trackEvent: (event: Omit<LearningEvent, 'id' | 'timestamp' | 'sessionId'>) => void;
  trackLessonStart: (lessonId: string, difficulty: number) => void;
  trackLessonComplete: (lessonId: string, duration: number, score?: number) => void;
  trackCodeExecution: (lessonId: string, success: boolean, errorMessage?: string) => void;
  trackAssessment: (lessonId: string, score: number, attempts: number, hintsUsed: number) => void;
  trackEngagement: (type: string, data: any) => void;
  
  // Analytics
  generateInsights: () => any;
  getPersonalizedRecommendations: () => any;
  getPredictiveAnalytics: () => any;
  exportUserData: () => any;
  calculateRetention: (userId: string) => any;
  
  // Privacy
  anonymizeData: () => void;
  deleteUserData: (userId: string) => void;
  toggleTracking: (enabled: boolean) => void;
}

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentSession: null,
      userEvents: [],
      learningPattern: null,
      performanceMetrics: null,
      platformAnalytics: null,
      
      trackingEnabled: true,
      dataRetentionDays: 365,
      
      // Actions
      startSession: (userId: string, deviceInfo: any) => {
        const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const newSession: LearningSession = {
          sessionId,
          userId,
          startTime: new Date(),
          lessonsAttempted: [],
          lessonsCompleted: [],
          eventsCount: 0,
          avgFocusTime: 0,
          strugglingLessons: [],
          achievementsUnlocked: [],
          deviceInfo
        };
        
        set({ currentSession: newSession });
        
        // Track session start event
        get().trackEvent({
          userId,
          eventType: 'lesson_started', // Using as session start
          deviceType: deviceInfo.type,
          browserAgent: deviceInfo.browser,
          metadata: { sessionStart: true }
        });
        
        return sessionId;
      },
      
      endSession: () => {
        set((state) => {
          if (!state.currentSession) return state;
          
          const endTime = new Date();
          const duration = endTime.getTime() - state.currentSession.startTime.getTime();
          
          const updatedSession = {
            ...state.currentSession,
            endTime,
            totalDuration: duration
          };
          
          return {
            currentSession: null,
            // Store completed session for historical analysis
            userEvents: [
              ...state.userEvents,
              {
                id: `session_end_${Date.now()}`,
                userId: updatedSession.userId,
                sessionId: updatedSession.sessionId,
                timestamp: endTime,
                eventType: 'lesson_completed' as const, // Using as session end
                duration,
                metadata: { sessionEnd: true, sessionData: updatedSession }
              }
            ]
          };
        });
      },
      
      trackEvent: (event: Omit<LearningEvent, 'id' | 'timestamp' | 'sessionId'>) => {
        const { trackingEnabled, currentSession } = get();
        if (!trackingEnabled || !currentSession) return;
        
        const fullEvent: LearningEvent = {
          ...event,
          id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          sessionId: currentSession.sessionId,
          timestamp: new Date()
        };
        
        set((state) => ({
          userEvents: [...state.userEvents, fullEvent],
          currentSession: state.currentSession ? {
            ...state.currentSession,
            eventsCount: state.currentSession.eventsCount + 1
          } : null
        }));
        
        // Trigger pattern analysis periodically
        if (get().userEvents.length % 10 === 0) {
          get().generateInsights();
        }
      },
      
      trackLessonStart: (lessonId: string, difficulty: number) => {
        get().trackEvent({
          userId: get().currentSession?.userId || '',
          eventType: 'lesson_started',
          lessonId,
          difficulty,
          weekNumber: parseInt(lessonId.replace('w', '').split('-')[0])
        });
        
        // Update current session
        set((state) => ({
          currentSession: state.currentSession ? {
            ...state.currentSession,
            lessonsAttempted: [...state.currentSession.lessonsAttempted, lessonId]
          } : null
        }));
      },
      
      trackLessonComplete: (lessonId: string, duration: number, score?: number) => {
        get().trackEvent({
          userId: get().currentSession?.userId || '',
          eventType: 'lesson_completed',
          lessonId,
          duration,
          score,
          completionTime: duration,
          weekNumber: parseInt(lessonId.replace('w', '').split('-')[0])
        });
        
        // Update current session
        set((state) => ({
          currentSession: state.currentSession ? {
            ...state.currentSession,
            lessonsCompleted: [...state.currentSession.lessonsCompleted, lessonId]
          } : null
        }));
      },
      
      trackCodeExecution: (lessonId: string, success: boolean, errorMessage?: string) => {
        get().trackEvent({
          userId: get().currentSession?.userId || '',
          eventType: success ? 'code_executed' : 'code_error',
          lessonId,
          errorMessages: errorMessage ? [errorMessage] : undefined,
          metadata: { success, errorMessage }
        });
      },
      
      trackAssessment: (lessonId: string, score: number, attempts: number, hintsUsed: number) => {
        get().trackEvent({
          userId: get().currentSession?.userId || '',
          eventType: 'assessment_completed',
          lessonId,
          score,
          attempts,
          hintsUsed,
          weekNumber: parseInt(lessonId.replace('w', '').split('-')[0])
        });
      },
      
      trackEngagement: (type: string, data: any) => {
        get().trackEvent({
          userId: get().currentSession?.userId || '',
          eventType: 'tab_switched', // Generic engagement event
          metadata: { engagementType: type, data }
        });
      },
      
      // Analytics functions
      generateInsights: () => {
        const { userEvents, currentSession } = get();
        if (!currentSession || userEvents.length < 5) return null;
        
        const userEventsFiltered = userEvents.filter(e => e.userId === currentSession.userId);
        
        // Calculate basic patterns
        const completedLessons = userEventsFiltered
          .filter(e => e.eventType === 'lesson_completed')
          .length;
          
        const avgScore = userEventsFiltered
          .filter(e => e.eventType === 'assessment_completed' && e.score)
          .reduce((acc, e) => acc + (e.score || 0), 0) / Math.max(1, userEventsFiltered.filter(e => e.eventType === 'assessment_completed').length);
        
        const totalStudyTime = userEventsFiltered
          .filter(e => e.duration)
          .reduce((acc, e) => acc + (e.duration || 0), 0);
        
        const insights = {
          completedLessons,
          avgScore: Math.round(avgScore * 100) / 100,
          totalStudyTime: Math.round(totalStudyTime / 1000 / 60), // Convert to minutes
          learningVelocity: completedLessons / Math.max(1, userEventsFiltered.length / 10),
          engagementLevel: userEventsFiltered.filter(e => e.interactionCount && e.interactionCount > 5).length / userEventsFiltered.length,
          strugglingAreas: userEventsFiltered
            .filter(e => e.eventType === 'code_error')
            .map(e => e.lessonId)
            .filter((v, i, a) => a.indexOf(v) === i) // Unique lessons with errors
        };
        
        return insights;
      },
      
      getPersonalizedRecommendations: () => {
        const insights = get().generateInsights();
        if (!insights) return [];
        
        const recommendations = [];
        
        // Performance-based recommendations
        if (insights.avgScore < 70) {
          recommendations.push({
            type: 'study_method',
            title: 'Focus on Understanding',
            description: 'Your assessment scores suggest reviewing fundamental concepts before advancing.',
            action: 'Review previous lessons',
            priority: 'high'
          });
        }
        
        if (insights.strugglingAreas.length > 0) {
          recommendations.push({
            type: 'content',
            title: 'Practice Weak Areas',
            description: `You've had difficulties with: ${insights.strugglingAreas.slice(0, 3).join(', ')}`,
            action: 'Extra practice exercises',
            priority: 'medium'
          });
        }
        
        if (insights.learningVelocity > 0.8) {
          recommendations.push({
            type: 'advancement',
            title: 'Ready for Advanced Content',
            description: 'Your learning pace suggests you\'re ready for more challenging material.',
            action: 'Consider upgrading tier',
            priority: 'low'
          });
        }
        
        return recommendations;
      },
      
      getPredictiveAnalytics: () => {
        const { userEvents, currentSession } = get();
        if (!currentSession || userEvents.length < 10) return null;
        
        const userEventsFiltered = userEvents.filter(e => e.userId === currentSession.userId);
        const recentEvents = userEventsFiltered.slice(-20);
        
        // Simple predictive calculations
        const completionRate = recentEvents.filter(e => e.eventType === 'lesson_completed').length / 
                              recentEvents.filter(e => e.eventType === 'lesson_started').length;
        
        const engagementTrend = recentEvents
          .filter(e => e.activeTime)
          .map(e => e.activeTime || 0)
          .reduce((acc, time, index, arr) => {
            if (index === 0) return acc;
            return acc + (time > arr[index - 1] ? 1 : -1);
          }, 0);
        
        return {
          completionLikelihood: Math.min(100, Math.max(0, completionRate * 100)),
          churnRisk: Math.min(100, Math.max(0, 100 - (engagementTrend * 10 + 50))),
          upgradeProability: Math.min(100, Math.max(0, completionRate * 80 + (engagementTrend > 0 ? 20 : 0))),
          recommendedActions: [
            engagementTrend < 0 ? 'Increase engagement through gamification' : 'Maintain current learning path',
            completionRate < 0.7 ? 'Provide additional support' : 'Consider advanced content'
          ]
        };
      },
      
      exportUserData: () => {
        const { userEvents, learningPattern, performanceMetrics, currentSession } = get();
        
        return {
          exportDate: new Date().toISOString(),
          userData: {
            currentSession,
            totalEvents: userEvents.length,
            learningPattern,
            performanceMetrics,
            recentEvents: userEvents.slice(-50), // Last 50 events
          },
          insights: get().generateInsights(),
          recommendations: get().getPersonalizedRecommendations(),
          predictiveAnalytics: get().getPredictiveAnalytics()
        };
      },
      
      calculateRetention: (userId: string) => {
        const userEventsFiltered = get().userEvents.filter(e => e.userId === userId);
        const sessionStarts = userEventsFiltered.filter(e => e.metadata?.sessionStart);
        
        if (sessionStarts.length < 2) return { day1: 0, day7: 0, day30: 0 };
        
        const firstSession = sessionStarts[0].timestamp;
        const now = new Date();
        
        const hasReturnedDay1 = sessionStarts.some(e => 
          e.timestamp.getTime() - firstSession.getTime() > 24 * 60 * 60 * 1000 &&
          e.timestamp.getTime() - firstSession.getTime() <= 48 * 60 * 60 * 1000
        );
        
        const hasReturnedDay7 = sessionStarts.some(e => 
          e.timestamp.getTime() - firstSession.getTime() > 7 * 24 * 60 * 60 * 1000 &&
          e.timestamp.getTime() - firstSession.getTime() <= 8 * 24 * 60 * 60 * 1000
        );
        
        const hasReturnedDay30 = sessionStarts.some(e => 
          e.timestamp.getTime() - firstSession.getTime() > 30 * 24 * 60 * 60 * 1000 &&
          e.timestamp.getTime() - firstSession.getTime() <= 31 * 24 * 60 * 60 * 1000
        );
        
        return {
          day1: hasReturnedDay1 ? 100 : 0,
          day7: hasReturnedDay7 ? 100 : 0,
          day30: hasReturnedDay30 ? 100 : 0
        };
      },
      
      // Privacy functions
      anonymizeData: () => {
        set((state) => ({
          userEvents: state.userEvents.map(event => ({
            ...event,
            userId: 'anonymous',
            browserAgent: undefined,
            metadata: undefined
          }))
        }));
      },
      
      deleteUserData: (userId: string) => {
        set((state) => ({
          userEvents: state.userEvents.filter(e => e.userId !== userId),
          currentSession: state.currentSession?.userId === userId ? null : state.currentSession
        }));
      },
      
      toggleTracking: (enabled: boolean) => {
        set({ trackingEnabled: enabled });
      }
    }),
    {
      name: 'aihero-analytics',
      version: 1
    }
  )
);

// Helper functions for analytics
export const calculateLearningEfficiency = (events: LearningEvent[]): number => {
  const completions = events.filter(e => e.eventType === 'lesson_completed');
  const totalTime = completions.reduce((acc, e) => acc + (e.duration || 0), 0);
  const avgTimePerLesson = totalTime / Math.max(1, completions.length);
  
  // Efficiency score based on time vs average (lower time = higher efficiency)
  const benchmarkTime = 20 * 60 * 1000; // 20 minutes benchmark
  return Math.max(0, Math.min(100, 100 - ((avgTimePerLesson - benchmarkTime) / benchmarkTime) * 50));
};

export const identifyLearningStyle = (events: LearningEvent[]): string => {
  const codeExecutions = events.filter(e => e.eventType === 'code_executed').length;
  const solutionViews = events.filter(e => e.eventType === 'solution_viewed').length;
  const hintsRequested = events.filter(e => e.eventType === 'hint_requested').length;
  
  if (codeExecutions > solutionViews * 2) return 'hands-on';
  if (solutionViews > codeExecutions) return 'visual';
  if (hintsRequested > codeExecutions * 0.5) return 'guided';
  
  return 'mixed';
};

export const generateLearningReport = (userId: string, events: LearningEvent[]): any => {
  const userEvents = events.filter(e => e.userId === userId);
  
  return {
    userId,
    reportDate: new Date().toISOString(),
    summary: {
      totalEvents: userEvents.length,
      lessonsCompleted: userEvents.filter(e => e.eventType === 'lesson_completed').length,
      averageScore: userEvents
        .filter(e => e.score)
        .reduce((acc, e) => acc + (e.score || 0), 0) / Math.max(1, userEvents.filter(e => e.score).length),
      totalStudyTime: userEvents.reduce((acc, e) => acc + (e.duration || 0), 0),
      learningStyle: identifyLearningStyle(userEvents),
      efficiency: calculateLearningEfficiency(userEvents)
    },
    patterns: {
      mostActiveHours: [], // Would calculate from timestamps
      strugglingTopics: userEvents.filter(e => e.eventType === 'code_error').map(e => e.lessonId),
      strongAreas: userEvents.filter(e => e.eventType === 'lesson_completed' && e.score && e.score > 90).map(e => e.lessonId)
    }
  };
};
