const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5500;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'your_file_name.html'));
});

// Handle form submission
app.post('/route_frontend', (req, res) => {
    const { user_email } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sender_email', 
            pass: 'sender_password' 
        }
    });

    const mailOptions = {
        from: 'sender_email', 
        to: user_email,
        subject: 'Thanks for Enquiry',
        text: 'Hello, How can we help you?',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.send('<script>alert("Email Sent Successfully!");</script>');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
