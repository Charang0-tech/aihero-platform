// Content Management System for 84-Week AIhero Curriculum
// This system handles loading, caching, and managing lesson content

import { LessonContent, WeekStructure, EvaluationResult } from '../types';

export interface ContentManager {
  loadLessonContent(lessonId: string): Promise<LessonContent>;
  preloadUpcomingContent(currentLessonId: string): void;
  getCachedContent(lessonId: string): LessonContent | null;
  submitEvaluation(lessonId: string, evaluation: EvaluationResult): Promise<boolean>;
  getProgressData(userId: string): Promise<ProgressData>;
  updateMetaLearningData(lessonId: string, data: MetaLearningData): void;
}

interface ProgressData {
  completedLessons: string[];
  currentStreak: number;
  totalTimeSpent: number;
  averageScores: { [lessonId: string]: number };
  weakAreas: string[];
  strongAreas: string[];
}

interface MetaLearningData {
  timeSpent: number;
  engagementLevel: number;
  strugglingConcepts: string[];
  completionRate: number;
  retryAttempts: number;
}

class AIHeroContentManager implements ContentManager {
  private contentCache = new Map<string, LessonContent>();
  private readonly CACHE_SIZE_LIMIT = 10; // Keep 10 lessons cached
  private readonly PRELOAD_COUNT = 2; // Preload next 2 lessons

  constructor(
    private readonly supabaseClient: any,
    private readonly evaluationEngine: EvaluationEngine
  ) {}

  async loadLessonContent(lessonId: string): Promise<LessonContent> {
    // Check cache first
    const cached = this.getCachedContent(lessonId);
    if (cached) {
      return cached;
    }

    try {
      // Load from local file system for development
      const content = await this.loadFromFile(lessonId);
      
      // Cache the content
      this.cacheContent(lessonId, content);
      
      // Preload upcoming content
      this.preloadUpcomingContent(lessonId);
      
      return content;
    } catch (error) {
      console.error(`Failed to load lesson content for ${lessonId}:`, error);
      throw new Error(`Lesson content not available: ${lessonId}`);
    }
  }

  private async loadFromFile(lessonId: string): Promise<LessonContent> {
    // Parse lesson ID to get week and day
    const [week, day] = lessonId.split('-');
    const weekPadded = week.padStart(2, '0');
    
    try {
      // Dynamic import of lesson content
      const module = await import(`./content/weeks/week-${weekPadded}/${lessonId}.json`);
      return module.default as LessonContent;
    } catch (error) {
      // Fallback to basic lesson structure if detailed content not available
      return this.generateBasicLessonContent(lessonId);
    }
  }

