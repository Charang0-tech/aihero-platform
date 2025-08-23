#!/usr/bin/env node

/**
 * AIhero Content Generation Utilities
 * Tools to help create and manage the 84-week curriculum content
 */

const fs = require('fs').promises;
const path = require('path');

class ContentGenerator {
  constructor() {
    this.weeksDir = path.join(__dirname, 'weeks');
    this.templatePath = path.join(__dirname, 'lesson-content-template.json');
    this.weekStructurePath = path.join(__dirname, 'weeks', 'week-structure.json');
  }

  /**
   * Generate all week directories and basic lesson files
   */
  async generateAllWeekStructures() {
    console.log('🏗️  Generating 84-week curriculum structure...');
    
    try {
      // Load week structure data
      const structureData = await this.loadWeekStructure();
      
      for (let week = 1; week <= 84; week++) {
        await this.generateWeekStructure(week, structureData);
      }
      
      console.log('✅ Successfully generated all 84 week structures!');
    } catch (error) {
      console.error('❌ Failed to generate week structures:', error);
    }
  }

  async loadWeekStructure() {
    const data = await fs.readFile(this.weekStructurePath, 'utf8');
    return JSON.parse(data);
  }

  async generateWeekStructure(weekNumber, structureData) {
    const weekPadded = weekNumber.toString().padStart(2, '0');
    const weekDir = path.join(this.weeksDir, `week-${weekPadded}`);
    
    // Create week directory
    try {
      await fs.mkdir(weekDir, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }

    // Get week information from structure
    const weekInfo = this.getWeekInfo(weekNumber, structureData);
    
    // Generate lesson files for each day
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    for (const day of days) {
      await this.generateLessonFile(weekNumber, day, weekInfo);
    }
  }

  getWeekInfo(weekNumber, structureData) {
    // Determine phase and get week information
    let phase, weekDetail, tier, price = 0;
    
    if (weekNumber <= 12) {
      phase = structureData.phase_breakdown.phase_1;
      tier = 'free';
    } else if (weekNumber <= 28) {
      phase = structureData.phase_breakdown.phase_2;
      tier = 'intermediate';
      price = 197;
    } else if (weekNumber <= 52) {
      phase = structureData.phase_breakdown.phase_3;
      tier = 'advanced';
      price = 497;
    } else {
      phase = structureData.phase_breakdown.phase_4;
      tier = 'professional';
      price = 997;
    }

    const weekKey = `week_${weekNumber}`;
    weekDetail = phase.weeks_detail[weekKey] || `Week ${weekNumber} Content`;

    return {
      phase: phase.focus,
      weekDetail,
      tier,
      price,
      difficulty: Math.min(Math.floor((weekNumber - 1) / 12) + 1, 5)
    };
  }

  async generateLessonFile(weekNumber, day, weekInfo) {
    const weekPadded = weekNumber.toString().padStart(2, '0');
    const lessonId = `w${weekNumber}-${day}`;
    const filePath = path.join(this.weeksDir, `week-${weekPadded}`, `${lessonId}.json`);
    
    // Check if file already exists (don't overwrite detailed content)
    try {
      await fs.access(filePath);
      console.log(`⏭️  Skipping ${lessonId} - file already exists`);
      return;
    } catch (error) {
      // File doesn't exist, create it
    }

    // Load template and customize
    const template = await this.loadTemplate();
    const lessonContent = this.customizeTemplate(template, weekNumber, day, weekInfo);
    
    await fs.writeFile(filePath, JSON.stringify(lessonContent, null, 2));
    console.log(`📝 Generated ${lessonId}`);
  }

  async loadTemplate() {
    const data = await fs.readFile(this.templatePath, 'utf8');
    return JSON.parse(data);
  }

  customizeTemplate(template, weekNumber, day, weekInfo) {
    const lessonId = `w${weekNumber}-${day}`;
    const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);
    
    // Customize metadata
    template.lesson_content_template.metadata.id = lessonId;
    template.lesson_content_template.metadata.week = weekNumber;
    template.lesson_content_template.metadata.day = day;
    template.lesson_content_template.metadata.title = `${weekInfo.weekDetail} - ${dayCapitalized}`;
    template.lesson_content_template.metadata.difficulty = weekInfo.difficulty;
    template.lesson_content_template.metadata.tier = weekInfo.tier;
    template.lesson_content_template.metadata.concepts = [`Week ${weekNumber} ${day} concepts`];
    template.lesson_content_template.metadata.prerequisites = weekNumber > 1 ? [`w${weekNumber-1}-saturday`] : [];
    template.lesson_content_template.metadata.learning_objectives = [`Master Week ${weekNumber} ${day} concepts`];
    template.lesson_content_template.metadata.deliverable = `Week ${weekNumber} ${day} project`;
    template.lesson_content_template.metadata.last_updated = new Date().toISOString();

    // Customize content
    template.lesson_content_template.learn_tab.introduction.hook = 
      `Welcome to Week ${weekNumber}, ${dayCapitalized}! Today we'll explore ${weekInfo.weekDetail.toLowerCase()}.`;
    
    template.lesson_content_template.learn_tab.introduction.overview = 
      `This lesson is part of the ${weekInfo.phase} phase. Content will be added here to provide comprehensive learning materials.`;

    // Add placeholder for detailed content
    template.lesson_content_template._content_status = {
      status: 'template_generated',
      needs_content_development: true,
      priority: weekNumber <= 4 ? 'high' : weekNumber <= 12 ? 'medium' : 'low',
      estimated_development_time: '2-4 hours'
    };

    return template.lesson_content_template;
  }

