const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set up Handlebars view engine
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files serving
app.use(express.static('public'));

// Set up body-parser middleware for form data parsing
app.use(bodyParser.urlencoded({ extended: true }));

// GET route for the landing page
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Landing Page' });
});

// GET route to render the login form
app.get('/login', (req, res) => {
    res.render('login', { pageTitle: 'Login Page' });
});

// POST route to handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'er@yahoo.com' && password === 'pw') {
        res.redirect('/success');
    } else {
        res.redirect('/failure');
    }
});

// GET routes for success and failure pages
app.get('/success', (req, res) => {
    res.render('success', { pageTitle: 'Login Successful' });
});

app.get('/failure', (req, res) => {
    res.render('failure', { pageTitle: 'Login Failed' });
});

app.get('/profile', (req, res) => {
    res.render('profile', { pageTitle: 'My Profile' });
});

app.get('/settings', (req, res) => {
    res.render('settings', { pageTitle: 'Account Settings' });
});

app.get('/upload', (req, res) => {
    res.render('upload', { pageTitle: 'Upload Photo' });
});

app.get('/progress', (req, res) => {
    res.render('progress', { pageTitle: 'Progress Dashboard' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
