const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Custom helpers
const hbs = create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views'),
  helpers: {
    extend: function (name, context) {
      if (!this._sections) this._sections = {};
      this._sections[name] = context.fn(this);
      return null;
    },
    section: function (name) {
      return this._sections && this._sections[name];
    }
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/views/login.handlebars', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/views/signup.handlebars', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

app.get('/views/home.handlebars', (req, res) => {
  res.render('home', {
    title: 'home',
    user: { username: 'JohnDoe' },
    tasks: [
      { id: 1, name: 'Task 1', description: 'Description 1' },
      { id: 2, name: 'Task 2', description: 'Description 2' }
    ],
    quote: 'This is a random quote',
    weather: 'Sunny, 25°C'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
