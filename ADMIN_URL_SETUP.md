# Admin Panel - Separate URL Setup Guide 🎯

## 📋 Overview

Admin panel ab completely separate URL pe hai with proper security aur isolation:

- **Main Website**: `yourdomain.com`
- **Admin Panel**: `yourdomain.com/admin`

## 🏗️ Architecture

### 1. **Separate Entry Points**
```
index.html       → Main public website (App.jsx)
admin.html       → Admin panel (AdminApp.jsx)
```

### 2. **Separate React Apps**
```
src/main.jsx     → Public website bootstrap
src/admin-main.jsx → Admin panel bootstrap

src/App.jsx      → Public routes
src/AdminApp.jsx → Admin routes with protection
```

### 3. **Protected Routes**
- ✅ Token-based authentication
- ✅ Role verification (admin only)
- ✅ Auto-redirect on unauthorized access

## 🚀 Local Development

### Start Development Server
```bash
npm run dev
```

### Access URLs
- Public Site: `http://localhost:5173`
- Admin Panel: `http://localhost:5173/admin.html`

## 📦 Build for Production

```bash
npm run build
```

Build creates separate bundles:
- `dist/index.html` - Main website
- `dist/admin.html` - Admin panel
- Optimized JS chunks for both apps

## 🌐 Deployment URLs

### Production Access

**Public Website:**
```
https://yourdomain.com
https://yourdomain.com/stories
https://yourdomain.com/about
```

**Admin Panel:**
```
https://yourdomain.com/admin        → Redirects to login
https://yourdomain.com/admin/login  → Admin login page
https://yourdomain.com/admin/dashboard → Dashboard (protected)
```

## 🔒 Security Features

### 1. **Route Protection**
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

### 2. **Admin-Only Access**
- Login checks role from backend
- Dashboard verifies admin role on mount
- Auto-logout on invalid credentials

### 3. **No Search Engine Indexing**
```html
<meta name="robots" content="noindex, nofollow" />
```

## 🔄 Redirects Configuration

### Netlify (`netlify.toml`)
```toml
# Admin panel redirects
[[redirects]]
  from = "/admin"
  to = "/admin.html"
  status = 200

[[redirects]]
  from = "/admin/*"
  to = "/admin.html"
  status = 200

# Main site redirects
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/admin", "destination": "/admin.html" },
    { "source": "/admin/(.*)", "destination": "/admin.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 📱 Navigation Between Apps

### Public Site → Admin
```jsx
// Header or footer
<a href="/admin" target="_blank">Admin Login</a>
```

### Admin → Public Site
```jsx
// In AdminLogin
<a href="/" target="_blank">Back to Website</a>
```

## 🎨 Benefits

### ✅ **Complete Separation**
- Admin code doesn't load on public site
- Better performance for users
- Cleaner code organization

### ✅ **Enhanced Security**
- No admin routes in public bundle
- Protected entry point
- Role-based access control

### ✅ **Better SEO**
- Admin pages not indexed
- Clean public URLs
- No admin bloat in main bundle

### ✅ **Easy Maintenance**
- Independent admin updates
- Separate error boundaries
- Isolated state management

## 🛠️ File Structure

```
├── index.html              # Public website entry
├── admin.html              # Admin panel entry
├── src/
│   ├── main.jsx           # Public app bootstrap
│   ├── admin-main.jsx     # Admin app bootstrap
│   ├── App.jsx            # Public routes
│   ├── AdminApp.jsx       # Admin routes
│   ├── pages/
│   │   ├── Home.jsx       # Public pages
│   │   ├── AdminLogin.jsx # Admin login
│   │   └── AdminDashboard.jsx # Admin dashboard
│   └── components/
│       ├── Header.jsx     # Public header
│       └── Footer.jsx     # Public footer
├── vite.config.js         # Multi-page config
├── netlify.toml           # Netlify redirects
└── vercel.json            # Vercel redirects
```

## 🔧 Environment Variables

Create `.env` file:
```env
VITE_API_URL=https://your-backend-url.com
```

## 📝 Admin Login Credentials

After deployment, create admin user via backend:
```bash
cd backend
node createAdmin.js
```

## 🚨 Troubleshooting

### Issue: Admin panel shows 404
**Solution**: Check redirect rules in hosting platform

### Issue: Admin redirects to public site
**Solution**: Verify token and role in localStorage

### Issue: Build fails
**Solution**: Ensure `vite.config.js` has both entry points

## 🎯 Next Steps

1. ✅ Setup completed
2. 🚀 Test locally: `npm run dev`
3. 📦 Build: `npm run build`
4. 🌐 Deploy to hosting platform
5. 🔒 Create admin user
6. ✅ Test admin access: `yourdomain.com/admin`

## 💡 Pro Tips

- Use `/admin` URL in browser bookmarks
- Admin panel opens in new tab from public site
- Token expires after 30 days (configurable)
- Always test both apps after deployment

---

**Admin Panel URL**: `https://yourdomain.com/admin`
**Status**: ✅ Properly Configured
**Security**: 🔒 Protected & Isolated
