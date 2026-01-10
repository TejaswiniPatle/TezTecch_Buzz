# 📊 TezTecch Buzz - Database Documentation

## ✅ MongoDB Database Complete Setup!

---

## 🗄️ Database Collections (4 Total):

### **1. Users Collection** (`users`)
**Purpose:** Store registered users for authentication

**Schema:**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique, lowercase),
  password: String (required, hashed with bcrypt),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Example:**
```json
{
  "_id": "679b1234567890abcdef1234",
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "password": "$2a$10$encrypted_password_hash",
  "createdAt": "2026-01-05T10:30:00.000Z",
  "updatedAt": "2026-01-05T10:30:00.000Z"
}
```

**APIs:**
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Login user

---

### **2. Subscribers Collection** (`subscribers`) ✅ NEW!
**Purpose:** Store newsletter subscribers

**Schema:**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique, lowercase),
  status: String (active/inactive, default: active),
  subscribedAt: Date (auto),
  unsubscribedAt: Date (optional),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Example:**
```json
{
  "_id": "679b2345678901bcdef2345",
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "status": "active",
  "subscribedAt": "2026-01-05T11:15:00.000Z",
  "unsubscribedAt": null,
  "createdAt": "2026-01-05T11:15:00.000Z",
  "updatedAt": "2026-01-05T11:15:00.000Z"
}
```

**APIs:**
- `POST /api/subscribe` - Add new subscriber
- `GET /api/subscribers` - Get all active subscribers (Admin)

**Indexes:**
- `email` (unique index for fast lookups)

---

### **3. Contacts Collection** (`contacts`) ✅ NEW!
**Purpose:** Store contact form submissions

**Schema:**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, lowercase),
  phone: String (optional),
  organization: String (optional),
  collaborationType: String (optional),
  message: String (required),
  status: String (pending/in-progress/responded/closed, default: pending),
  submittedAt: Date (auto),
  respondedAt: Date (optional),
  notes: String (optional, admin notes),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Example:**
```json
{
  "_id": "679b3456789012cdef3456",
  "name": "Amit Patel",
  "email": "amit@company.com",
  "phone": "+91-9876543210",
  "organization": "Tech Solutions Pvt Ltd",
  "collaborationType": "Partnership",
  "message": "We would like to collaborate on sustainability stories...",
  "status": "pending",
  "submittedAt": "2026-01-05T12:00:00.000Z",
  "respondedAt": null,
  "notes": null,
  "createdAt": "2026-01-05T12:00:00.000Z",
  "updatedAt": "2026-01-05T12:00:00.000Z"
}
```

**APIs:**
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (Admin)

**Indexes:**
- `email, submittedAt` (compound index)
- `status` (for filtering)

---

### **4. Grievances Collection** (`grievances`) ✅ NEW!
**Purpose:** Store grievance submissions with tracking

