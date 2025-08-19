// lib/curriculum-complete.ts
// AIHERO COMPLETE 84-WEEK CAREER TRANSFORMATION PROGRAM
// From Zero to Advanced AI Engineer in 1.6 Years
// 504 Total Lessons (6 days/week × 84 weeks)
// 2,100+ Total Hours of Training

export interface Lesson {
  id: string;
  week: number;
  day: string;
  title: string;
  duration: number; // minutes
  target: string;
  deliverable: string;
  passCriteria: string;
  difficulty: number; // 1-10 scale
  stage: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED';
  mathPrep?: string;
  labEnabled?: boolean;
  codeExecution?: boolean;
  assessmentType?: 'quiz' | 'coding' | 'project' | 'mixed' | 'certification';
  prerequisites?: string[];
  resources?: string[];
}

export interface WeekMetadata {
  week: number;
  stage: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED';
  module: string;
  theme: string;
  mathRequired: boolean;
  dropoutRisk: 'low' | 'medium' | 'high' | 'critical';
  preparationRequired?: string[];
  estimatedCompletionRate?: number;
}

// ============================================
// STAGE DEFINITIONS
// ============================================

export const PROGRAM_STAGES = {
  BASIC: {
    name: 'Foundation Stage',
    weeks: [1, 28],
    duration: '28 weeks',
    hours: 700,
    description: 'From zero to competent Python developer with AI fundamentals',
    outcome: 'Can build basic AI applications and understand core concepts',
    modules: [
      'Python Mastery',
      'Computer Science Fundamentals',
      'Mathematics for AI',
      'Data Structures & Algorithms',
      'Web Development Basics',
      'Database Fundamentals',
      'API Development',
      'Basic Machine Learning'
    ]
  },
  INTERMEDIATE: {
    name: 'Professional Stage',
    weeks: [29, 56],
    duration: '28 weeks',
    hours: 700,
    description: 'From developer to AI/ML practitioner',
    outcome: 'Can design and implement production ML systems',
    modules: [
      'Advanced Python',
      'Data Science Mastery',
      'Machine Learning Engineering',
      'Deep Learning Foundations',
      'Computer Vision',
      'Natural Language Processing',
      'MLOps & Deployment',
      'Cloud Architectures'
    ]
  },
  ADVANCED: {
    name: 'Mastery Stage',
    weeks: [57, 84],
    duration: '28 weeks',
    hours: 700,
    description: 'From practitioner to AI architect and innovator',
    outcome: 'Can architect enterprise AI solutions and lead AI teams',
    modules: [
      'Advanced Deep Learning',
      'Transformers & LLMs',
      'Reinforcement Learning',
      'AI System Architecture',
      'Research & Development',
      'AI Ethics & Governance',
      'Leadership & Team Building',
      'Capstone Projects'
    ]
  }
} as const;

// ============================================
// BASIC STAGE: WEEKS 1-28 (Foundation)
// ============================================

