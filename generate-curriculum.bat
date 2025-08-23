@echo off
echo 🚀 Generating AIHero 84-Week Curriculum Structure...
echo.
cd /d "%~dp0"
node scripts\generateCurriculum.js
echo.
echo ✅ Generation complete! Check CURRICULUM_PROGRESS.md for next steps.
pause
