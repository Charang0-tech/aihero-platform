// lib/curriculum/types/index.ts
// Type definitions for enhanced lesson content

export interface LessonSection {
  title: string;
  content: string;
  codeExample?: {
    title: string;
    code: string;
    explanation: string;
  };
}

export interface Exercise {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  codeTemplate: string;
  solution: string;
  hints: string[];
}

export interface MiniProject {
  title: string;
  description: string;
  requirements: string[];
  starterCode: string;
  expectedOutput: string;
}

export interface LabTask {
  instruction: string;
  code: string;
}

export interface AssessmentQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LessonContent {
  learn: {
    objective: string;
    sections: LessonSection[];
  };
  practice: {
    exercises: Exercise[];
    miniProject: MiniProject;
  };
  lab: {
    title: string;
    description: string;
    tasks: LabTask[];
  };
  assessment: {
    questions: AssessmentQuestion[];
  };
  discussion: {
    prompt: string;
    guidingQuestions: string[];
  };
}

// Re-export the original lesson type from the main curriculum
export type { Lesson } from '../../curriculum';