const BASIC_STAGE_CURRICULUM = {
  // Module 1: Python Fundamentals (Weeks 1-4)
  weeks_1_4: {
    module: 'Python Fundamentals',
    topics: [
      'Week 1: Python Basics - Variables, Data Types, Control Flow',
      'Week 2: Functions, Modules, Error Handling',
      'Week 3: Object-Oriented Programming',
      'Week 4: File I/O, Regular Expressions, Testing'
    ],
    mathConcepts: ['Basic arithmetic', 'Logic operations'],
    keyDeliverables: ['Console applications', 'Text processors', 'Data validators']
  },

  // Module 2: Computer Science Foundations (Weeks 5-8)
  weeks_5_8: {
    module: 'Computer Science Foundations',
    topics: [
      'Week 5: Data Structures - Lists, Stacks, Queues',
      'Week 6: Trees, Graphs, Hash Tables',
      'Week 7: Algorithms - Sorting, Searching',
      'Week 8: Complexity Analysis, Optimization'
    ],
    mathConcepts: ['Big O notation', 'Logarithms', 'Combinatorics'],
    keyDeliverables: ['Algorithm implementations', 'Performance benchmarks']
  },

  // Module 3: Mathematics for AI (Weeks 9-12)
  weeks_9_12: {
    module: 'Mathematics for AI',
    topics: [
      'Week 9: Linear Algebra - Vectors, Matrices',
      'Week 10: Calculus - Derivatives, Gradients',
      'Week 11: Statistics - Distributions, Hypothesis Testing',
      'Week 12: Probability Theory & Bayes Theorem'
    ],
    mathConcepts: ['Linear transformations', 'Partial derivatives', 'Statistical inference'],
    preparationRequired: [
      'Khan Academy Linear Algebra',
      '3Blue1Brown Essence of Calculus',
      'Statistics in Plain English'
    ],
    keyDeliverables: ['Math library implementations', 'Statistical analyzers']
  },

  // Module 4: Web & Database Development (Weeks 13-16)
  weeks_13_16: {
    module: 'Web & Database Development',
    topics: [
      'Week 13: HTML, CSS, JavaScript Basics',
      'Week 14: React/Next.js Fundamentals',
      'Week 15: SQL & Database Design',
      'Week 16: NoSQL & Data Modeling'
    ],
    mathConcepts: ['Set theory', 'Relational algebra'],
    keyDeliverables: ['Full-stack web applications', 'Database schemas']
  },

  // Module 5: API & Backend Development (Weeks 17-20)
  weeks_17_20: {
    module: 'API & Backend Development',
    topics: [
      'Week 17: RESTful API Design',
      'Week 18: Authentication & Security',
      'Week 19: Microservices Architecture',
      'Week 20: Message Queues & Event-Driven Systems'
    ],
    mathConcepts: ['Graph theory', 'Network algorithms'],
    keyDeliverables: ['Production APIs', 'Distributed systems']
  },

  // Module 6: Introduction to Machine Learning (Weeks 21-24)
  weeks_21_24: {
    module: 'Introduction to Machine Learning',
    topics: [
      'Week 21: ML Fundamentals & scikit-learn',
      'Week 22: Supervised Learning - Regression',
      'Week 23: Supervised Learning - Classification',
      'Week 24: Model Evaluation & Validation'
    ],
    mathConcepts: ['Loss functions', 'Optimization', 'Cross-validation'],
    keyDeliverables: ['ML pipelines', 'Predictive models']
  },

  // Module 7: Data Engineering (Weeks 25-28)
  weeks_25_28: {
    module: 'Data Engineering',
    topics: [
      'Week 25: ETL Pipelines & Data Warehousing',
      'Week 26: Stream Processing & Real-time Analytics',
      'Week 27: Big Data Tools - Spark, Hadoop',
      'Week 28: Data Quality & Governance'
    ],
    mathConcepts: ['Sampling theory', 'Time series analysis'],
    keyDeliverables: ['Data pipelines', 'Analytics dashboards']
  }
};

// ============================================
// INTERMEDIATE STAGE: WEEKS 29-56 (Professional)
// ============================================

