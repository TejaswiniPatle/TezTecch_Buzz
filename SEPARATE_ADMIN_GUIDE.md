# 🚀 Separate Admin Panel Setup - Complete Guide

## 📋 Overview

Admin panel ab **completely separate application** hai with its own:
- ✅ Separate codebase in `/admin` folder
- ✅ Own development server (Port **5174**)
- ✅ Independent build process
- ✅ Isolated dependencies

### URLs:

| Application | Port | Local URL |
|------------|------|-----------|
| **Main Website** | 5173 | http://localhost:5173 |
| **Admin Panel** | 5174 | http://localhost:5174 |
| **Backend API** | 5000 | http://localhost:5000 |

---

## 📁 Project Structure

```
TezTecch_Buzz/
├── admin/                      # 🔐 Separate Admin Application
│   ├── index.html              # Admin entry point
│   ├── package.json            # Admin dependencies
│   ├── vite.config.js          # Admin Vite config (Port 5174)
│   ├── .env                    # Admin environment variables
│   └── src/
│       ├── main.jsx            # Admin bootstrap
│       ├── App.jsx             # Admin routing
│       ├── pages/
│       │   ├── Login.jsx       # Admin login
│       │   └── Dashboard.jsx   # Admin dashboard
│       └── components/
│
├── src/                        # 📱 Main Website
│   ├── main.jsx
│   ├── App.jsx
│   └── pages/
│
├── backend/                    # 🔙 Backend API
│   └── server.js
│
├── package.json                # Main website dependencies
├── vite.config.js              # Main website config (Port 5173)
├── START-BOTH.ps1              # Start both servers
└── START-ADMIN.ps1             # Start admin only
```

---

## 🚀 Quick Start

### First Time Setup

1. **Install Main Website Dependencies:**
```powershell
npm install
```

2. **Install Admin Panel Dependencies:**
```powershell
cd admin
npm install
cd ..
```

### Running Servers

#### Option 1: Start Both Servers (Recommended)
```powershell
.\START-BOTH.ps1
```
This opens **two terminal windows**:
- Terminal 1: Main Website (Port 5173)
- Terminal 2: Admin Panel (Port 5174)

#### Option 2: Start Individually

**Main Website Only:**
```powershell
npm run dev
# Runs on http://localhost:5173
```

**Admin Panel Only:**
```powershell
.\START-ADMIN.ps1
# OR
cd admin
npm run dev
# Runs on http://localhost:5174
```

---

## 🌐 Access URLs

### Local Development (Currently Running ✅)

- **Main Website**: http://localhost:5173
- **Admin Panel**: http://localhost:5174

### After Deployment

- **Main Website**: https://yourdomain.com
- **Admin Panel**: https://admin.yourdomain.com (subdomain)
  - OR: https://yourdomain.com/admin (path-based)

---

## 🔧 Configuration

### Admin Panel Config ([admin/vite.config.js](admin/vite.config.js))

```javascript
export default defineConfig({
  server: {
    port: 5174,        // Admin runs on 5174
    strictPort: true,
    host: true,
    open: true,
  }
})
```

### Backend CORS ([backend/server.js](backend/server.js))

```javascript
const allowedOrigins = [
  'http://localhost:5173',  // Main Website
  'http://localhost:5174',  // Admin Panel
  // Production URLs
]
```

### Environment Variables

**Admin Panel** ([admin/.env](admin/.env)):
```env
VITE_API_URL=http://localhost:5000
```

**Main Website** ([.env](.env)):
```env
VITE_API_URL=http://localhost:5000
```

---

## 📦 Building for Production

### Build Both Applications

```powershell
# Build main website
npm run build

# Build admin panel
cd admin
npm run build
cd ..
```

### Output

- Main Website: `dist/` folder
- Admin Panel: `admin/dist/` folder

---

## 🚢 Deployment Options

### Option 1: Subdomain Deployment (Recommended)

**Main Website**: Deploy `dist/` to `yourdomain.com`
**Admin Panel**: Deploy `admin/dist/` to `admin.yourdomain.com`

**Netlify Configuration:**

