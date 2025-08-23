// AIHero Curriculum Generator
// This script creates the foundation structure for all 84 weeks
// Making it easy to add enhanced content week by week

const fs = require('fs');
const path = require('path');

// Define the complete 84-week curriculum structure
const curriculumPlan = {
  // Phase 1: Free Tier (Weeks 1-12) - Python & Programming Foundations
  free: {
    weeks: Array.from({length: 12}, (_, i) => i + 1),
    focus: 'Python Fundamentals & Programming Basics',
    topics: [
      'Python Setup & Syntax', 'Data Types & Variables', 'Control Flow', 'Functions',
      'Data Structures', 'File I/O', 'Error Handling', 'OOP Basics',
      'Modules & Libraries', 'APIs & HTTP', 'Project Development', 'Code Quality'
    ]
  },
  
  // Phase 2: Intermediate Tier (Weeks 13-28) - Web Development & Data
  intermediate: {
    weeks: Array.from({length: 16}, (_, i) => i + 13),
    focus: 'Web Development & Data Science Foundations',
    topics: [
      'HTML/CSS Basics', 'JavaScript Fundamentals', 'Web APIs', 'Database Basics',
      'NumPy & Arrays', 'Pandas & DataFrames', 'Data Visualization', 'Web Scraping',
      'REST APIs', 'Authentication', 'Deployment', 'Testing',
      'Git & Version Control', 'Project Management', 'Portfolio Building', 'Career Skills'
    ]
  },
  
  // Phase 3: Advanced Tier (Weeks 29-52) - Machine Learning & AI
  advanced: {
    weeks: Array.from({length: 24}, (_, i) => i + 29),
    focus: 'Machine Learning & AI Development',
    topics: [
      'Statistics & Math', 'Data Preprocessing', 'Supervised Learning', 'Classification',
      'Regression', 'Model Evaluation', 'Unsupervised Learning', 'Clustering',
      'Feature Engineering', 'Cross Validation', 'Ensemble Methods', 'Time Series',
      'Neural Networks', 'Deep Learning Basics', 'TensorFlow/PyTorch', 'Computer Vision',
      'Natural Language Processing', 'Reinforcement Learning', 'Model Deployment', 'MLOps',
      'AI Ethics', 'Research Methods', 'Advanced Projects', 'Industry Applications'
    ]
  },
  
  // Phase 4: Professional Tier (Weeks 53-84) - AI Engineering & Research
  professional: {
    weeks: Array.from({length: 32}, (_, i) => i + 53),
    focus: 'AI Engineering & Research',
    topics: [
      'Advanced Deep Learning', 'Transformer Models', 'GANs', 'Attention Mechanisms',
      'BERT & Language Models', 'GPT Architecture', 'Vision Transformers', 'Multimodal AI',
      'AI Research Papers', 'Implementing Research', 'Custom Architectures', 'Optimization',
      'Distributed Training', 'Model Compression', 'Edge AI', 'Production ML',
      'AI System Design', 'Scalability', 'Performance Tuning', 'Advanced MLOps',
      'AI Safety', 'Bias & Fairness', 'Explainable AI', 'AI Governance',
      'Startup Skills', 'Team Leadership', 'Product Development', 'Business Strategy',
      'Research Collaboration', 'Publication', 'Conference Presentations', 'Industry Impact'
    ]
  }
};

// Generate lesson structure for each day of the week
const daysOfWeek = [
  { id: 'monday', name: 'Monday', focus: 'Theory & Concepts' },
  { id: 'tuesday', name: 'Tuesday', focus: 'Hands-on Practice' },
  { id: 'wednesday', name: 'Wednesday', focus: 'Real-world Application' },
  { id: 'thursday', name: 'Thursday', focus: 'Advanced Techniques' },
  { id: 'friday', name: 'Friday', focus: 'Integration & Testing' },
  { id: 'saturday', name: 'Saturday', focus: 'Project & Portfolio' }
];