const INTERMEDIATE_STAGE_CURRICULUM = {
  // Module 8: Advanced Python & Software Engineering (Weeks 29-32)
  weeks_29_32: {
    module: 'Advanced Python & Software Engineering',
    topics: [
      'Week 29: Design Patterns & Architecture',
      'Week 30: Async Programming & Concurrency',
      'Week 31: Performance Optimization',
      'Week 32: Testing & CI/CD'
    ],
    mathConcepts: ['Queue theory', 'Parallel algorithms'],
    keyDeliverables: ['Production-grade applications', 'CI/CD pipelines']
  },

  // Module 9: Data Science Mastery (Weeks 33-36)
  weeks_33_36: {
    module: 'Data Science Mastery',
    topics: [
      'Week 33: Pandas & NumPy Advanced',
      'Week 34: Feature Engineering',
      'Week 35: Dimensionality Reduction',
      'Week 36: Time Series Analysis'
    ],
    mathConcepts: ['PCA', 'Fourier transforms', 'ARIMA models'],
    keyDeliverables: ['Data science pipelines', 'Forecasting models']
  },

  // Module 10: Machine Learning Engineering (Weeks 37-40)
  weeks_37_40: {
    module: 'Machine Learning Engineering',
    topics: [
      'Week 37: Ensemble Methods & Boosting',
      'Week 38: Unsupervised Learning',
      'Week 39: Semi-supervised & Active Learning',
      'Week 40: AutoML & Hyperparameter Tuning'
    ],
    mathConcepts: ['Information theory', 'Clustering algorithms'],
    keyDeliverables: ['Production ML systems', 'AutoML pipelines']
  },

  // Module 11: Deep Learning Foundations (Weeks 41-44)
  weeks_41_44: {
    module: 'Deep Learning Foundations',
    topics: [
      'Week 41: Neural Networks & Backpropagation',
      'Week 42: CNNs for Computer Vision',
      'Week 43: RNNs & LSTMs for Sequences',
      'Week 44: Autoencoders & GANs'
    ],
    mathConcepts: ['Chain rule', 'Convolutions', 'Gradient descent'],
    preparationRequired: ['3Blue1Brown Neural Networks', 'Fast.ai Course'],
    keyDeliverables: ['Deep learning models', 'Image classifiers']
  },

  // Module 12: Computer Vision (Weeks 45-48)
  weeks_45_48: {
    module: 'Computer Vision',
    topics: [
      'Week 45: Image Processing & OpenCV',
      'Week 46: Object Detection - YOLO, R-CNN',
      'Week 47: Semantic Segmentation',
      'Week 48: Video Analysis & Tracking'
    ],
    mathConcepts: ['Image kernels', 'Spatial transformations'],
    keyDeliverables: ['Vision applications', 'Real-time detectors']
  },

  // Module 13: Natural Language Processing (Weeks 49-52)
  weeks_49_52: {
    module: 'Natural Language Processing',
    topics: [
      'Week 49: Text Processing & Embeddings',
      'Week 50: Named Entity Recognition & POS Tagging',
      'Week 51: Sentiment Analysis & Classification',
      'Week 52: Machine Translation & Summarization'
    ],
    mathConcepts: ['Vector spaces', 'Attention mechanisms'],
    keyDeliverables: ['NLP applications', 'Text analyzers']
  },

  // Module 14: MLOps & Deployment (Weeks 53-56)
  weeks_53_56: {
    module: 'MLOps & Deployment',
    topics: [
      'Week 53: Model Versioning & Experiment Tracking',
      'Week 54: Containerization & Orchestration',
      'Week 55: Model Serving & APIs',
      'Week 56: Monitoring & A/B Testing'
    ],
    mathConcepts: ['Statistical testing', 'Drift detection'],
    keyDeliverables: ['MLOps pipelines', 'Production deployments']
  }
};

// ============================================
// ADVANCED STAGE: WEEKS 57-84 (Mastery)
// ============================================

