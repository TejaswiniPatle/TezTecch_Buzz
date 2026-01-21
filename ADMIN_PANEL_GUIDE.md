# 🎯 Admin Panel - Complete Guide

## 📋 Overview
Admin Panel se aap **main website ka saara data** manage kar sakte ho - Add, Edit, Delete, Publish/Unpublish sab kuch!

---

## 🚀 Quick Start

### 1. Servers Start Karo:

**Option A - Ek Command Se Dono Start:**
```powershell
# Root directory me
.\START-BOTH.ps1
```

**Option B - Alag Alag Start:**
```powershell
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Admin Panel  
cd admin
npm run dev
```

### 2. Admin Panel Access:
- **URL:** `http://localhost:5174`
- **Email:** `admin@teztecch.com`
- **Password:** `admin123`

### 3. Main Website:
- **URL:** `http://localhost:5173`

---

## 📊 Admin Panel Features

### **Dashboard**
- Live statistics dekho (Stories, Videos, Subscribers, etc.)
- Recent activity track karo
- Quick actions - direct pages pe jao

---

## 📝 Content Management

### **1. Stories Management**
**Path:** Dashboard → Stories

**Features:**
- ✅ Add new story with title, content, author, category
- ✅ Upload images (Image URL)
- ✅ Set read time
- ✅ Add tags (comma-separated)
- ✅ Publish/Unpublish toggle
- ✅ Mark as Featured
- ✅ Edit existing stories
- ✅ Delete stories
- ✅ View all stories in table format

**Form Fields:**
- Title* (required)
- Description*
- Content* (full article)
- Category (Changemakers, Parenting, Sustainability, etc.)
- Author*
- Image URL
- Read Time (minutes)
- Tags (comma-separated)
- Published (checkbox)
- Featured (checkbox)

**Main Website Impact:**
- Published stories dikhenge: `/stories` page pe
- Featured stories dikhenge: Homepage hero section me
- Category-wise filtering available

---

### **2. Videos Management**
**Path:** Dashboard → Videos

**Features:**
- ✅ Add YouTube or direct video links
- ✅ Upload thumbnail images
- ✅ Set video duration
- ✅ Video type (Video, YouTube, Short)
- ✅ Category management
- ✅ Publish/Unpublish videos

**Form Fields:**
- Title*
- Description*
- Video URL* (YouTube or direct link)
- Thumbnail URL*
- Duration (e.g., 5:30)
- Type (Video, YouTube, Short)
- Category (General, Shorts, Stories, Interviews)
- Author*
- Tags
- Published
- Featured

**Main Website Impact:**
- Published videos: `/videos` page
- Shorts: `/shorts` page
- Featured videos: Homepage video section

---

### **3. Visual Stories Management**
**Path:** Dashboard → Visual Stories

**Features:**
- ✅ Create interactive visual stories
- ✅ Multiple slides with images
- ✅ Story-style presentation
- ✅ Mobile-optimized format

**Form Fields:**
- Title*
- Description*
- Slides (JSON format with images and captions)
- Cover Image URL*
- Category
- Author*
- Published
- Featured

**Main Website Impact:**
- Published visual stories: `/visual-stories` page
- Instagram-style story format

---

### **4. Pages Management**
**Path:** Dashboard → Pages

**Features:**
- ✅ Create custom pages (About, Contact, etc.)
- ✅ Choose template (Default, About, Contact)
- ✅ Set custom slug for URL
- ✅ Full content control

**Form Fields:**
- Title*
- Slug* (URL path, e.g., "about-us")
- Template (Default, About, Contact)
- Content* (full page HTML/text)
- Meta Description (SEO)
- Published

**Main Website Impact:**
- Published pages accessible: `/{slug}`
- Example: `/about-us`, `/privacy-policy`

---

### **5. Jobs Management**
**Path:** Dashboard → Jobs

**Features:**
- ✅ Post job openings
- ✅ Set department, location, salary
- ✅ Job type (Full-time, Part-time, Contract, etc.)
- ✅ Experience requirements
- ✅ Application email

**Form Fields:**
- Title*
- Department* (e.g., Engineering, Marketing)
- Location* (e.g., Mumbai, Remote)
- Salary Range
- Job Type (Full-time, Part-time, Contract, Internship)
- Experience (e.g., 3-5 years)
- Description*
- Application Email*
- Published
- Featured

