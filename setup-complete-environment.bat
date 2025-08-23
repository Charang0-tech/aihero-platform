@echo off
echo.
echo 🎉 Welcome to AIhero Platform Setup!
echo ===================================
echo.
echo This script will help you set up everything needed to run your
echo professional AI education platform.
echo.
echo What we're checking:
echo • Node.js (for running the web app)
echo • Python (for AI coding lessons)  
echo • Git (for code management)
echo.
echo Let's get started!
echo.
pause

cls
echo.
echo 🔍 Checking your development environment...
echo.

REM Check Node.js
echo 📦 Checking Node.js and npm...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js is installed!
    for /f %%i in ('node --version') do echo    Version: %%i
    for /f %%i in ('npm --version') do echo    npm Version: %%i
    set node_ok=1
) else (
    echo ❌ Node.js is NOT installed
    echo.
    echo 📥 INSTALL NODE.JS:
    echo    1. Go to: https://nodejs.org/
    echo    2. Click the GREEN "Download Node.js (LTS)" button
    echo    3. Run the installer
    echo    4. Click "Next" through all steps
    echo    5. Restart this script when done
    echo.
    set node_ok=0
)

echo.

REM Check Python
echo 🐍 Checking Python...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python is installed!
    for /f %%i in ('python --version') do echo    Version: %%i
    for /f %%i in ('pip --version') do echo    pip Version: %%i
    set python_ok=1
) else (
    echo ❌ Python is NOT installed
    echo.
    echo 📥 INSTALL PYTHON:
    echo    1. Go to: https://www.python.org/downloads/
    echo    2. Click "Download Python 3.12.x"
    echo    3. Run the installer
    echo    4. ⚠️  CHECK "Add Python to PATH" (very important!)
    echo    5. Click "Install Now"
    echo    6. Restart this script when done
    echo.
    set python_ok=0
)

echo.

REM Check Git (optional)
echo 📝 Checking Git...
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git is installed!
    for /f %%i in ('git --version') do echo    Version: %%i
    set git_ok=1
) else (
    echo ⚠️  Git is not installed (optional but recommended)
    echo    Download from: https://git-scm.com/download/win
    set git_ok=0
)

echo.
echo ==========================================
echo.

REM Check if ready to proceed
if %node_ok%==1 if %python_ok%==1 (
    echo 🎉 EXCELLENT! You have all required software!
    echo.
    echo 🚀 Ready to set up your AIhero platform!
    echo.
    echo What happens next:
    echo • Install project dependencies
    echo • Set up enhanced lesson system
    echo • Start your development server
    echo • Launch your AI education platform
    echo.
    echo Press any key to continue with setup...
    pause >nul
    
    cls
    echo.
    echo 🚀 Installing AIhero Platform Dependencies...
    echo ============================================
    echo.
    
    REM Check if we're in the right directory
    if not exist "package.json" (
        echo ❌ Error: Not in the correct directory
        echo Please make sure you're running this from the aihero-platform folder
        echo.
        pause
        exit /b 1
    )
    
    echo 📦 Installing project dependencies...
    echo This might take a few minutes...
    echo.
    
    call npm install
    
    if %errorlevel% equ 0 (
        echo.
        echo ✅ SUCCESS! Everything is installed!
        echo.
        echo 🎯 Your AIhero platform is ready with:
        echo ✅ Enhanced lesson components
        echo ✅ Interactive code examples
        echo ✅ Assessment system
        echo ✅ Professional styling
        echo ✅ Portfolio projects
        echo.
        echo 🚀 TO START YOUR PLATFORM:
        echo    1. Open command prompt in this folder
        echo    2. Run: npm run dev
        echo    3. Visit: http://localhost:3000
        echo    4. Try the enhanced lesson: http://localhost:3000/lesson/w1-mon
        echo.
        echo 🎉 You now have a professional AI education platform!
        echo.
    ) else (
        echo.
        echo ❌ Installation failed. This might be due to:
        echo    • Network connectivity issues
        echo    • Permissions problems
        echo    • Outdated Node.js version
        echo.
        echo Try running 'npm install' manually in the command prompt.
        echo.
    )
    
) else (
    echo ⚠️  MISSING REQUIRED SOFTWARE
    echo.
    echo Please install the missing software above, then run this script again.
    echo.
    echo 📋 Quick Installation Checklist:
    echo □ 1. Install Node.js from https://nodejs.org/
    if %python_ok%==0 echo □ 2. Install Python from https://www.python.org/downloads/
    if %python_ok%==0 echo    ⚠️  Don't forget to check "Add Python to PATH"!
    if %git_ok%==0 echo □ 3. Install Git from https://git-scm.com/download/win (optional)
    echo □ 4. Restart this script to continue
    echo.
    echo ⏱️  Total install time: 15-20 minutes
    echo 🎁 Result: Professional AI education platform
    echo.
)

echo Press any key to exit...
pause >nul