// Helper function to determine tier based on week number
function getTierInfo(weekNum) {
  if (weekNum <= 12) return { tier: 'free', phase: curriculumPlan.free };
  if (weekNum <= 28) return { tier: 'intermediate', phase: curriculumPlan.intermediate };
  if (weekNum <= 52) return { tier: 'advanced', phase: curriculumPlan.advanced };
  return { tier: 'professional', phase: curriculumPlan.professional };
}

// Helper function to get week topic
function getWeekTopic(weekNum, tierInfo) {
  const phaseWeekIndex = tierInfo.phase.weeks.indexOf(weekNum);
  const topicIndex = phaseWeekIndex % tierInfo.phase.topics.length;
  return tierInfo.phase.topics[topicIndex] || `Week ${weekNum} Topic`;
}

// Generate lesson content template
function generateLessonTemplate(weekNum, day, tierInfo, weekTopic) {
  const lessonId = `w${weekNum}-${day.id}`;
  const difficulty = Math.min(Math.floor((weekNum - 1) / 12) + 1, 5);
  
  return {
    id: lessonId,
    week: weekNum,
    day: day.name,
    title: `Week ${weekNum} ${day.name}: ${weekTopic} - ${day.focus}`,
    duration: day.id === 'saturday' ? 180 : 120, // Saturday projects are longer
    target: `Master ${weekTopic.toLowerCase()} through ${day.focus.toLowerCase()}`,
    deliverable: day.id === 'saturday' 
      ? `Portfolio project demonstrating ${weekTopic.toLowerCase()}`
      : `${day.focus} exercise for ${weekTopic.toLowerCase()}`,
    difficulty,
    tier: tierInfo.tier,
    concepts: [
      `${weekTopic} fundamentals`,
      `${day.focus} techniques`,
      `Real-world application`,
      'Best practices'
    ],
    locked: tierInfo.tier !== 'free',
    isPortfolioWorthy: day.id === 'saturday',
    passCriteria: `Successfully complete ${day.focus.toLowerCase()} requirements`
  };
}