**Main Website Impact:**
- Published jobs: `/careers` page
- Featured jobs highlighted on top

---

### **6. Press Releases Management**
**Path:** Dashboard → Press

**Features:**
- ✅ Publish company news
- ✅ Set release date
- ✅ Category (Company News, Product Launch, etc.)
- ✅ Full press release content

**Form Fields:**
- Title*
- Slug*
- Category (Company News, Product Launch, Partnership, etc.)
- Date*
- Excerpt (brief summary)
- Content* (full press release)
- Published
- Featured

**Main Website Impact:**
- Published press releases: `/press` page
- Latest news section on homepage

---

### **7. Hero Slides Management**
**Path:** Dashboard → Hero Slides

**Features:**
- ✅ Homepage hero carousel management
- ✅ Image, title, subtitle, CTA button
- ✅ Set order for slides
- ✅ Link to specific pages

**Form Fields:**
- Title*
- Subtitle
- Image URL*
- Button Text (CTA)
- Button Link (URL)
- Order (display sequence)
- Active (checkbox)

**Main Website Impact:**
- Active hero slides: Homepage top carousel
- Automatic rotation between slides

---

### **8. Categories Management**
**Path:** Dashboard → Categories

**Features:**
- ✅ Create content categories
- ✅ Set category slug and description
- ✅ Icon/image for category
- ✅ Active/Inactive toggle

**Form Fields:**
- Name*
- Slug*
- Description
- Icon URL
- Active

**Main Website Impact:**
- Categories used for filtering: Stories, Videos pages
- Category pages: `/category/{slug}`

---

### **9. Menu Items Management**
**Path:** Dashboard → Menu Items

**Features:**
- ✅ Manage website navigation
- ✅ Set menu item order
- ✅ Parent/child menu structure
- ✅ External/internal links

**Form Fields:**
- Label*
- Link*
- Order
- Parent Item (for dropdown)
- Active

**Main Website Impact:**
- Active menu items: Website header navigation
- Dropdown menus if parent-child relationship

---

## 👥 User Management

### **10. Subscribers Management**
**Path:** Dashboard → Subscribers

**Features:**
- ✅ View all email subscribers
- ✅ See subscription date
- ✅ Active/Inactive status
- ✅ Delete subscribers
- ✅ Export list (upcoming)

**Data Displayed:**
- Name
- Email
- Status (Active/Inactive)
- Subscribed At (date)

**Main Website Impact:**
- Subscribers from: Footer newsletter signup
- Contact page subscription forms

---

### **11. Contacts Management**
**Path:** Dashboard → Contacts

**Features:**
- ✅ View contact form submissions
- ✅ Read messages
- ✅ Mark as Pending/Resolved
- ✅ Organization details
- ✅ Delete messages

**Data Displayed:**
- Name
- Email
- Organization
- Status (Pending/Resolved)
- Submission Date
- Message (in detail view)

**Main Website Impact:**
- Submissions from: `/contact` page form
- "Work With Us" forms

---

### **12. Grievances Management**
**Path:** Dashboard → Grievances

**Features:**
- ✅ Public grievance tracking
- ✅ Tracking number system
- ✅ Priority (High, Medium, Low)
- ✅ Status (Submitted, Under Review, Resolved)
- ✅ Grievance type categorization

**Data Displayed:**
- Tracking Number
- Name
- Grievance Type
- Status
- Priority
- Submission Date
- Details

**Main Website Impact:**
- Submissions from: `/grievance` page
- Public grievance portal

---

### **13. Users Management**
**Path:** Dashboard → Users

**Features:**
- ✅ View all registered users
- ✅ Edit user roles (Admin/User)
- ✅ Delete users
- ✅ Account creation dates

**Data Displayed:**
- Name
- Email
- Role (Admin/User)
- Created At

**Security:**
- Only Admins can access this section
- Can't delete yourself

---

## 🔄 Data Flow: Frontend ↔️ Admin Panel

```
Main Website (localhost:5173)
         ↓ submits data
    Backend API (localhost:5000)
         ↓ stores in MongoDB
         ↓ retrieves via API
Admin Panel (localhost:5174)
         ↓ manages data
    Backend API (localhost:5000)
         ↓ updates MongoDB
         ↓ fetched by
Main Website (localhost:5173)
```

### **Real Example:**

