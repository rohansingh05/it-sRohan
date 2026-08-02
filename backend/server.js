const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',               // Local Vite dev server
  'http://localhost:3000',               // Local React dev server
  'https://its-rohan-singh.netlify.app'  // Live Netlify URL (NO trailing slash!)
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, cURL, or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// 1. Enable CORS for ALL routes
app.use(cors(corsOptions));

// 2. Parse JSON bodies
app.use(express.json());

// Root health-check endpoint (Prevents 404 on base Render URL)
app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Backend API is running!' });
});

// Transporter setup for email using Port 587 (Explicit SMTP with STARTTLS)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  connectionTimeout: 10000, // 10s connection timeout for cloud hosts
  greetingTimeout: 5000,
  socketTimeout: 10000
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // MUST be your authenticated Gmail!
      to: 'rohan03cse@gmail.com',                               // Destination inbox
      replyTo: email,                                          // Replying goes to the visitor
      subject: `New Contact Request from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Mail error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));