const ADVANCED_STAGE_CURRICULUM = {
  // Module 15: Advanced Deep Learning (Weeks 57-60)
  weeks_57_60: {
    module: 'Advanced Deep Learning',
    topics: [
      'Week 57: Transformer Architecture Deep Dive',
      'Week 58: BERT, GPT, and Modern NLP',
      'Week 59: Vision Transformers & CLIP',
      'Week 60: Multimodal Learning'
    ],
    mathConcepts: ['Self-attention', 'Cross-attention', 'Positional encoding'],
    keyDeliverables: ['Custom transformers', 'Multimodal models']
  },

  // Module 16: Large Language Models (Weeks 61-64)
  weeks_61_64: {
    module: 'Large Language Models & GenAI',
    topics: [
      'Week 61: LLM Architecture & Training',
      'Week 62: Prompt Engineering & Fine-tuning',
      'Week 63: RAG Systems & Vector Databases',
      'Week 64: LLM Applications & Agents'
    ],
    mathConcepts: ['Scaling laws', 'Emergence', 'In-context learning'],
    keyDeliverables: ['LLM applications', 'AI agents']
  },

  // Module 17: Reinforcement Learning (Weeks 65-68)
  weeks_65_68: {
    module: 'Reinforcement Learning',
    topics: [
      'Week 65: RL Fundamentals - MDPs, Value Functions',
      'Week 66: Q-Learning & Deep Q-Networks',
      'Week 67: Policy Gradient Methods',
      'Week 68: Advanced RL - PPO, A3C, AlphaGo'
    ],
    mathConcepts: ['Bellman equations', 'Policy optimization'],
    keyDeliverables: ['RL agents', 'Game-playing AI']
  },

  // Module 18: AI System Architecture (Weeks 69-72)
  weeks_69_72: {
    module: 'AI System Architecture',
    topics: [
      'Week 69: Distributed Training & Model Parallelism',
      'Week 70: Edge AI & Model Compression',
      'Week 71: Real-time AI Systems',
      'Week 72: Federated Learning & Privacy'
    ],
    mathConcepts: ['Distributed algorithms', 'Quantization theory'],
    keyDeliverables: ['Scalable AI systems', 'Edge deployments']
  },

  // Module 19: Research & Innovation (Weeks 73-76)
  weeks_73_76: {
    module: 'Research & Innovation',
    topics: [
      'Week 73: Reading & Implementing Papers',
      'Week 74: Experimental Design & Ablation Studies',
      'Week 75: Novel Architecture Development',
      'Week 76: Publishing & Open Source'
    ],
    mathConcepts: ['Research methodology', 'Statistical significance'],
    keyDeliverables: ['Research implementations', 'Open source contributions']
  },

  // Module 20: AI Ethics & Governance (Weeks 77-80)
  weeks_77_80: {
    module: 'AI Ethics & Governance',
    topics: [
      'Week 77: Bias Detection & Fairness',
      'Week 78: Explainable AI & Interpretability',
      'Week 79: AI Safety & Alignment',
      'Week 80: Regulatory Compliance & Standards'
    ],
    mathConcepts: ['Fairness metrics', 'Causal inference'],
    keyDeliverables: ['Ethical AI frameworks', 'Compliance systems']
  },

  // Module 21: Capstone Projects (Weeks 81-84)
  weeks_81_84: {
    module: 'Capstone Projects & Portfolio',
    topics: [
      'Week 81: Enterprise AI Solution Design',
      'Week 82: End-to-End Implementation',
      'Week 83: Performance Optimization & Scaling',
      'Week 84: Presentation & Career Preparation'
    ],
    mathConcepts: ['System design', 'Performance analysis'],
    keyDeliverables: ['Complete AI platform', 'Professional portfolio']
  }
};

// ============================================
// DETAILED LESSON GENERATION
// ============================================

