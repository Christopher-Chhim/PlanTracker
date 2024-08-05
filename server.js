const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
<<<<<<< HEAD
const helpers = require('./utils/helpers');

=======
>>>>>>> main
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
=======
const PORT = process.env.PORT || 3000;

const sess = {
  secret: process.env.SECRET,
  cookie: {},
>>>>>>> main
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

<<<<<<< HEAD
// Inform Express.js on which template engine to use
=======
const hbs = exphbs.create({});

>>>>>>> main
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

<<<<<<< HEAD
sequelize.sync({ force: false }).then(() => {
=======
sequelize.sync({ force: true }).then(() => {
>>>>>>> main
  app.listen(PORT, () => console.log('Now listening'));
});