// Generate enhanced content template
function generateEnhancedContentTemplate(lesson, weekTopic) {
  return `// Week ${lesson.week} ${lesson.day} Enhanced Content
// ${lesson.title}

import { LessonContent } from '../../../types';

export const ${lesson.day.toLowerCase()}Content: LessonContent = {
  learn: {
    objective: "${lesson.target}",
    sections: [
      {
        title: "${weekTopic} Fundamentals",
        content: \`
# ${weekTopic} - ${lesson.day} Focus

Welcome to ${lesson.title}! Today we'll focus on ${lesson.day.toLowerCase()} aspects of ${weekTopic.toLowerCase()}.

## Learning Objectives
By the end of this lesson, you'll be able to:
- Understand ${weekTopic.toLowerCase()} core concepts
- Apply ${lesson.day.toLowerCase()} techniques effectively
- Build real-world applications using these skills
- Follow industry best practices

## Why This Matters
${weekTopic} is crucial in AI development because...
[CONTENT TO BE ADDED - Explain the importance and real-world applications]

## Key Concepts Overview
[CONTENT TO BE ADDED - Detailed explanation of concepts]
        \`,
        codeExample: {
          title: "${weekTopic} Example",
          code: \`# ${lesson.title}
# TODO: Add comprehensive code example

print("Welcome to ${lesson.title}!")
print("Today's focus: ${lesson.day.toLowerCase()}")

# Key concepts for this lesson:
${lesson.concepts.map(concept => `# • ${concept}`).join('\\n')}

# [CONTENT TO BE ADDED - Working code example]
\`,
          explanation: "This example demonstrates the core concepts of ${weekTopic.toLowerCase()}. [TO BE EXPANDED]"
        }
      }
      // TODO: Add 2-3 more sections with detailed content
    ]
  },
  practice: {
    exercises: [
      {
        title: "${weekTopic} Practice Exercise",
        description: "Practice the key concepts through hands-on coding",
        difficulty: "${lesson.difficulty <= 2 ? 'beginner' : lesson.difficulty <= 4 ? 'intermediate' : 'advanced'}",
        codeTemplate: \`# ${lesson.title} Practice
# TODO: Create specific practice exercises

# Your code here
print("Practice exercise for ${weekTopic}")
\`,
        solution: \`# Solution will be added during content development
print("Solution for ${weekTopic} practice")
\`,
        hints: [
          "Start with the basics and build up complexity",
          "Test your code frequently",
          "Refer back to the learning section if needed"
        ]
      }
      // TODO: Add more exercises and mini-project
    ],
    miniProject: {
      title: "${weekTopic} Mini Project",
      description: "Build a small project that demonstrates your understanding",
      requirements: [
        "Apply the key concepts learned",
        "Include proper documentation",
        "Test your implementation",
        "Make it portfolio-worthy"
      ],
      starterCode: \`# ${lesson.title} Mini Project
# TODO: Add project starter code
\`,
      expectedOutput: "TODO: Define expected project output"
    }
  },
  lab: {
    title: "${weekTopic} Lab Session",
    description: "Hands-on experimentation with ${weekTopic.toLowerCase()}",
    tasks: [
      {
        instruction: "Explore ${weekTopic.toLowerCase()} through experimentation",
        code: \`# ${lesson.title} Lab
# TODO: Add lab tasks with working code examples

print("Lab session: ${weekTopic}")

# Lab tasks will be added during content development
\`
      }
    ]
  },
  assessment: {
    questions: [
      {
        question: "What is the main purpose of ${weekTopic.toLowerCase()}?",
        options: [
          "Option A (to be defined)",
          "Option B (to be defined)",
          "Option C (to be defined)",
          "Option D (to be defined)"
        ],
        correct: 0,
        explanation: "Assessment questions will be added during content development."
      }
      // TODO: Add 4-5 more comprehensive questions
    ]
  },
  discussion: {
    prompt: "Discuss your experience with ${weekTopic.toLowerCase()} and how it applies to AI development in your field of interest.",
    guidingQuestions: [
      "What challenges did you face while learning ${weekTopic.toLowerCase()}?",
      "How does ${weekTopic.toLowerCase()} connect to AI applications?",
      "What real-world examples can you think of?",
      "How will you apply this knowledge in your projects?",
      "What questions do you still have about ${weekTopic.toLowerCase()}?"
    ]
  }
};
`;
}