  /**
   * Generate content creation checklist
   */
  async generateContentChecklist() {
    console.log('📋 Generating content creation checklist...');
    
    const checklist = {
      content_development_plan: {
        total_lessons: 504, // 84 weeks * 6 days
        phases: {
          phase_1: {
            weeks: '1-12',
            lessons: 72,
            priority: 'IMMEDIATE',
            status: 'In Progress',
            completed: 2, // Monday and Wednesday of week 1
            remaining: 70
          },
          phase_2: {
            weeks: '13-28',
            lessons: 96,
            priority: 'HIGH',
            status: 'Planned',
            completed: 0,
            remaining: 96
          },
          phase_3: {
            weeks: '29-52',
            lessons: 144,
            priority: 'MEDIUM',
            status: 'Planned',
            completed: 0,
            remaining: 144
          },
          phase_4: {
            weeks: '53-84',
            lessons: 192,
            priority: 'LOW',
            status: 'Planned',
            completed: 0,
            remaining: 192
          }
        },
        development_strategy: {
          week_1_2: 'Complete all days (foundation is critical)',
          weeks_3_4: 'Complete key days (Monday, Wednesday, Friday)',
          weeks_5_12: 'Gradually fill in remaining content',
          advanced_weeks: 'Create after validating early phases with users'
        },
        content_quality_standards: {
          learn_tab: 'Must have 3-4 core concepts with examples and real-world applications',
          practice_tab: 'Minimum 2 exercises plus 1 mini-project',
          assessment_tab: 'Minimum 4 questions covering all learning objectives',
          lab_tab: 'Hands-on tasks that reinforce concepts',
          meta_learning: 'Track engagement points and common struggles'
        }
      },
      immediate_priorities: [
        'Complete Week 1 (remaining 4 days: Tuesday, Thursday, Friday, Saturday)',
        'Complete Week 2 (all 6 days - fundamental Python concepts)',
        'Create Week 3-4 Monday/Wednesday/Friday lessons (core concepts)',
        'Develop assessment engine integration',
        'Test content loading and caching system'
      ],
      tools_and_resources: {
        content_template: 'lesson-content-template.json',
        generation_script: 'content-generator.js',
        week_structure: 'weeks/week-structure.json',
        content_manager: 'ContentManager.ts'
      }
    };

    const checklistPath = path.join(__dirname, 'content-development-checklist.json');
    await fs.writeFile(checklistPath, JSON.stringify(checklist, null, 2));
    console.log('✅ Content creation checklist generated!');
  }

  /**
   * Generate progress report
   */
  async generateProgressReport() {
    console.log('📊 Generating content progress report...');
    
    const report = {
      generated_at: new Date().toISOString(),
      curriculum_overview: {
        total_weeks: 84,
        total_lessons: 504,
        phases: 4,
        tiers: ['free', 'intermediate', 'advanced', 'professional']
      },
      content_status: {
        detailed_lessons_created: 1, // Monday Week 1
        template_lessons_created: 503,
        completion_percentage: 0.2 // 1/504 * 100
      },
      system_status: {
        content_management_system: 'Complete',
        evaluation_engine: 'Complete',
        progressive_loading: 'Complete',
        template_system: 'Complete'
      },
      next_steps: [
        'Complete Week 1 remaining days (Tuesday-Saturday)',
        'Create detailed content for Week 2',
        'Test full system with multiple lessons',
        'Begin content creation for Weeks 3-4'
      ]
    };

    const reportPath = path.join(__dirname, 'progress-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log('✅ Progress report generated!');
  }
}

// CLI Interface
if (require.main === module) {
  const generator = new ContentGenerator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'generate-all':
      generator.generateAllWeekStructures();
      break;
    case 'checklist':
      generator.generateContentChecklist();
      break;
    case 'report':
      generator.generateProgressReport();
      break;
    case 'setup':
      // Run all setup commands
      (async () => {
        await generator.generateAllWeekStructures();
        await generator.generateContentChecklist();
        await generator.generateProgressReport();
        console.log('🎉 Complete setup finished!');
      })();
      break;
    default:
      console.log('AIhero Content Generator');
      console.log('Usage: node content-generator.js <command>');
      console.log('Commands:');
      console.log('  generate-all  - Generate all 84 week structures');
      console.log('  checklist     - Generate content development checklist');
      console.log('  report        - Generate progress report');
      console.log('  setup         - Run all setup commands');
  }
}

module.exports = ContentGenerator;