  private generateBasicLessonContent(lessonId: string): LessonContent {
    // Generate basic lesson structure for lessons that don't have detailed content yet
    const [week, day] = lessonId.split('-');
    const weekNum = parseInt(week.replace('w', ''));
    
    return {
      metadata: {
        id: lessonId,
        week: weekNum,
        day: day,
        title: `Week ${weekNum} - ${day.charAt(0).toUpperCase() + day.slice(1)}`,
        duration: 120,
        difficulty: Math.min(Math.floor(weekNum / 12) + 1, 5),
        tier: this.getTierForWeek(weekNum),
        concepts: [`Week ${weekNum} concepts`],
        prerequisites: weekNum > 1 ? [`w${weekNum-1}-friday`] : [],
        learning_objectives: [`Master Week ${weekNum} concepts`],
        deliverable: `Week ${weekNum} project`,
        version: '1.0.0',
        last_updated: new Date().toISOString()
      },
      learn_tab: {
        introduction: {
          hook: `Welcome to Week ${weekNum}! This lesson builds on your previous knowledge to take you further in your AI journey.`,
          overview: `Detailed content for this lesson is coming soon. For now, use the Python Lab to practice coding and build your skills.`,
          time_estimate: '120 minutes'
        },
        core_concepts: [],
        guided_practice: {
          title: 'Guided Practice',
          steps: []
        },
        summary: {
          key_takeaways: [`Week ${weekNum} key concepts`],
          next_steps: 'Continue to the next lesson to build on these concepts.'
        }
      },
      practice_tab: {
        exercises: [],
        mini_project: {
          title: `Week ${weekNum} Mini Project`,
          description: 'Project details coming soon',
          requirements: [],
          starter_template: '# Project starter code coming soon',
          evaluation_criteria: [],
          portfolio_worthy: weekNum % 4 === 0,
          estimated_time: 60
        }
      },
      assessment_tab: {
        knowledge_check: [],
        mastery_requirements: {
          minimum_score: 80,
          required_questions_correct: [],
          retry_policy: 'Unlimited attempts with 24-hour cooldown',
          remediation: 'Review lesson content if needed'
        }
      },
      lab_tab: {
        title: `Week ${weekNum} Python Lab`,
        objective: `Practice Week ${weekNum} concepts through hands-on coding`,
        setup_instructions: ['Open your Python environment', 'Create a new file for this lesson'],
        tasks: [],
        stretch_goals: [],
        cleanup: 'Save your work for future reference'
      },
      meta_learning_data: {
        engagement_points: [],
        common_struggles: [],
        success_indicators: [],
        improvement_suggestions: [],
        time_tracking: {
          average_completion_time: 0,
          struggling_student_time: 0,
          advanced_student_time: 0
        }
      }
    };
  }

  private getTierForWeek(week: number): string {
    if (week <= 12) return 'free';
    if (week <= 28) return 'intermediate';
    if (week <= 52) return 'advanced';
    return 'professional';
  }

  getCachedContent(lessonId: string): LessonContent | null {
    return this.contentCache.get(lessonId) || null;
  }

  private cacheContent(lessonId: string, content: LessonContent): void {
    // Implement LRU cache
    if (this.contentCache.size >= this.CACHE_SIZE_LIMIT) {
      const firstKey = this.contentCache.keys().next().value;
      this.contentCache.delete(firstKey);
    }
    this.contentCache.set(lessonId, content);
  }

  preloadUpcomingContent(currentLessonId: string): void {
    // Get next lessons and preload them
    const nextLessons = this.getNextLessons(currentLessonId, this.PRELOAD_COUNT);
    
    nextLessons.forEach(async (lessonId) => {
      if (!this.contentCache.has(lessonId)) {
        try {
          const content = await this.loadFromFile(lessonId);
          this.cacheContent(lessonId, content);
        } catch (error) {
          console.warn(`Failed to preload lesson ${lessonId}:`, error);
        }
      }
    });
  }

  private getNextLessons(currentLessonId: string, count: number): string[] {
    // Simple implementation - in production would use curriculum structure
    const [week, day] = currentLessonId.split('-');
    const weekNum = parseInt(week.replace('w', ''));
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDayIndex = days.indexOf(day);
    
    const nextLessons: string[] = [];
    let nextWeek = weekNum;
    let nextDayIndex = currentDayIndex + 1;
    
    for (let i = 0; i < count; i++) {
      if (nextDayIndex >= days.length) {
        nextWeek++;
        nextDayIndex = 0;
      }
      
      if (nextWeek <= 84) { // Don't exceed total weeks
        nextLessons.push(`w${nextWeek}-${days[nextDayIndex]}`);
      }
      
      nextDayIndex++;
    }
    
    return nextLessons;
  }

  async submitEvaluation(lessonId: string, evaluation: EvaluationResult): Promise<boolean> {
    try {
      // Process evaluation through evaluation engine
      const score = await this.evaluationEngine.processEvaluation(evaluation);
      
      // Store results (in production, this would go to Supabase)
      await this.storeEvaluationResult(lessonId, score);
      
      // Update meta-learning data
      this.updateMetaLearningData(lessonId, {
        timeSpent: evaluation.timeSpent || 0,
        engagementLevel: evaluation.engagementLevel || 0,
        strugglingConcepts: evaluation.strugglingConcepts || [],
        completionRate: score >= 80 ? 100 : score,
        retryAttempts: evaluation.retryAttempts || 0
      });
      
      return score >= 80; // Return true if passed
    } catch (error) {
      console.error(`Failed to submit evaluation for ${lessonId}:`, error);
      return false;
    }
  }

