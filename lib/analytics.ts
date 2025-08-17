// lib/analytics.ts - Privacy-First Learning Analytics

interface LearningEvent {
  type: 'lesson_start' | 'lesson_complete' | 'lesson_abandon' | 'concept_struggle' | 'exercise_error'
  lessonId: string
  weekNumber: number
  difficulty: number
  timestamp: number
  metadata?: {
    timeSpent?: number
    errorType?: string
    conceptArea?: string
    retryCount?: number
  }
}

interface AggregateStats {
  lessonCompletionRates: Record<string, number>
  averageTimeSpent: Record<string, number>
  commonErrors: Record<string, number>
  difficultySpots: Record<string, number>
  dropOffPoints: Record<string, number>
  conceptStruggles: Record<string, number>
}

interface InsightItem {
  type: 'low_completion' | 'common_error' | 'difficulty_hotspot' | 'concept_struggle'
  lessonId?: string
  errorType?: string
  conceptArea?: string
  rate?: number
  count?: number
  struggles?: number
  suggestion: string
}

class LearningAnalytics {
  private events: LearningEvent[] = []
  private readonly maxEvents = 1000
  
  constructor() {
    this.loadEvents()
    this.cleanupOldData()
  }

  trackEvent(event: Omit<LearningEvent, 'timestamp'>) {
    const learningEvent: LearningEvent = {
      ...event,
      timestamp: Date.now()
    }
    
    this.events.push(learningEvent)
    
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents)
    }
    
    this.saveEvents()
    console.log('📊 Analytics Event:', learningEvent)
  }

  trackLessonStart(lessonId: string, weekNumber: number, difficulty: number) {
    this.trackEvent({
      type: 'lesson_start',
      lessonId,
      weekNumber,
      difficulty
    })
  }

  trackLessonComplete(lessonId: string, weekNumber: number, difficulty: number, timeSpent: number) {
    this.trackEvent({
      type: 'lesson_complete',
      lessonId,
      weekNumber,
      difficulty,
      metadata: { timeSpent }
    })
  }

  trackLessonAbandon(lessonId: string, weekNumber: number, difficulty: number, timeSpent: number) {
    this.trackEvent({
      type: 'lesson_abandon',
      lessonId,
      weekNumber,
      difficulty,
      metadata: { timeSpent }
    })
  }

  trackConceptStruggle(lessonId: string, conceptArea: string, retryCount: number = 1) {
    this.trackEvent({
      type: 'concept_struggle',
      lessonId,
      weekNumber: this.extractWeekFromLessonId(lessonId),
      difficulty: 0,
      metadata: { conceptArea, retryCount }
    })
  }

  trackExerciseError(lessonId: string, errorType: string) {
    this.trackEvent({
      type: 'exercise_error',
      lessonId,
      weekNumber: this.extractWeekFromLessonId(lessonId),
      difficulty: 0,
      metadata: { errorType }
    })
  }

  generateStats(): AggregateStats {
    const stats: AggregateStats = {
      lessonCompletionRates: {},
      averageTimeSpent: {},
      commonErrors: {},
      difficultySpots: {},
      dropOffPoints: {},
      conceptStruggles: {}
    }

    const lessonGroups = this.groupEventsByLesson()
    
    Object.keys(lessonGroups).forEach(lessonId => {
      const lessonEvents = lessonGroups[lessonId]
      const starts = lessonEvents.filter(e => e.type === 'lesson_start').length
      const completions = lessonEvents.filter(e => e.type === 'lesson_complete').length
      
      if (starts > 0) {
        stats.lessonCompletionRates[lessonId] = Math.round((completions / starts) * 100)
      }
    })

    const completedLessons = this.events.filter(e => e.type === 'lesson_complete' && e.metadata?.timeSpent)
    const timeByLesson: Record<string, number[]> = {}
    
    completedLessons.forEach(event => {
      if (!timeByLesson[event.lessonId]) {
        timeByLesson[event.lessonId] = []
      }
      timeByLesson[event.lessonId].push(event.metadata!.timeSpent!)
    })
    
    Object.keys(timeByLesson).forEach(lessonId => {
      const times = timeByLesson[lessonId]
      const average = times.reduce((sum, time) => sum + time, 0) / times.length
      stats.averageTimeSpent[lessonId] = Math.round(average)
    })

    this.events
      .filter(e => e.type === 'exercise_error' && e.metadata?.errorType)
      .forEach(error => {
        const errorType = error.metadata!.errorType!
        stats.commonErrors[errorType] = (stats.commonErrors[errorType] || 0) + 1
      })

    this.events
      .filter(e => e.type === 'concept_struggle' && e.metadata?.conceptArea)
      .forEach(struggle => {
        const conceptArea = struggle.metadata!.conceptArea!
        stats.conceptStruggles[conceptArea] = (stats.conceptStruggles[conceptArea] || 0) + 1
      })

    this.events
      .filter(e => e.type === 'concept_struggle' || e.type === 'lesson_abandon')
      .forEach(event => {
        stats.difficultySpots[event.lessonId] = (stats.difficultySpots[event.lessonId] || 0) + 1
      })

    return stats
  }

  getImprovementInsights(): InsightItem[] {
    const stats = this.generateStats()
    const insights: InsightItem[] = []

    Object.entries(stats.lessonCompletionRates).forEach(([lessonId, rate]) => {
      if (rate < 70) {
        insights.push({
          type: 'low_completion',
          lessonId,
          rate,
          suggestion: `Lesson ${lessonId} has ${rate}% completion rate. Consider simplifying or adding more guidance.`
        })
      }
    })

    const topErrors = Object.entries(stats.commonErrors)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)

    topErrors.forEach(([errorType, count]) => {
      insights.push({
        type: 'common_error',
        errorType,
        count,
        suggestion: `"${errorType}" error occurs ${count} times. Consider adding specific guidance for this issue.`
      })
    })

    const topConceptStruggles = Object.entries(stats.conceptStruggles)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)

    topConceptStruggles.forEach(([conceptArea, count]) => {
      insights.push({
        type: 'concept_struggle',
        conceptArea,
        count,
        suggestion: `"${conceptArea}" concept has ${count} struggle reports. Consider adding more examples or breaking it down further.`
      })
    })

    return insights
  }

  getSummaryStats() {
    const totalEvents = this.events.length
    const totalLessons = new Set(this.events.map(e => e.lessonId)).size
    const totalStudents = Math.max(1, Math.floor(this.events.filter(e => e.type === 'lesson_start').length / totalLessons))
    
    const stats = this.generateStats()
    const avgCompletionRate = Object.values(stats.lessonCompletionRates).length > 0
      ? Math.round(Object.values(stats.lessonCompletionRates).reduce((sum, rate) => sum + rate, 0) / Object.values(stats.lessonCompletionRates).length)
      : 0

    return {
      totalEvents,
      totalLessons,
      estimatedStudents: totalStudents,
      averageCompletionRate: avgCompletionRate,
      mostCommonError: Object.entries(stats.commonErrors).sort(([,a], [,b]) => b - a)[0]?.[0] || 'None',
      mostStruggledConcept: Object.entries(stats.conceptStruggles).sort(([,a], [,b]) => b - a)[0]?.[0] || 'None'
    }
  }

  exportAnonymousData() {
    return {
      summary: this.getSummaryStats(),
      dateRange: {
        start: this.events.length > 0 ? Math.min(...this.events.map(e => e.timestamp)) : Date.now(),
        end: this.events.length > 0 ? Math.max(...this.events.map(e => e.timestamp)) : Date.now()
      },
      stats: this.generateStats(),
      insights: this.getImprovementInsights(),
      rawEventCount: this.events.length
    }
  }

  private extractWeekFromLessonId(lessonId: string): number {
    const match = lessonId.match(/w(\d+)-/)
    return match ? parseInt(match[1]) : 0
  }

  private groupEventsByLesson(): Record<string, LearningEvent[]> {
    const groups: Record<string, LearningEvent[]> = {}
    
    this.events.forEach(event => {
      if (!groups[event.lessonId]) {
        groups[event.lessonId] = []
      }
      groups[event.lessonId].push(event)
    })
    
    return groups
  }

  private saveEvents() {
    try {
      localStorage.setItem('learning_analytics', JSON.stringify(this.events))
    } catch (error) {
      console.warn('Could not save analytics events:', error)
    }
  }

  private loadEvents() {
    try {
      const stored = localStorage.getItem('learning_analytics')
      if (stored) {
        this.events = JSON.parse(stored)
      }
    } catch (error) {
      console.warn('Could not load analytics events:', error)
      this.events = []
    }
  }

  private cleanupOldData(daysToKeep: number = 30) {
    const cutoff = Date.now() - (daysToKeep * 24 * 60 * 60 * 1000)
    const originalLength = this.events.length
    this.events = this.events.filter(event => event.timestamp > cutoff)
    
    if (this.events.length !== originalLength) {
      this.saveEvents()
    }
  }

  clearOldData(daysToKeep: number = 30) {
    this.cleanupOldData(daysToKeep)
  }

  clearAllData() {
    this.events = []
    this.saveEvents()
  }

  getRecentActivity(hours: number = 24): LearningEvent[] {
    const cutoff = Date.now() - (hours * 60 * 60 * 1000)
    return this.events.filter(event => event.timestamp > cutoff)
  }
}

export const analytics = new LearningAnalytics()

export const useAnalytics = () => {
  return {
    trackLessonStart: analytics.trackLessonStart.bind(analytics),
    trackLessonComplete: analytics.trackLessonComplete.bind(analytics),
    trackLessonAbandon: analytics.trackLessonAbandon.bind(analytics),
    trackConceptStruggle: analytics.trackConceptStruggle.bind(analytics),
    trackExerciseError: analytics.trackExerciseError.bind(analytics),
    getStats: analytics.generateStats.bind(analytics),
    getInsights: analytics.getImprovementInsights.bind(analytics),
    getSummary: analytics.getSummaryStats.bind(analytics),
    exportData: analytics.exportAnonymousData.bind(analytics),
    getRecentActivity: analytics.getRecentActivity.bind(analytics),
    clearOldData: analytics.clearOldData.bind(analytics),
    clearAllData: analytics.clearAllData.bind(analytics)
  }
}

export type { LearningEvent, AggregateStats, InsightItem }