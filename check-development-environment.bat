@echo off
echo.
echo 🛠️ AIhero Platform - Development Environment Checker
echo =====================================================
echo.

echo Checking your development environment...
echo.

REM Check Node.js
echo 📦 Checking Node.js...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js is installed:
    node --version
    npm --version
) else (
    echo ❌ Node.js is NOT installed
    echo 📥 Please download from: https://nodejs.org/
    echo    Click the green "Download Node.js (LTS)" button
)

echo.

REM Check Python
echo 🐍 Checking Python...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python is installed:
    python --version
    pip --version
) else (
    echo ❌ Python is NOT installed
    echo 📥 Please download from: https://www.python.org/downloads/
    echo    ⚠️  IMPORTANT: Check "Add Python to PATH" during installation
)

echo.

REM Check Git
echo 📝 Checking Git...
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git is installed:
    git --version
) else (
    echo ❌ Git is NOT installed (optional but recommended)
    echo 📥 Please download from: https://git-scm.com/download/win
)

echo.
echo =====================================================
echo.

REM Check if all required tools are installed
node --version >nul 2>&1
set node_installed=%errorlevel%

python --version >nul 2>&1
set python_installed=%errorlevel%

if %node_installed% equ 0 if %python_installed% equ 0 (
    echo 🎉 Great! You have all required software installed.
    echo.
    echo 🚀 Ready to set up your AIhero platform!
    echo.
    echo Next steps:
    echo 1. Navigate to your aihero-platform folder
    echo 2. Run: npm install
    echo 3. Run: npm run dev
    echo 4. Visit: http://localhost:3000
    echo.
) else (
    echo ⚠️  Please install the missing software above, then run this script again.
    echo.
    echo 📋 Installation order:
    echo 1. Install Node.js first (includes npm)
    echo 2. Install Python second
    echo 3. Install Git (optional)
    echo 4. Restart this script to verify
    echo.
)

echo Press any key to exit...
pause >nul
