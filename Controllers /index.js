// index.js
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const User = require('./models/User');
const Plan = require('./models/Plan');
const plannerRoutes = require('./Controllers/plannerpage');
const withAuth = require('./utils/auth');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up session store
const sess = {
  // this one will change it to more secur password and stuff
  secret: 'super secret', 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// setting up the router

app.use('/', plannerpage);


// start listing to the serverr
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