function generateLessonsForWeek(
  weekNumber: number,
  weekTheme: string,
  stage: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED',
  mathConcepts?: string[],
  labEnabled: boolean = true
): Lesson[] {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const lessons: Lesson[] = [];
  
  // Calculate difficulty based on week number
  const baseDifficulty = stage === 'BASIC' ? 1 : stage === 'INTERMEDIATE' ? 4 : 7;
  const weekDifficulty = Math.min(10, baseDifficulty + Math.floor((weekNumber % 28) / 7));
  
  days.forEach((day, index) => {
    const dayNumber = index + 1;
    const isAssessmentDay = day === 'Saturday';
    
    lessons.push({
      id: `w${weekNumber}-${day.toLowerCase().substring(0, 3)}`,
      week: weekNumber,
      day,
      title: isAssessmentDay ? `Week ${weekNumber} Assessment` : `${weekTheme} - Day ${dayNumber}`,
      duration: 150, // 2.5 hours
      target: isAssessmentDay ? 'Complete weekly assessment' : `Master ${weekTheme} concepts`,
      deliverable: isAssessmentDay ? 'Assessment project' : `Day ${dayNumber} exercises`,
      passCriteria: isAssessmentDay ? 'Score 80% or higher' : 'Complete all exercises correctly',
      difficulty: isAssessmentDay ? weekDifficulty + 1 : weekDifficulty,
      stage,
      mathPrep: mathConcepts && index === 0 ? mathConcepts.join(', ') : undefined,
      labEnabled,
      codeExecution: labEnabled,
      assessmentType: isAssessmentDay ? 'project' : 'mixed',
      prerequisites: weekNumber > 1 ? [`Week ${weekNumber - 1} completion`] : []
    });
  });
  
  return lessons;
}

// ============================================
// COMPLETE 84-WEEK CURRICULUM (504 LESSONS)
// ============================================

