# 🚀 TezTecch Buzz - Quick Start Guide

## Choose Your Method:

### Method 1: Automated Start (Recommended)
```powershell
# Run this in PowerShell
.\START.ps1
```
This will automatically:
- Check dependencies
- Start backend server
- Start frontend server
- Open in new windows

### Method 2: Manual Start

#### Terminal 1 - Backend:
```bash
cd backend
npm install           # First time only
npm start            # Start backend server
```

#### Terminal 2 - Create Admin (First time only):
```bash
cd backend
npm run create-admin  # Create admin user
```

#### Terminal 3 - Frontend:
```bash
npm install           # First time only
npm run dev          # Start frontend
```

## 🔧 Before Starting

Make sure you have:

1. **Backend .env file** (backend/.env)
```env
MONGODB_URI=mongodb+srv://your_connection_string
JWT_SECRET=your_secure_random_string
PORT=5000
FRONTEND_URL=http://localhost:5173
```

2. **MongoDB Database**
   - Local MongoDB OR
   - MongoDB Atlas account

3. **Node.js installed**
   - Version 18 or higher

## 📍 Access Points

After starting:

- **Public Website:** http://localhost:5173
- **Admin Login:** http://localhost:5173/admin/login
- **Backend API:** http://localhost:5000

## 🔑 Default Credentials

```
Email: admin@teztecch.com
Password: admin123
```

⚠️ Change this after first login!

## ✅ Quick Checklist

- [ ] MongoDB connection string added to backend/.env
- [ ] JWT_SECRET generated and added to backend/.env
- [ ] Backend dependencies installed (npm install)
- [ ] Frontend dependencies installed (npm install)
- [ ] Backend server running on port 5000
- [ ] Frontend running on port 5173
- [ ] Admin user created
- [ ] Can login to admin panel

## 🆘 Troubleshooting

### Backend won't start?
- Check MongoDB connection string
- Verify .env file exists in backend folder
- Check port 5000 is not in use

### Frontend won't start?
- Check port 5173 is not in use
- Run `npm install` first
- Clear node_modules and reinstall

### Can't login to admin?
- Run: `cd backend && npm run create-admin`
- Check MongoDB connection
- Verify JWT_SECRET is set

## 📚 Full Documentation

For complete details, see:
- **COMPLETE_SYSTEM_SUMMARY.md** - Overview
- **ADMIN_PANEL_GUIDE.md** - Admin features
- **TESTING_DEPLOYMENT_CHECKLIST.md** - Testing & deployment

## 🎉 You're All Set!

Once everything is running:
1. Open http://localhost:5173
2. Browse the public website
3. Go to /admin/login
4. Login and start managing content!

Happy creating! 🚀
