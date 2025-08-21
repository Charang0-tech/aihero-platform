// lib/curriculum.ts - Minimal working version

export interface Lesson {
  id: string;
  week: number;
  day: string;
  title: string;
  duration: number;
  target: string;
  deliverable: string;
  passCriteria: string;
  difficulty: number;
  stage: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED';
  moduleTitle: string;
  concepts: string[];
  tier: 'free' | 'intermediate' | 'advanced';
  locked: boolean;
  isPortfolioWorthy: boolean;
  replitProject?: string;
}

export interface Week {
  id: number;
  week: number;
  title: string;
  focus: string;
  tier: 'free' | 'intermediate' | 'advanced';
  lessons: Lesson[];
}

export const SUBSCRIPTION_TIERS = {
  free: { name: "Free Explorer", price: 0, maxWeek: 2 },
  intermediate: { name: "AI Developer", price: 197, maxWeek: 8 },
  advanced: { name: "AI Engineer Pro", price: 497, maxWeek: 84 }
};

// Initialize with empty arrays first
export const weeks: Week[] = [];
export const curriculum: Lesson[] = [];

// Safe function implementations
export function getWeekById(weekId: number): Week | undefined {
  return weeks.find(week => week?.id === weekId) || undefined;
}

export function getAccessibleWeeks(userTier: 'free' | 'intermediate' | 'advanced' = 'free'): Week[] {
  const maxWeek = SUBSCRIPTION_TIERS[userTier]?.maxWeek || 2;
  return weeks.filter(week => week?.id <= maxWeek) || [];
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return curriculum.find(lesson => lesson?.id === lessonId) || undefined;
}

// Export constants
export const totalWeeks = 84;
export const totalLessons = 504;

// Populate data after exports are defined
const sampleLesson: Lesson = {
  id: 'w1-mon',
  week: 1,
  day: 'Monday',
  title: 'Python Setup',
  duration: 120,
  target: 'Setup Python',
  deliverable: 'Hello World',
  passCriteria: 'Can run Python',
  difficulty: 1,
  stage: 'BASIC',
  moduleTitle: 'Python',
  concepts: ['Variables'],
  tier: 'free',
  locked: false,
  isPortfolioWorthy: false
};

weeks.push({
  id: 1,
  week: 1,
  title: 'Python Foundations',
  focus: 'Basic Python',
  tier: 'free',
  lessons: [sampleLesson]
});

weeks.push({
  id: 2,
  week: 2,
  title: 'Data & APIs',
  focus: 'Data handling',
  tier: 'free',
  lessons: []
});

// Add remaining weeks
for (let i = 3; i <= 84; i++) {
  const tier = i <= 2 ? 'free' : i <= 8 ? 'intermediate' : 'advanced';
  weeks.push({
    id: i,
    week: i,
    title: `Week ${i}`,
    focus: `Content ${i}`,
    tier,
    lessons: []
  });
}

// Update curriculum array
curriculum.push(sampleLesson);

export default {
  weeks,
  curriculum,
  SUBSCRIPTION_TIERS,
  getWeekById,
  getAccessibleWeeks,
  getLessonById
};