export const aiHero84WeekCurriculum = {
  totalWeeks: 84,
  totalLessons: 504, // 6 days × 84 weeks
  totalHours: 2100, // 2.5 hours × 6 days × 84 weeks
  stages: 3,
  
  // Generate all 504 lessons
  lessons: [
    // BASIC STAGE (Weeks 1-28)
    ...generateLessonsForWeek(1, 'Python Installation & Environment Setup', 'BASIC'),
    ...generateLessonsForWeek(2, 'Variables, Data Types & Basic Operations', 'BASIC'),
    ...generateLessonsForWeek(3, 'Control Flow & Logic', 'BASIC'),
    ...generateLessonsForWeek(4, 'Functions & Modules', 'BASIC'),
    ...generateLessonsForWeek(5, 'Data Structures - Lists & Tuples', 'BASIC'),
    ...generateLessonsForWeek(6, 'Dictionaries & Sets', 'BASIC'),
    ...generateLessonsForWeek(7, 'Object-Oriented Programming Basics', 'BASIC'),
    ...generateLessonsForWeek(8, 'Advanced OOP & Design Patterns', 'BASIC'),
    ...generateLessonsForWeek(9, 'Linear Algebra Foundations', 'BASIC', ['Vectors', 'Matrices']),
    ...generateLessonsForWeek(10, 'Calculus for Machine Learning', 'BASIC', ['Derivatives', 'Gradients']),
    ...generateLessonsForWeek(11, 'Statistics Fundamentals', 'BASIC', ['Distributions', 'Hypothesis Testing']),
    ...generateLessonsForWeek(12, 'Probability Theory', 'BASIC', ['Bayes Theorem', 'Expectation']),
    ...generateLessonsForWeek(13, 'Web Development - HTML/CSS', 'BASIC'),
    ...generateLessonsForWeek(14, 'JavaScript & React Basics', 'BASIC'),
    ...generateLessonsForWeek(15, 'SQL & Relational Databases', 'BASIC'),
    ...generateLessonsForWeek(16, 'NoSQL & Data Modeling', 'BASIC'),
    ...generateLessonsForWeek(17, 'RESTful API Development', 'BASIC'),
    ...generateLessonsForWeek(18, 'Authentication & Security', 'BASIC'),
    ...generateLessonsForWeek(19, 'Microservices Architecture', 'BASIC'),
    ...generateLessonsForWeek(20, 'Event-Driven Systems', 'BASIC'),
    ...generateLessonsForWeek(21, 'Introduction to Machine Learning', 'BASIC', ['Loss Functions']),
    ...generateLessonsForWeek(22, 'Linear & Logistic Regression', 'BASIC', ['Gradient Descent']),
    ...generateLessonsForWeek(23, 'Decision Trees & Random Forests', 'BASIC'),
    ...generateLessonsForWeek(24, 'Model Evaluation & Cross-Validation', 'BASIC'),
    ...generateLessonsForWeek(25, 'ETL & Data Pipelines', 'BASIC'),
    ...generateLessonsForWeek(26, 'Stream Processing', 'BASIC'),
    ...generateLessonsForWeek(27, 'Big Data Technologies', 'BASIC'),
    ...generateLessonsForWeek(28, 'Data Governance & Quality', 'BASIC'),
    
    // INTERMEDIATE STAGE (Weeks 29-56)
    ...generateLessonsForWeek(29, 'Software Design Patterns', 'INTERMEDIATE'),
    ...generateLessonsForWeek(30, 'Async Programming & Concurrency', 'INTERMEDIATE'),
    ...generateLessonsForWeek(31, 'Performance Optimization', 'INTERMEDIATE'),
    ...generateLessonsForWeek(32, 'Testing & CI/CD', 'INTERMEDIATE'),
    ...generateLessonsForWeek(33, 'Advanced Pandas & NumPy', 'INTERMEDIATE'),
    ...generateLessonsForWeek(34, 'Feature Engineering', 'INTERMEDIATE'),
    ...generateLessonsForWeek(35, 'Dimensionality Reduction', 'INTERMEDIATE', ['PCA', 't-SNE']),
    ...generateLessonsForWeek(36, 'Time Series Analysis', 'INTERMEDIATE', ['ARIMA', 'Seasonality']),
    ...generateLessonsForWeek(37, 'Ensemble Methods', 'INTERMEDIATE'),
    ...generateLessonsForWeek(38, 'Clustering & Unsupervised Learning', 'INTERMEDIATE'),
    ...generateLessonsForWeek(39, 'Semi-Supervised Learning', 'INTERMEDIATE'),
    ...generateLessonsForWeek(40, 'AutoML & Hyperparameter Tuning', 'INTERMEDIATE'),
    ...generateLessonsForWeek(41, 'Neural Networks Fundamentals', 'INTERMEDIATE', ['Backpropagation']),
    ...generateLessonsForWeek(42, 'Convolutional Neural Networks', 'INTERMEDIATE', ['Convolutions']),
    ...generateLessonsForWeek(43, 'Recurrent Neural Networks', 'INTERMEDIATE', ['LSTM', 'GRU']),
    ...generateLessonsForWeek(44, 'Generative Models - VAE & GAN', 'INTERMEDIATE'),
    ...generateLessonsForWeek(45, 'Computer Vision - Image Processing', 'INTERMEDIATE'),
    ...generateLessonsForWeek(46, 'Object Detection', 'INTERMEDIATE'),
    ...generateLessonsForWeek(47, 'Semantic Segmentation', 'INTERMEDIATE'),
    ...generateLessonsForWeek(48, 'Video Analysis', 'INTERMEDIATE'),
    ...generateLessonsForWeek(49, 'NLP - Text Processing', 'INTERMEDIATE'),
    ...generateLessonsForWeek(50, 'Named Entity Recognition', 'INTERMEDIATE'),
    ...generateLessonsForWeek(51, 'Sentiment Analysis', 'INTERMEDIATE'),
    ...generateLessonsForWeek(52, 'Machine Translation', 'INTERMEDIATE'),
    ...generateLessonsForWeek(53, 'MLOps - Version Control', 'INTERMEDIATE'),
    ...generateLessonsForWeek(54, 'Containerization & Kubernetes', 'INTERMEDIATE'),
    ...generateLessonsForWeek(55, 'Model Serving & APIs', 'INTERMEDIATE'),
    ...generateLessonsForWeek(56, 'Monitoring & A/B Testing', 'INTERMEDIATE'),
    
    // ADVANCED STAGE (Weeks 57-84)
    ...generateLessonsForWeek(57, 'Transformer Architecture', 'ADVANCED', ['Self-Attention']),
    ...generateLessonsForWeek(58, 'BERT & GPT Models', 'ADVANCED'),
    ...generateLessonsForWeek(59, 'Vision Transformers', 'ADVANCED'),
    ...generateLessonsForWeek(60, 'Multimodal Learning', 'ADVANCED'),
    ...generateLessonsForWeek(61, 'LLM Architecture & Training', 'ADVANCED', ['Scaling Laws']),
    ...generateLessonsForWeek(62, 'Prompt Engineering & Fine-tuning', 'ADVANCED'),
    ...generateLessonsForWeek(63, 'RAG Systems', 'ADVANCED'),
    ...generateLessonsForWeek(64, 'AI Agents & Applications', 'ADVANCED'),
    ...generateLessonsForWeek(65, 'Reinforcement Learning Basics', 'ADVANCED', ['MDPs', 'Bellman']),
    ...generateLessonsForWeek(66, 'Deep Q-Learning', 'ADVANCED'),
    ...generateLessonsForWeek(67, 'Policy Gradient Methods', 'ADVANCED'),
    ...generateLessonsForWeek(68, 'Advanced RL - AlphaGo & Beyond', 'ADVANCED'),
    ...generateLessonsForWeek(69, 'Distributed Training', 'ADVANCED'),
    ...generateLessonsForWeek(70, 'Edge AI & Model Compression', 'ADVANCED'),
    ...generateLessonsForWeek(71, 'Real-time AI Systems', 'ADVANCED'),
    ...generateLessonsForWeek(72, 'Federated Learning', 'ADVANCED'),
    ...generateLessonsForWeek(73, 'Research Paper Implementation', 'ADVANCED'),
    ...generateLessonsForWeek(74, 'Experimental Design', 'ADVANCED'),
    ...generateLessonsForWeek(75, 'Novel Architecture Development', 'ADVANCED'),
    ...generateLessonsForWeek(76, 'Open Source Contribution', 'ADVANCED'),
    ...generateLessonsForWeek(77, 'AI Bias & Fairness', 'ADVANCED'),
    ...generateLessonsForWeek(78, 'Explainable AI', 'ADVANCED'),
    ...generateLessonsForWeek(79, 'AI Safety & Alignment', 'ADVANCED'),
    ...generateLessonsForWeek(80, 'Regulatory Compliance', 'ADVANCED'),
    ...generateLessonsForWeek(81, 'Enterprise Solution Design', 'ADVANCED'),
    ...generateLessonsForWeek(82, 'End-to-End Implementation', 'ADVANCED'),
    ...generateLessonsForWeek(83, 'Performance & Scaling', 'ADVANCED'),
    ...generateLessonsForWeek(84, 'Final Project & Certification', 'ADVANCED')
  ]
};

