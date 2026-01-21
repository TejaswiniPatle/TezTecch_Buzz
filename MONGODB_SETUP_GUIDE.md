# 🔧 MongoDB Setup और Admin Panel - Website Data Connection Fix

## समस्या का समाधान
आपकी website और admin panel का data अभी connect नहीं है क्योंकि MongoDB database नहीं चल रहा है।

## ✅ तुरंत Solution (2 Options)

### Option 1: MongoDB Atlas (RECOMMENDED - Free & Easy)

1. **MongoDB Atlas Account बनाएं** (Free Forever):
   - https://www.mongodb.com/cloud/atlas/register पर जाएं
   - Sign up करें (Google account से quick signup)

2. **Free Cluster बनाएं**:
   - "Create a Cluster" पर click करें
   - **M0 Sandbox** (FREE) select करें
   - Region: Mumbai/Singapore select करें
   - Cluster Name: `teztecch-buzz`
   - Click "Create Cluster" (2-3 minutes लगेंगे)

3. **Database User बनाएं**:
   - Left sidebar में "Database Access" पर click करें
   - "Add New Database User" click करें
   - Username: `teztecch_admin`
   - Password: `TezTecch@2026` (या कोई strong password)
   - Built-in Role: **Read and write to any database**
   - Click "Add User"

4. **Network Access Allow करें**:
   - Left sidebar में "Network Access" click करें
   - "Add IP Address" click करें
   - "Allow Access from Anywhere" click करें (0.0.0.0/0)
   - Click "Confirm"

5. **Connection String Copy करें**:
   - Left sidebar में "Database" click करें
   - अपने cluster पर "Connect" button click करें
   - "Connect your application" select करें
   - Driver: **Node.js**, Version: **5.5 or later**
   - Connection string copy करें (जैसे):
     ```
     mongodb+srv://teztecch_admin:<password>@teztecch-buzz.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```

6. **Backend .env में Update करें**:
   ```env
   MONGODB_URI=mongodb+srv://teztecch_admin:TezTecch@2026@teztecch-buzz.xxxxx.mongodb.net/teztecch_buzz?retryWrites=true&w=majority
   ```
   (⚠️ `<password>` को अपने actual password से replace करें!)

---

### Option 2: Local MongoDB Install (Windows)

अगर आप local में MongoDB install करना चाहती हैं:

1. **Download MongoDB Community Server**:
   - https://www.mongodb.com/try/download/community
   - Windows MSI installer download करें

2. **Install करें**:
   - Installer run करें
   - "Complete" installation select करें
   - "Install MongoDB as a Service" ✓ check रखें
   - "Install MongoDB Compass" ✓ check रखें (GUI tool)

3. **Service Start करें**:
   ```powershell
   net start MongoDB
   ```

4. **Verify करें**:
   ```powershell
   mongo --version
   ```

---

## 🚀 Backend Server Restart करें

MongoDB setup के बाद:

1. Backend terminal में `Ctrl+C` से stop करें
2. फिर से start करें:
   ```powershell
   cd backend
   npm run dev
   ```

✅ अब आपको यह दिखेगा:
```
✅ MongoDB connected successfully
📊 Database: teztecch_buzz
```

---

## 📊 Admin Panel और Website Data Connection

### यह कैसे काम करता है:

```
Website (Frontend)  ←→  Backend API  ←→  MongoDB Database  ←→  Admin Panel
   (Port 5173)          (Port 5000)                            (Port 5174)
```

### Data Flow:

1. **Website देखता है**: MongoDB से published data
2. **Admin Panel देखता है**: MongoDB से सभी data (published + drafts)
3. **Admin जब Edit करता है**: 
   - Admin Panel → Backend API → MongoDB में save
   - Website automatically update हो जाता है

### Real-time Features:

✅ **Stories**: Admin add/edit करे → Website पर show होगा
✅ **Categories**: Admin बनाए → Website menu में आएगा
✅ **Hero Slides**: Admin change करे → Homepage banner update होगा
✅ **Videos**: Admin upload करे → Video section में दिखेगा
✅ **Menu Items**: Admin modify करे → Header/Footer update होगा

---

## 🧪 Test करने के लिए

### 1. Admin Panel में Login करें:
```
URL: http://localhost:5174
Email: admin@teztecch.com
Password: Admin@123456
```

### 2. कुछ Test Data Add करें:

**Story Add करें**:
- Admin Panel → Stories → Add New
- Title: "Test Story from Admin"
- Category: sustainability
- Published: ✓ Check करें
- Save

**Website पर Check करें**:
- http://localhost:5173
- Category: Sustainability
- आपकी नई story दिखेगी! 🎉

---

## 📱 API Endpoints (Admin के लिए)

### Admin Panel ये endpoints use करता है:

```javascript
// Dashboard Stats
GET  /api/admin/dashboard/stats

// Stories Management
GET    /api/admin/stories          // सभी stories
POST   /api/admin/stories          // नई story बनाएं
PUT    /api/admin/stories/:id      // story edit करें
DELETE /api/admin/stories/:id      // story delete करें

// Categories
GET    /api/admin/categories
POST   /api/admin/categories
PUT    /api/admin/categories/:id
DELETE /api/admin/categories/:id

// Menu Items
GET    /api/admin/menu-items
POST   /api/admin/menu-items
PUT    /api/admin/menu-items/:id
DELETE /api/admin/menu-items/:id

// Videos, Pages, Jobs, Press Releases etc.
// (Same pattern for all content types)
```

### Website ये endpoints use करता है:

```javascript
// Public Data (केवल published items)
GET /api/public/stories?limit=10
GET /api/public/categories
GET /api/public/hero-slides
GET /api/public/videos
GET /api/public/menu-items
```

---

## 🔐 Security Note

Production में deploy करने से पहले:

1. `.env` में JWT_SECRET change करें
2. Admin password change करें
3. MongoDB Atlas में IP whitelist properly set करें
4. CORS origins को production URLs से update करें

---

## 🆘 Troubleshooting

### Problem: "MongoDB connection error"
**Solution**: 
- Atlas: Connection string में password correct है?
- Local: MongoDB service चल रही है? `net start MongoDB`

### Problem: "Admin Panel में data नहीं दिख रहा"
**Solution**:
- Backend running है? (Port 5000)
- Browser console में errors check करें
- Network tab में API calls 200 OK हैं?

### Problem: "Website पर data नहीं दिख रहा"
**Solution**:
- Stories को Published mark किया है?
- Categories Active हैं?
- Backend logs check करें

---

## ✨ अगले Steps

1. MongoDB setup करें (Option 1 recommended)
2. Backend restart करें
3. Admin panel में login करें
4. Test data add करें
5. Website पर verify करें

🎉 अब आपका Admin Panel और Website पूरी तरह connected है!
