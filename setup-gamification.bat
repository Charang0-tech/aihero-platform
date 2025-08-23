@echo off
echo 🎮 Setting up AIHero Visual Gamification System...
echo.

echo 📦 Installing required dependencies...
npm install framer-motion@^10.18.0

echo.
echo 🎨 Generating curriculum structure...
npm run generate-curriculum

echo.
echo 📊 Checking development status...
npm run dev-status

echo.
echo ✅ Setup complete! Your AIHero platform now includes:
echo.
echo 🎮 GAMIFICATION FEATURES:
echo    • XP/Level system with beautiful progress bars
echo    • Achievement system with 10+ badges
echo    • Streak tracking with fire animations  
echo    • Beautiful progress dashboard
echo    • Level-up celebrations with confetti
echo.
echo 💎 SUBSCRIPTION SYSTEM:
echo    • 4-tier freemium strategy (Free → Professional)
echo    • Beautiful pricing cards with animations
echo    • Access control and upgrade prompts
echo    • ROI calculator and success stories
echo.
echo 📊 ANALYTICS & DATA:
echo    • Comprehensive learning analytics
echo    • User behavior tracking
echo    • Data export functionality
echo    • Performance insights
echo    • Personalized recommendations
echo.
echo 🎨 VISUAL ENHANCEMENTS:
echo    • Smooth animations with Framer Motion
echo    • Modern glassmorphism design
echo    • Interactive UI components
echo    • Mobile-responsive layouts
echo    • Dark theme with gradients
echo.
echo 🚀 Ready to launch! Start the development server:
echo    npm run dev
echo.
echo 📋 Next steps:
echo    1. Visit http://localhost:3000/dashboard for the new gamified dashboard
echo    2. Check http://localhost:3000/lesson/w1-monday for enhanced lessons
echo    3. Customize the subscription tiers in stores/subscriptionStore.ts
echo    4. Add more achievements in stores/gamificationStore.ts
echo.
pause