// Main generation function
async function generateCurriculumStructure() {
  console.log('🚀 Generating AIHero 84-Week Curriculum Structure...\n');
  
  const rootPath = path.join(__dirname, '..');
  const curriculumPath = path.join(rootPath, 'lib', 'curriculum');
  const weeksPath = path.join(curriculumPath, 'weeks');
  
  // Create directory structure if it doesn't exist
  if (!fs.existsSync(weeksPath)) {
    fs.mkdirSync(weeksPath, { recursive: true });
  }
  
  const allLessons = [];
  const weekDirectories = [];
  
  // Generate structure for all 84 weeks
  for (let weekNum = 1; weekNum <= 84; weekNum++) {
    const tierInfo = getTierInfo(weekNum);
    const weekTopic = getWeekTopic(weekNum, tierInfo);
    const weekId = `week${weekNum.toString().padStart(2, '0')}`;
    
    console.log(`📚 Week ${weekNum}: ${weekTopic} (${tierInfo.tier})`);
    
    // Create week directory
    const weekDir = path.join(weeksPath, weekId);
    if (!fs.existsSync(weekDir)) {
      fs.mkdirSync(weekDir, { recursive: true });
    }
    
    const lessonsDir = path.join(weekDir, 'lessons');
    if (!fs.existsSync(lessonsDir)) {
      fs.mkdirSync(lessonsDir, { recursive: true });
    }
    
    weekDirectories.push(weekId);
    const weekLessons = [];
    const weekEnhancedContent = {};
    
    // Generate lessons for each day
    for (const day of daysOfWeek) {
      const lesson = generateLessonTemplate(weekNum, day, tierInfo, weekTopic);
      allLessons.push(lesson);
      weekLessons.push(lesson);
      
      // Create enhanced content template file
      const lessonFile = path.join(lessonsDir, `${day.id}.ts`);
      if (!fs.existsSync(lessonFile)) {
        const enhancedContent = generateEnhancedContentTemplate(lesson, weekTopic);
        fs.writeFileSync(lessonFile, enhancedContent, 'utf8');
      }
      
      weekEnhancedContent[lesson.id] = `${day.id}Content`;
    }
    
    // Create week index file
    const weekIndexFile = path.join(weekDir, 'index.ts');
    if (!fs.existsSync(weekIndexFile)) {
      const weekIndexContent = `// Week ${weekNum} enhanced content
// ${weekTopic}

${daysOfWeek.map(day => 
  `import { ${day.id}Content } from './lessons/${day.id}';`
).join('\\n')}

export const ${weekId}Content = {
${daysOfWeek.map(day => 
  `  'w${weekNum}-${day.id}': ${day.id}Content,`
).join('\\n')}
};

export default ${weekId}Content;
`;
      fs.writeFileSync(weekIndexFile, weekIndexContent, 'utf8');
    }
  }
  
  // Update main curriculum index
  const mainIndexFile = path.join(curriculumPath, 'index.ts');
  const updatedMainIndex = `// AIHero 84-Week Curriculum System
// Generated curriculum structure with systematic content development

export interface Lesson {
  id: string;
  week: number;
  day: string;
  title: string;
  duration: number;
  target: string;
  deliverable: string;
  difficulty: number;
  tier: 'free' | 'intermediate' | 'advanced' | 'professional';
  concepts: string[];
  locked?: boolean;
  isPortfolioWorthy?: boolean;
  replitProject?: string;
  passCriteria?: string;
}

// All 84 weeks × 6 days = 504 lessons
export const allLessons: Lesson[] = ${JSON.stringify(allLessons, null, 2)};

// Helper functions
export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find(lesson => lesson.id === id);
}

export function getLessonsByWeek(week: number): Lesson[] {
  return allLessons.filter(lesson => lesson.week === week);
}

export function getLessonsByTier(tier: string): Lesson[] {
  return allLessons.filter(lesson => lesson.tier === tier);
}

export function getWeeksByTier(tier: string): number[] {
  const weeks = Array.from(new Set(
    allLessons
      .filter(lesson => lesson.tier === tier)
      .map(lesson => lesson.week)
  ));
  return weeks.sort((a, b) => a - b);
}

// Subscription tiers
export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free Explorer',
    price: 0,
    duration: 'forever',
    features: ['Weeks 1-12', 'Python fundamentals', 'Community access'],
    weeks: Array.from({length: 12}, (_, i) => i + 1)
  },
  intermediate: {
    name: 'AI Developer',
    price: 197,
    duration: 'one-time',
    features: ['Weeks 13-28', 'Web development', 'Data science basics'],
    weeks: Array.from({length: 16}, (_, i) => i + 13)
  },
  advanced: {
    name: 'AI Engineer',
    price: 497,
    duration: 'one-time', 
    features: ['Weeks 29-52', 'Machine learning', 'Advanced AI projects'],
    weeks: Array.from({length: 24}, (_, i) => i + 29)
  },
  professional: {
    name: 'AI Research Pro',
    price: 997,
    duration: 'one-time',
    features: ['Weeks 53-84', 'AI research', 'Industry applications'],
    weeks: Array.from({length: 32}, (_, i) => i + 53)
  }
};

export default {
  lessons: allLessons,
  getLessonById,
  getLessonsByWeek,
  getLessonsByTier,
  getWeeksByTier,
  SUBSCRIPTION_TIERS
};
`;
  
  fs.writeFileSync(mainIndexFile, updatedMainIndex, 'utf8');
  
  // Generate progress tracking file
  const progressFile = path.join(rootPath, 'CURRICULUM_PROGRESS.md');
  const progressContent = `# AIHero 84-Week Curriculum Development Progress

## Overview
- **Total Weeks**: 84
- **Total Lessons**: 504 (6 lessons per week)
- **Structure Generated**: ✅ Complete
- **Enhanced Content**: 🔄 In Progress

## Development Strategy

### Phase 1: Free Tier (Weeks 1-12) - Python Fundamentals
${curriculumPlan.free.weeks.map(week => 
  `- [ ] Week ${week}: ${curriculumPlan.free.topics[(week-1) % curriculumPlan.free.topics.length]} ${week === 1 ? '✅ Monday Enhanced' : ''}`
).join('\\n')}

### Phase 2: Intermediate Tier (Weeks 13-28) - Web Development & Data
${curriculumPlan.intermediate.weeks.map(week => 
  `- [ ] Week ${week}: ${curriculumPlan.intermediate.topics[(week-13) % curriculumPlan.intermediate.topics.length]}`
).join('\\n')}

### Phase 3: Advanced Tier (Weeks 29-52) - Machine Learning & AI
${curriculumPlan.advanced.weeks.map(week => 
  `- [ ] Week ${week}: ${curriculumPlan.advanced.topics[(week-29) % curriculumPlan.advanced.topics.length]}`
).join('\\n')}

### Phase 4: Professional Tier (Weeks 53-84) - AI Engineering & Research
${curriculumPlan.professional.weeks.map(week => 
  `- [ ] Week ${week}: ${curriculumPlan.professional.topics[(week-53) % curriculumPlan.professional.topics.length]}`
).join('\\n')}

## Content Development Priority

### Immediate (Next 2 Weeks)
1. ✅ Week 1 Monday - Complete
2. 🔄 Week 1 Tuesday-Saturday - In Progress  
3. 🔄 Week 2 Complete Week
4. 📋 Week 3-4 Planning

### Short Term (Next Month)
- Complete Free Tier (Weeks 1-12)
- Focus on Python fundamentals with rich examples
- Build foundational programming skills

### Medium Term (Next 3 Months)
- Intermediate Tier (Weeks 13-28)
- Web development and data science
- Real-world project integration

### Long Term (Next 6 Months)
- Advanced and Professional Tiers
- Machine learning and AI research content
- Industry-standard practices

## Development Guidelines

### Content Quality Standards
- Every lesson should have 4+ comprehensive sections
- Include working code examples with explanations
- Provide multiple practice exercises
- Create portfolio-worthy projects
- Add meaningful assessments

### File Organization
\`\`\`
lib/curriculum/weeks/
├── week01/
│   ├── index.ts (exports all lessons)
│   └── lessons/
│       ├── monday.ts (enhanced content)
│       ├── tuesday.ts (template → enhanced)
│       ├── wednesday.ts (enhanced content)
│       └── ... (all days)
└── week02/ (same structure)
\`\`\`

## Next Steps

1. **Complete Week 1**: Add enhanced content for Tuesday-Saturday
2. **Develop Week 2**: Full week with data science focus  
3. **Create Templates**: Standardize content creation process
4. **Build Tools**: Scripts for content generation and validation
5. **Community Feedback**: Gather input on content quality

## Notes for Development

- Use the generated templates as starting points
- Focus on practical, hands-on learning
- Include real-world applications and examples
- Maintain consistency across all lessons
- Test all code examples before publishing

Updated: $(new Date().toLocaleDateString())
`;
  
  fs.writeFileSync(progressFile, progressContent, 'utf8');
  
  console.log('\\n✅ Curriculum structure generated successfully!');
  console.log('\\n📊 Summary:');
  console.log(`   • ${allLessons.length} lessons created`);
  console.log(`   • ${weekDirectories.length} weeks structured`);
  console.log(`   • 4 subscription tiers defined`);
  console.log(`   • Templates ready for content development`);
  console.log('\\n🎯 Next Steps:');
  console.log('   1. Review CURRICULUM_PROGRESS.md');
  console.log('   2. Start enhancing Week 1 remaining days');
  console.log('   3. Follow systematic development plan');
  console.log('\\n🚀 Happy coding!');
}

// Run the generator
if (require.main === module) {
  generateCurriculumStructure().catch(console.error);
}

module.exports = { generateCurriculumStructure, curriculumPlan };