Create two separate sites:
1. Main site → root folder
2. Admin site → admin folder

**Main Site** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

**Admin Site** (create `admin/netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Option 2: Single Domain with Path

Deploy both to same domain:
- Main: `yourdomain.com/*`
- Admin: `yourdomain.com/admin/*`

Requires proxy configuration in hosting platform.

---

## 🔒 Security Features

### 1. Separate Codebases
- Admin code never loads on public website
- Reduced attack surface
- Better performance

### 2. Protected Routes
```jsx
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!token || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};
```

### 3. Role-Based Access
- Backend validates admin role
- Token-based authentication
- Auto-logout on invalid credentials

---

## 🛠️ Available Scripts

### Root Package.json Scripts:

```json
{
  "scripts": {
    "dev": "vite",                        // Main website dev server
    "dev:admin": "cd admin && npm run dev", // Admin panel dev server
    "dev:both": "...",                     // Both servers (requires concurrently)
    "build": "vite build",                 // Build main website
    "build:admin": "cd admin && npm run build", // Build admin panel
    "build:both": "npm run build && npm run build:admin", // Build both
    "install:admin": "cd admin && npm install" // Install admin deps
  }
}
```

---

## 💡 Benefits of Separate Setup

### ✅ **Performance**
- Main website loads faster (no admin code)
- Separate bundles = smaller file sizes
- Independent caching strategies

### ✅ **Security**
- Admin panel not exposed on main site
- Separate authentication flow
- Different deployment targets

### ✅ **Development**
- Independent development cycles
- Easier testing (run separately)
- No port conflicts

### ✅ **Maintenance**
- Update admin without touching main site
- Separate error boundaries
- Independent deployments

---

## 🔍 Testing

### Test Main Website
1. Visit http://localhost:5173
2. Navigate through public pages
3. Try linking to admin (should open in new tab)

### Test Admin Panel
1. Visit http://localhost:5174
2. Login with admin credentials
3. Test dashboard functionality
4. Verify API calls to backend

### Test Both Together
1. Run `.\START-BOTH.ps1`
2. Open both URLs in different tabs
3. Login to admin panel
4. Verify both work independently

---

## 🚨 Troubleshooting

### Issue: Port Already in Use

**Error**: `Port 5174 is already in use`

**Solution**:
```powershell
# Find process using port
netstat -ano | findstr :5174

# Kill process
taskkill /PID <process_id> /F
```

### Issue: Admin Panel Not Loading

**Solution**:
1. Check if dependencies installed: `cd admin && npm install`
2. Verify port 5174 is free
3. Check backend is running on port 5000

### Issue: CORS Error

**Solution**:
1. Check backend CORS config includes `http://localhost:5174`
2. Restart backend server
3. Clear browser cache

### Issue: Build Fails

**Solution**:
```powershell
# Clean node_modules
cd admin
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

---

## 📝 Admin Login Credentials

Create admin user via backend:

```powershell
cd backend
node createAdmin.js
```

---

## 🎯 Current Status

✅ **Completed:**
- Separate admin folder created
- Independent package.json and vite config
- Admin runs on port 5174
- Main website runs on port 5173
- Backend CORS updated for both origins
- Startup scripts created

✅ **Ready to Use:**
- Both servers running
- Admin Panel: http://localhost:5174
- Main Website: http://localhost:5173

---

## 📚 Next Steps

1. ✅ **Currently Running**: Test both applications
2. 🎨 Customize admin panel UI
3. 🚀 Deploy to production (separate subdomains)
4. 🔐 Setup SSL certificates for both domains
5. 📊 Add monitoring and analytics

---

## 💬 Quick Commands Reference

```powershell
# Start everything
.\START-BOTH.ps1

# Start admin only
.\START-ADMIN.ps1

# Install admin dependencies
cd admin && npm install

# Build admin for production
cd admin && npm run build

# Preview admin build
cd admin && npm run preview
```

---

**Admin Panel Port**: 🔐 **5174**
**Main Website Port**: 📱 **5173**
**Status**: ✅ **Both Running Successfully**