1. **User visits main website** → Dekhe Homepage pe stories
2. **Admin panel me jao** → Stories tab open karo
3. **Edit story** → Title change karo, "Save" click karo
4. **Main website refresh karo** → Updated title dikhega

**Important:** Changes turant reflect honge after page refresh!

---

## 🎨 Admin Panel Features

### **Search & Filter**
- Category-wise filtering
- Published/Unpublished filter
- Search by title, content, author
- Date range filtering (upcoming)

### **Pagination**
- 10 items per page
- Previous/Next navigation
- Total page count
- Jump to page (upcoming)

### **Status Management**
- Quick publish/unpublish toggle
- Draft mode for work in progress
- Featured content highlighting
- Active/Inactive for menu items

### **Responsive Design**
- Mobile-friendly admin panel
- Touch-optimized buttons
- Responsive tables
- Sidebar collapse on mobile

---

## 🔐 Security Features

### **Authentication**
- JWT token-based authentication
- Admin role verification
- Automatic session timeout
- Secure password handling

### **Authorization**
- Role-based access control (Admin only)
- Protected API routes
- CORS configuration
- Request validation

---

## 🛠️ Common Tasks

### **Add New Story:**
1. Dashboard → Stories
2. Click "+ Add New" button
3. Fill all required fields (marked with *)
4. Check "Published" to make it live
5. Click "Create" button
6. Visit main website `/stories` to see it

### **Edit Existing Content:**
1. Find item in respective tab
2. Click "Edit" button
3. Make changes
4. Click "Update" button
5. Refresh main website to see changes

### **Delete Content:**
1. Find item in table
2. Click "Delete" button
3. Confirm deletion
4. Item removed from main website instantly

### **Publish/Unpublish:**
1. Edit the item
2. Toggle "Published" checkbox
3. Save changes
4. Published = visible on website
5. Unpublished = only visible in admin panel

---

## 📱 Main Website Pages Connected

| Admin Tab | Main Website Page |
|-----------|-------------------|
| Stories | `/stories` |
| Videos | `/videos` |
| Visual Stories | `/visual-stories` |
| Pages | `/{slug}` (e.g., `/about`) |
| Jobs | `/careers` |
| Press Releases | `/press` |
| Hero Slides | Homepage carousel |
| Categories | Filter sections |
| Menu Items | Header navigation |
| Subscribers | Newsletter signups |
| Contacts | `/contact` form |
| Grievances | `/grievance` portal |

---

## 🚨 Important Notes

### **Required Fields:**
- Fields marked with * (asterisk) are mandatory
- Form won't submit without required fields
- Validation errors will show in red

### **Image URLs:**
- Use full URLs (https://...)
- Supported formats: JPG, PNG, GIF, WebP
- Recommended size: 1200x630px for hero images
- Compress images before uploading

### **Slugs:**
- Use lowercase letters
- Replace spaces with hyphens
- No special characters
- Example: "about us" → "about-us"

### **Tags:**
- Comma-separated values
- Example: "sustainability, innovation, social impact"
- Used for search and filtering
- Keep relevant and specific

---

## 🔧 Troubleshooting

### **Admin panel not loading:**
```powershell
cd admin
npm install
npm run dev
```

### **Backend not responding:**
```powershell
cd backend
npm install
npm start
```

### **Changes not reflecting:**
1. Check if item is "Published"
2. Refresh main website (Ctrl+F5)
3. Check browser console for errors
4. Verify backend is running

### **Login not working:**
1. Check credentials: admin@teztecch.com / admin123
2. Clear browser cache
3. Check backend console for errors
4. Verify MongoDB is running

---

## 📞 Support

**Need Help?**
- Check backend console for errors
- Verify MongoDB connection
- Ensure all servers are running
- Check browser console (F12)

**Common Issues:**
- Port already in use: Kill process or change port
- MongoDB connection: Check connection string
- CORS errors: Verify backend CORS configuration
- Auth errors: Clear localStorage and re-login

---

## 🎉 Summary

Admin Panel se aap:
- ✅ **Sab content manage** kar sakte ho
- ✅ **Real-time changes** kar sakte ho  
- ✅ **Main website ka data** control kar sakte ho
- ✅ **User submissions** dekh aur resolve kar sakte ho
- ✅ **Website settings** customize kar sakte ho

**Sab kuch ek jagah se control karo - Easy, Fast, Powerful!** 🚀