  private async storeEvaluationResult(lessonId: string, score: number): Promise<void> {
    // In production, store to Supabase
    // For now, store in localStorage for development
    const results = JSON.parse(localStorage.getItem('aiHeroResults') || '{}');
    results[lessonId] = {
      score,
      timestamp: new Date().toISOString(),
      passed: score >= 80
    };
    localStorage.setItem('aiHeroResults', JSON.stringify(results));
  }

  async getProgressData(userId: string): Promise<ProgressData> {
    // In production, fetch from Supabase
    // For now, use localStorage
    const results = JSON.parse(localStorage.getItem('aiHeroResults') || '{}');
    const completedLessons = Object.keys(results).filter(id => results[id].passed);
    
    return {
      completedLessons,
      currentStreak: this.calculateStreak(completedLessons),
      totalTimeSpent: this.calculateTotalTime(results),
      averageScores: Object.fromEntries(
        Object.entries(results).map(([id, result]: [string, any]) => [id, result.score])
      ),
      weakAreas: this.identifyWeakAreas(results),
      strongAreas: this.identifyStrongAreas(results)
    };
  }

  private calculateStreak(completedLessons: string[]): number {
    // Simple streak calculation
    return completedLessons.length;
  }

  private calculateTotalTime(results: any): number {
    // Would track actual time in production
    return Object.keys(results).length * 120; // Assume 2 hours per lesson
  }

  private identifyWeakAreas(results: any): string[] {
    // Analyze results to identify weak areas
    return Object.entries(results)
      .filter(([id, result]: [string, any]) => result.score < 80)
      .map(([id]) => id);
  }

  private identifyStrongAreas(results: any): string[] {
    // Analyze results to identify strong areas  
    return Object.entries(results)
      .filter(([id, result]: [string, any]) => result.score >= 95)
      .map(([id]) => id);
  }

  updateMetaLearningData(lessonId: string, data: MetaLearningData): void {
    // Store anonymous meta-learning data for curriculum optimization
    const metaData = JSON.parse(localStorage.getItem('aiHeroMetaData') || '{}');
    
    if (!metaData[lessonId]) {
      metaData[lessonId] = [];
    }
    
    metaData[lessonId].push({
      ...data,
      timestamp: new Date().toISOString(),
      sessionId: this.generateSessionId() // Anonymous session tracking
    });
    
    localStorage.setItem('aiHeroMetaData', JSON.stringify(metaData));
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

// Evaluation Engine Interface
interface EvaluationEngine {
  processEvaluation(evaluation: EvaluationResult): Promise<number>;
}

interface EvaluationResult {
  lessonId: string;
  answers: { [questionId: string]: any };
  timeSpent?: number;
  engagementLevel?: number;
  strugglingConcepts?: string[];
  retryAttempts?: number;
}

// Export the content manager
export const contentManager = new AIHeroContentManager(
  null, // Supabase client would go here
  new SimpleEvaluationEngine()
);

// Simple evaluation engine implementation
class SimpleEvaluationEngine implements EvaluationEngine {
  async processEvaluation(evaluation: EvaluationResult): Promise<number> {
    // Simple scoring logic - in production this would be more sophisticated
    const answers = evaluation.answers;
    const questionIds = Object.keys(answers);
    
    if (questionIds.length === 0) return 0;
    
    // Mock scoring - in reality this would check against correct answers
    let score = 0;
    questionIds.forEach(questionId => {
      // Simulate correct answer checking
      if (Math.random() > 0.3) { // 70% chance of correct answer
        score += 100 / questionIds.length;
      }
    });
    
    return Math.round(score);
  }
}

export default AIHeroContentManager;