// ============================================
// SUBSCRIPTION TIERS
// ============================================

export const SUBSCRIPTION_TIERS = {
  FREE: {
    name: 'Free Trial',
    maxWeek: 2,
    features: ['First 2 weeks', 'Basic Python'],
    price: 0
  },
  BASIC: {
    name: 'Foundation',
    maxWeek: 28,
    features: ['Complete Basic Stage', '28 weeks', 'Python to ML basics'],
    price: 497
  },
  INTERMEDIATE: {
    name: 'Professional',
    maxWeek: 56,
    features: ['Basic + Intermediate', '56 weeks', 'Full ML/DL training'],
    price: 1497
  },
  ADVANCED: {
    name: 'Mastery',
    maxWeek: 84,
    features: ['Complete Program', '84 weeks', 'AI Architect level'],
    price: 2997
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getLessonsByWeek(week: number): Lesson[] {
  return aiHero84WeekCurriculum.lessons.filter(lesson => lesson.week === week);
}

export function getLessonById(id: string): Lesson | undefined {
  return aiHero84WeekCurriculum.lessons.find(lesson => lesson.id === id);
}

export function getLessonsByStage(stage: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED'): Lesson[] {
  return aiHero84WeekCurriculum.lessons.filter(lesson => lesson.stage === stage);
}

export function getCurrentStage(weekNumber: number): 'BASIC' | 'INTERMEDIATE' | 'ADVANCED' {
  if (weekNumber <= 28) return 'BASIC';
  if (weekNumber <= 56) return 'INTERMEDIATE';
  return 'ADVANCED';
}

export function getStageProgress(weekNumber: number): {
  stage: string;
  stageWeek: number;
  stageProgress: number;
} {
  const stage = getCurrentStage(weekNumber);
  const stageWeek = stage === 'BASIC' ? weekNumber : 
                    stage === 'INTERMEDIATE' ? weekNumber - 28 : 
                    weekNumber - 56;
  const stageProgress = Math.round((stageWeek / 28) * 100);
  
  return { stage, stageWeek, stageProgress };
}

export function calculateOverallProgress(completedLessons: string[]): {
  overall: number;
  basic: number;
  intermediate: number;
  advanced: number;
} {
  const total = aiHero84WeekCurriculum.totalLessons;
  const basicLessons = 168; // 28 weeks × 6 days
  const intermediateLessons = 168;
  const advancedLessons = 168;
  
  const completedBasic = completedLessons.filter(id => {
    const lesson = getLessonById(id);
    return lesson?.stage === 'BASIC';
  }).length;
  
  const completedIntermediate = completedLessons.filter(id => {
    const lesson = getLessonById(id);
    return lesson?.stage === 'INTERMEDIATE';
  }).length;
  
  const completedAdvanced = completedLessons.filter(id => {
    const lesson = getLessonById(id);
    return lesson?.stage === 'ADVANCED';
  }).length;
  
  return {
    overall: Math.round((completedLessons.length / total) * 100),
    basic: Math.round((completedBasic / basicLessons) * 100),
    intermediate: Math.round((completedIntermediate / intermediateLessons) * 100),
    advanced: Math.round((completedAdvanced / advancedLessons) * 100)
  };
}

export function getDropoutRiskForWeek(week: number): string {
  // High-risk weeks based on difficulty spikes
  const criticalWeeks = [9, 10, 11, 12, 21, 22, 23, 24, 41, 42, 43, 44, 57, 58, 65, 66];
  const highRiskWeeks = [5, 6, 13, 14, 29, 30, 37, 38, 45, 46, 53, 54, 61, 62, 69, 70];
  
  if (criticalWeeks.includes(week)) return 'critical';
  if (highRiskWeeks.includes(week)) return 'high';
  if (week % 4 === 0) return 'medium'; // Assessment weeks
  return 'low';
}

export function getPrerequisitesForWeek(week: number): string[] {
  const prerequisites: string[] = [];
  
  // Math prerequisites
  if (week === 9) prerequisites.push('Khan Academy Linear Algebra');
  if (week === 10) prerequisites.push('3Blue1Brown Calculus');
  if (week === 11) prerequisites.push('Statistics in Plain English');
  if (week === 41) prerequisites.push('3Blue1Brown Neural Networks');
  if (week === 57) prerequisites.push('Attention Is All You Need paper');
  if (week === 65) prerequisites.push('Sutton & Barto RL Book');
  
  // Tool prerequisites
  if (week === 21) prerequisites.push('Anaconda Python installed');
  if (week === 29) prerequisites.push('Docker Desktop installed');
  if (week === 41) prerequisites.push('GPU setup (CUDA)');
  if (week === 53) prerequisites.push('Cloud account (AWS/GCP)');
  
  return prerequisites;
}

export function estimateTimeToComplete(fromWeek: number, toWeek: number): {
  weeks: number;
  hours: number;
  months: number;
} {
  const weeks = toWeek - fromWeek + 1;
  const hours = weeks * 6 * 2.5; // 6 days × 2.5 hours
  const months = weeks / 4.33; // Average weeks per month
  
  return {
    weeks,
    hours,
    months: Math.round(months * 10) / 10
  };
}

// Export types
export type { Lesson, WeekMetadata };