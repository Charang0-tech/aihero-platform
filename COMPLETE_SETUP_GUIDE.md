# 🛠️ **Complete Beginner's Setup Guide**

## 🎯 **Quick Start: Run the Environment Checker**

1. **Double-click** `check-development-environment.bat` in your aihero-platform folder
2. It will tell you exactly what's missing and what to install
3. Follow the installation links provided
4. Run the checker again to verify everything works

---

## 📥 **Manual Installation Guide**

### **Step 1: Install Node.js (Required)**
- **What it does:** Runs your web application
- **Download:** https://nodejs.org/
- **Click:** The green "Download Node.js (LTS)" button
- **Install:** Run the file, click "Next" through everything
- **Time:** 3-5 minutes

### **Step 2: Install Python (Required for AI lessons)**
- **What it does:** Powers the AI coding lessons
- **Download:** https://www.python.org/downloads/
- **Click:** "Download Python 3.12.x" (latest version)
- **⚠️ CRITICAL:** Check "Add Python to PATH" during installation
- **Install:** Run the file, click "Install Now"
- **Time:** 3-5 minutes

### **Step 3: Install Git (Optional but recommended)**
- **What it does:** Manages code versions
- **Download:** https://git-scm.com/download/win
- **Install:** Run the file, accept all defaults
- **Time:** 2-3 minutes

### **Step 4: Install VS Code (Optional but recommended)**
- **What it does:** Best code editor for this project
- **Download:** https://code.visualstudio.com/
- **Install:** Run the file, accept all defaults
- **Time:** 2-3 minutes

---

## ✅ **Verification Steps**

After installing each piece of software:

1. **Open Command Prompt:**
   - Press `Windows + R`
   - Type `cmd`
   - Press Enter

2. **Test each installation:**
```bash
# Test Node.js and npm
node --version
npm --version

# Test Python
python --version
pip --version

# Test Git (if installed)
git --version
```

3. **You should see version numbers** for each command

---

## 🚀 **After Everything is Installed**

### **Option A: Use Our Setup Script**
1. Double-click `install-enhancements.bat`
2. Wait for installation to complete
3. Run `npm run dev`
4. Visit http://localhost:3000

### **Option B: Manual Setup**
```bash
# Navigate to your project folder
cd C:\Users\ndrsp\OneDrive\Escritorio\DEVS\AIHERO\aihero-platform

# Install project dependencies
npm install

# Start the development server
npm run dev
```

---

## 🆘 **Common Issues & Solutions**

### **"node is not recognized"**
- **Solution:** Restart your command prompt after installing Node.js
- **Alternative:** Restart your computer

### **"python is not recognized"**
- **Solution:** You forgot to check "Add Python to PATH" during installation
- **Fix:** Reinstall Python and make sure to check that box

### **npm install fails**
- **Solution:** Make sure you're in the correct folder (aihero-platform)
- **Check:** Run `dir` and you should see `package.json`

### **Port 3000 already in use**
- **Solution:** Close any other applications using port 3000
- **Alternative:** The terminal will offer you port 3001 instead

---

## 🎉 **Success Criteria**

You'll know everything works when:

1. ✅ **Environment checker shows all green checkmarks**
2. ✅ **`npm install` completes without errors**
3. ✅ **`npm run dev` starts the server**
4. ✅ **http://localhost:3000 loads your website**
5. ✅ **http://localhost:3000/lesson/w1-mon shows enhanced content**

---

## ⏱️ **Total Time Estimate**

- **Software downloads:** 5-10 minutes (depending on internet speed)
- **Installations:** 10-15 minutes
- **Project setup:** 2-3 minutes
- **Total:** 20-30 minutes for complete setup

---

## 🔥 **What You'll Have After Setup**

- ✅ **Professional development environment**
- ✅ **All tools used by real developers**
- ✅ **AIhero platform running locally**
- ✅ **Enhanced interactive lessons**
- ✅ **Python coding environment**
- ✅ **Ready to build and deploy**

**Start with the environment checker and follow the prompts!** 🚀
