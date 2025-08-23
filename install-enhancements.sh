#!/bin/bash

# AIhero Platform - Enhanced Lesson Integration Setup
# This script installs all required dependencies and prepares your platform

echo "🚀 AIhero Platform - Enhanced Lesson Integration Setup"
echo "======================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the aihero-platform directory."
    exit 1
fi

echo "📦 Installing required dependencies..."

# Install the packages we added to package.json
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check your npm configuration."
    exit 1
fi

echo ""
echo "🎯 Setup Complete! Your platform now has:"
echo "✅ Enhanced lesson components with syntax highlighting"
echo "✅ Interactive assessments and exercises"  
echo "✅ Rich markdown content support"
echo "✅ Professional typography styling"
echo ""
echo "📚 Available Enhanced Lessons:"
echo "✅ Monday (w1-mon): Python Setup & Fundamentals"
echo "✅ Wednesday (w1-wed): Conditionals & Loops"
echo ""
echo "🚀 Next Steps:"
echo "1. Set up your Supabase credentials in .env.local"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Visit http://localhost:3000/lesson/w1-mon to see the enhanced content!"
echo ""
echo "🎉 Your AI education platform is ready to compete with the best!"
