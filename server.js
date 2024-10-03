const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  // Import jwt
require('dotenv').config();  // To use environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using environment variables for sensitive information
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'shivam@17',
    database: process.env.DB_NAME || 'travel_app'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

// Registration Route
app.post('/register', async (req, res) => {
    const { name, email, password, age, gender, address } = req.body;

    // Validation
    if (!name || !email || !password || !age || !gender || !address) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check if user exists
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                return res.status(400).json({ message: 'Email already in use. Please enter another email.' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert user into database
            db.query('INSERT INTO users (name, email, password, age, gender, address) VALUES (?, ?, ?, ?, ?, ?)',
                [name, email, hashedPassword, age, gender, address], (err) => {
                    if (err) throw err;
                    res.status(201).json({ message: 'User registered successfully.' });
                });
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Check if user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const user = results[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    });
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, mobile, gender, age, address } = req.body;
    const sql = 'INSERT INTO contacts (name, email, mobile, gender, age, address) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [name, email, mobile, gender, age, address];

    db.query(sql, values, (err) => {
        if (err) {
            return res.status(500).send({ message: 'Failed to submit form' });
        }
        res.send({ message: 'Form submitted successfully!' });
    });
});

// API endpoint for handling payments
app.post('/api/payment', (req, res) => {
    const { name, amount, cardNumber, expiry, cvv } = req.body;

    // Validation
    if (!name || !amount || !cardNumber || !expiry || !cvv) {
        return res.status(400).send('All fields are required');
    }

    const query = 'INSERT INTO payments (name, amount, cardNumber, expiry, cvv) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, amount, cardNumber, expiry, cvv], (err) => {
        if (err) {
            console.log('Error inserting data into database:', err);
            return res.status(500).send('Server error');
        }
        res.status(200).send('Payment received and recorded successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
