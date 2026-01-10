
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import Subscriber from './models/Subscriber.js';
import Contact from './models/Contact.js';
import Grievance from './models/Grievance.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection with better error handling
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// CORS Configuration - Production Ready
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:5173'
    ].filter(Boolean);
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Auth routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'TezTecch Buzz API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/api/health',
      subscribe: 'POST /api/subscribe',
      contact: 'POST /api/contact',
      grievance: 'POST /api/grievance',
      auth: '/api/auth/*'
    }
  });
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check if email already exists in database
    const existingSubscriber = await Subscriber.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed to our newsletter'
      });
    }

    // Create new subscriber in MongoDB
    const newSubscriber = new Subscriber({
      name,
      email: email.toLowerCase(),
      status: 'active'
    });

    await newSubscriber.save();

    console.log('✅ New subscriber saved to database:', newSubscriber.email);
    
    // Get total count
    const totalCount = await Subscriber.countDocuments({ status: 'active' });
    console.log(`📊 Total active subscribers: ${totalCount}`);

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing! You will receive our weekly digest.',
      subscriber: {
        name: newSubscriber.name,
        email: newSubscriber.email
      }
    });

  } catch (error) {
    console.error('❌ Subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.'
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, organization, collaborationType, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create new contact submission in MongoDB
    const contactSubmission = new Contact({
      name,
      email: email.toLowerCase(),
      phone,
      organization,
      collaborationType,
      message,
      status: 'pending'
    });

    await contactSubmission.save();

    console.log('✅ New contact submission saved to database:', contactSubmission._id);
    console.log(`📧 From: ${contactSubmission.name} (${contactSubmission.email})`);

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 48 hours.',
      submissionId: contactSubmission._id
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.'
    });
  }
});

// Grievance submission endpoint
app.post('/api/grievance', async (req, res) => {
  try {
    const { name, email, phone, grievanceType, subject, description, attachmentUrl } = req.body;

    // Validation
    if (!name || !email || !grievanceType || !subject || !description) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, grievance type, subject, and description are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Generate unique tracking number
    const trackingNumber = `GRV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Create new grievance in MongoDB
    const grievanceSubmission = new Grievance({
      trackingNumber,
      name,
      email: email.toLowerCase(),
      phone,
      grievanceType,
      subject,
      description,
      attachmentUrl,
      status: 'submitted',
      priority: 'medium'
    });

    await grievanceSubmission.save();

    console.log('✅ New grievance saved to database:', grievanceSubmission._id);
    console.log(`🎫 Tracking Number: ${trackingNumber}`);
    console.log(`📧 From: ${grievanceSubmission.name} (${grievanceSubmission.email})`);

    res.status(201).json({
      success: true,
      message: `Your grievance has been submitted successfully. Tracking Number: ${trackingNumber}. You will receive a confirmation email shortly.`,
      trackingNumber: trackingNumber,
      submissionId: grievanceSubmission._id
    });

  } catch (error) {
    console.error('❌ Grievance submission error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.'
    });
  }
});

// Get all subscribers (for admin purposes)
app.get('/api/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({ status: 'active' })
      .select('-__v')
      .sort({ subscribedAt: -1 });
    
    res.json({
      success: true,
      count: subscribers.length,
      subscribers: subscribers
    });
  } catch (error) {
    console.error('❌ Error fetching subscribers:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching subscribers'
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .select('-__v')
      .sort({ submittedAt: -1 });
    
    res.json({
      success: true,
      count: contacts.length,
      contacts: contacts
    });
  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Get all grievances (for admin purposes)
app.get('/api/grievances', async (req, res) => {
  try {
    const grievances = await Grievance.find()
      .select('-__v')
      .sort({ submittedAt: -1 });
    
    res.json({
      success: true,
      count: grievances.length,
      grievances: grievances
    });
  } catch (error) {
    console.error('❌ Error fetching grievances:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching grievances'
    });
  }
});

// Get grievance by tracking number
app.get('/api/grievance/:trackingNumber', async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    
    const grievance = await Grievance.findOne({ trackingNumber })
      .select('-__v');
    
    if (!grievance) {
      return res.status(404).json({
        success: false,
        message: 'Grievance not found with this tracking number'
      });
    }
    
    res.json({
      success: true,
      grievance: grievance
    });
  } catch (error) {
    console.error('❌ Error fetching grievance:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching grievance'
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path,
    method: req.method
  });
});

// Global Error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  
  // CORS errors
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy: Origin not allowed',
      hint: 'Please contact administrator'
    });
  }
  
  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }
  
  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
  
  // Default error
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('⚠️  SIGTERM received, closing server gracefully...');
  mongoose.connection.close(false, () => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 TezTecch Buzz Backend Server');
  console.log('='.repeat(60));
  console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Server running on port: ${PORT}`);
  console.log(`📍 Base URL: http://localhost:${PORT}`);
  console.log('\n📡 API Endpoints:');
  console.log(`   ├─ Health Check:  GET  /api/health`);
  console.log(`   ├─ Subscribe:     POST /api/subscribe`);
  console.log(`   ├─ Contact:       POST /api/contact`);
  console.log(`   ├─ Grievance:     POST /api/grievance`);
  console.log(`   ├─ Subscribers:   GET  /api/subscribers`);
  console.log(`   └─ Auth Routes:   /api/auth/*`);
  console.log('\n' + '='.repeat(60) + '\n');
});

export default app;
