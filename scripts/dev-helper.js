// AIHero Curriculum Development Helper
// Quick tools for working on specific weeks and lessons

const fs = require('fs');
const path = require('path');

// Quick week development helper
function createWeekTemplate(weekNum) {
  const rootPath = path.join(__dirname, '..');
  const weekId = `week${weekNum.toString().padStart(2, '0')}`;
  const weekPath = path.join(rootPath, 'lib', 'curriculum', 'weeks', weekId);
  
  if (!fs.existsSync(weekPath)) {
    console.log(`📁 Creating Week ${weekNum} structure...`);
    fs.mkdirSync(weekPath, { recursive: true });
    
    const lessonsDir = path.join(weekPath, 'lessons');
    fs.mkdirSync(lessonsDir, { recursive: true });
    
    console.log(`✅ Week ${weekNum} structure created at: ${weekPath}`);
  } else {
    console.log(`📁 Week ${weekNum} already exists at: ${weekPath}`);
  }
  
  return weekPath;
}

// List current development status
function showStatus() {
  const rootPath = path.join(__dirname, '..');
  const weeksPath = path.join(rootPath, 'lib', 'curriculum', 'weeks');
  
  console.log('📊 AIHero Curriculum Development Status\\n');
  
  if (!fs.existsSync(weeksPath)) {
    console.log('❌ No curriculum structure found. Run: npm run generate-curriculum\\n');
    return;
  }
  
  const weeks = fs.readdirSync(weeksPath)
    .filter(name => fs.statSync(path.join(weeksPath, name)).isDirectory())
    .filter(name => name.startsWith('week'))
    .sort();
  
  console.log(`✅ Structure Created: ${weeks.length}/84 weeks\\n`);
  
  // Check for enhanced content
  let enhancedCount = 0;
  const statusByTier = {
    free: { total: 0, enhanced: 0, range: '1-12' },
    intermediate: { total: 0, enhanced: 0, range: '13-28' },
    advanced: { total: 0, enhanced: 0, range: '29-52' },
    professional: { total: 0, enhanced: 0, range: '53-84' }
  };
  
  weeks.forEach(weekDir => {
    const weekNum = parseInt(weekDir.replace('week', ''));
    const lessonsDir = path.join(weeksPath, weekDir, 'lessons');
    
    // Determine tier
    let tier = 'free';
    if (weekNum >= 53) tier = 'professional';
    else if (weekNum >= 29) tier = 'advanced';
    else if (weekNum >= 13) tier = 'intermediate';
    
    statusByTier[tier].total++;
    
    if (fs.existsSync(lessonsDir)) {
      const lessons = fs.readdirSync(lessonsDir);
      const enhancedLessons = lessons.filter(lesson => {
        const content = fs.readFileSync(path.join(lessonsDir, lesson), 'utf8');
        return !content.includes('TODO: Add comprehensive code example');
      });
      
      if (enhancedLessons.length > 0) {
        statusByTier[tier].enhanced++;
        if (enhancedLessons.length >= 3) enhancedCount++; // Consider week enhanced if 3+ lessons done
      }
    }
  });
  
  // Display tier status
  Object.entries(statusByTier).forEach(([tier, status]) => {
    const progress = status.total > 0 ? (status.enhanced / status.total * 100).toFixed(1) : '0.0';
    const tierName = tier.charAt(0).toUpperCase() + tier.slice(1);
    console.log(`${tierName.padEnd(12)} (weeks ${status.range.padEnd(5)}): ${status.enhanced.toString().padStart(2)}/${status.total.toString().padStart(2)} weeks (${progress}%)`);
  });
  
  console.log(`\\n🎯 Total Enhanced: ${enhancedCount}/84 weeks\\n`);
  
  // Show next priorities
  console.log('📋 Development Priorities:\\n');
  console.log('1. Complete Week 1 (5/6 days remaining)');
  console.log('2. Develop Week 2-4 (Free tier foundation)');
  console.log('3. Build Week 5-12 (Complete free tier)');
  console.log('4. Plan intermediate tier (weeks 13-28)\\n');
}

// Helper to work on specific lesson
function workOnLesson(weekNum, day) {
  const weekId = `week${weekNum.toString().padStart(2, '0')}`;
  const rootPath = path.join(__dirname, '..');
  const lessonPath = path.join(rootPath, 'lib', 'curriculum', 'weeks', weekId, 'lessons', `${day}.ts`);
  
  if (fs.existsSync(lessonPath)) {
    console.log(`📝 Opening lesson: Week ${weekNum} ${day.charAt(0).toUpperCase() + day.slice(1)}`);
    console.log(`📁 Path: ${lessonPath}`);
    
    const content = fs.readFileSync(lessonPath, 'utf8');
    const hasTodos = content.includes('TODO:');
    const hasContent = !content.includes('TODO: Add comprehensive code example');
    
    console.log(`📊 Status: ${hasContent ? '✅ Enhanced Content' : hasTodos ? '🔄 Template with TODOs' : '📋 Basic Template'}`);
    
    if (hasTodos) {
      console.log('\\n🔧 TODOs found in this lesson:');
      const lines = content.split('\\n');
      lines.forEach((line, index) => {
        if (line.includes('TODO:')) {
          console.log(`   Line ${index + 1}: ${line.trim()}`);
        }
      });
    }
  } else {
    console.log(`❌ Lesson not found: ${lessonPath}`);
    console.log('💡 Run: npm run generate-curriculum first');
  }
}

// Command line interface
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch (command) {
  case 'status':
    showStatus();
    break;
    
  case 'week':
    if (!arg1) {
      console.log('❌ Please specify week number: node dev-helper.js week 1');
      break;
    }
    createWeekTemplate(parseInt(arg1));
    break;
    
  case 'lesson':
    if (!arg1 || !arg2) {
      console.log('❌ Please specify week and day: node dev-helper.js lesson 1 monday');
      break;
    }
    workOnLesson(parseInt(arg1), arg2.toLowerCase());
    break;
    
  default:
    console.log('🛠️  AIHero Development Helper\\n');
    console.log('Available commands:');
    console.log('  npm run dev-status     - Show development progress');
    console.log('  npm run dev-week 1     - Create/check specific week');
    console.log('  npm run dev-lesson 1 monday - Work on specific lesson\\n');
    console.log('Examples:');
    console.log('  node scripts/dev-helper.js status');
    console.log('  node scripts/dev-helper.js lesson 1 tuesday');
    console.log('  node scripts/dev-helper.js week 2');
    break;
}