**Schema:**
```javascript
{
  _id: ObjectId,
  trackingNumber: String (required, unique),
  name: String (required),
  email: String (required, lowercase),
  phone: String (optional),
  grievanceType: String (required, enum),
  subject: String (required),
  description: String (required),
  attachmentUrl: String (optional),
  status: String (submitted/under-review/in-progress/resolved/closed),
  priority: String (low/medium/high/urgent, default: medium),
  submittedAt: Date (auto),
  reviewedAt: Date (optional),
  resolvedAt: Date (optional),
  resolution: String (optional),
  notes: String (optional, admin notes),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Grievance Types:**
- Content Issue
- Privacy Concern
- Copyright
- Technical Issue
- Other

**Example:**
```json
{
  "_id": "679b4567890123def4567",
  "trackingNumber": "GRV-1704542400000-XYZ123ABC",
  "name": "Neha Singh",
  "email": "neha@example.com",
  "phone": "+91-9123456789",
  "grievanceType": "Content Issue",
  "subject": "Incorrect information in article",
  "description": "The article published on 3rd Jan contains factual errors...",
  "attachmentUrl": "https://cloudinary.com/proof.jpg",
  "status": "submitted",
  "priority": "medium",
  "submittedAt": "2026-01-05T13:00:00.000Z",
  "reviewedAt": null,
  "resolvedAt": null,
  "resolution": null,
  "notes": null,
  "createdAt": "2026-01-05T13:00:00.000Z",
  "updatedAt": "2026-01-05T13:00:00.000Z"
}
```

**APIs:**
- `POST /api/grievance` - Submit grievance
- `GET /api/grievances` - Get all grievances (Admin)
- `GET /api/grievance/:trackingNumber` - Track specific grievance

**Indexes:**
- `trackingNumber` (unique index)
- `email, submittedAt` (compound index)
- `status` (for filtering)
- `priority` (for filtering)

---

## 🔌 Complete API Endpoints:

### Authentication:
```
POST   /api/auth/register        - Register new user
POST   /api/auth/login           - Login user
```

### Newsletter:
```
POST   /api/subscribe            - Subscribe to newsletter
GET    /api/subscribers          - Get all subscribers (Admin)
```

### Contact:
```
POST   /api/contact              - Submit contact form
GET    /api/contacts             - Get all contacts (Admin)
```

### Grievance:
```
POST   /api/grievance            - Submit grievance
GET    /api/grievances           - Get all grievances (Admin)
GET    /api/grievance/:tracking  - Track grievance by number
```

### Utility:
```
GET    /api/health               - Server health check
GET    /                         - API info
```

---

## 📊 Data Storage Summary:

| Collection | Purpose | Storage | Permanent? |
|------------|---------|---------|------------|
| **users** | User accounts | MongoDB ✅ | Yes ✅ |
| **subscribers** | Newsletter | MongoDB ✅ | Yes ✅ |
| **contacts** | Contact forms | MongoDB ✅ | Yes ✅ |
| **grievances** | Grievances | MongoDB ✅ | Yes ✅ |

**ALL DATA NOW SAVED IN DATABASE!** 🎉

---

## 🔄 Data Flow:

### Newsletter Subscription:
1. User enters name & email → Frontend
2. `POST /api/subscribe` → Backend
3. Validate email format
4. Check duplicate in MongoDB
5. Save to `subscribers` collection
6. Return success message

### Contact Form:
1. User fills form → Frontend
2. `POST /api/contact` → Backend
3. Validate required fields
4. Save to `contacts` collection
5. Admin can view via `/api/contacts`
6. Return success message

### Grievance:
1. User submits grievance → Frontend
2. `POST /api/grievance` → Backend
3. Generate unique tracking number
4. Save to `grievances` collection
5. User can track via tracking number
6. Return tracking number

---

## 💾 Database Connection:

**MongoDB URI Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/teztecch_buzz
```

**Local Development:**
```
mongodb://localhost:27017/teztecch_buzz
```

**Environment Variable:**
```env
MONGODB_URI=your_connection_string_here
```

---

## 📈 Database Statistics (After Deployment):

You can track:
- Total subscribers
- Total contacts
- Total grievances
- Pending grievances
- Resolved grievances
- Active vs inactive subscribers

---

## 🔐 Security Features:

1. **Email Validation**: Regex pattern matching
2. **Unique Constraints**: Prevent duplicates
3. **Lowercase Emails**: Consistent format
4. **Required Fields**: Data integrity
5. **Enum Values**: Controlled status values
6. **Timestamps**: Auto-generated tracking
7. **Indexes**: Fast queries

---

## 🎯 Next Steps:

1. **Deploy Backend** with MongoDB connection
2. **Test All Endpoints** with Postman/Thunder Client
3. **View Data** in MongoDB Atlas dashboard
4. **Create Admin Panel** (optional) to manage:
   - View all subscribers
   - Respond to contacts
   - Manage grievances
   - Update statuses

---

## ✅ What Changed:

### Before:
- ❌ Data in RAM (temporary)
- ❌ Lost on server restart
- ❌ No tracking
- ❌ No history

### After:
- ✅ Data in MongoDB (permanent)
- ✅ Survives server restarts
- ✅ Full tracking system
- ✅ Complete history
- ✅ Admin access APIs
- ✅ Search & filter ready

---

**Your database is now professional and production-ready! 🚀**

All data is safe in MongoDB Atlas! 🎉
