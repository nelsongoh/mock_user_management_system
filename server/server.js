// Packages
const { v4: uuidv4 } = require('uuid');
// Helmet is a package used to help secure Express applications by setting various HTTP headers
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const config = require('../webpack');

// Check what ports have been set for the current environment variable
// Else, use the default port of 8080 (for Dev) or 80 (for Production)
const port = process.env.PORT || 8080;

// Create the Express app
const app = express();

// Setting up the Express app to utilise a body parser to read from HTTP bodies
app.use(bodyParser.json());

// Importing the backend routes
const routes = require('./routes');

// Using the routes
app.use('/', routes);

// Defining the Content Security Policy directives
const cspDirectives = {
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: [
      "'self'",
      (req, res) => `'nonce-${res.locals.styleNonce}'`,
      'https://fonts.googleapis.com',
    ],
    imgSrc: ["'self'", (req, res) => `'nonce-${res.locals.styleNonce}'`],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    scriptSrc: [
      "'self'",
      'https://www.gstatic.com/firebasejs/',
    ],
    connectSrc: ["'self'", 'https://www.googleapis.com'],
  },
};

const compiler = webpack(config);

// We use the configuration for webpack
// via the webpack dev middleware so that we can use our custom
// Express server configuration (i.e. server.js) alongside it
app.use(require('webpack-dev-middleware')(compiler, {
  /* Any other webpack middleware options */
  // publicPath: devConfig.output.publicPath
}));

// This line generates a nonce for use in Material UI's JSS in CSS
app.use((req, res, next) => {
  res.locals.styleNonce = Buffer.from(uuidv4()).toString('base64');
  next();
});

// This line sets the CSP for the Express application
app.use(
  helmet.contentSecurityPolicy(cspDirectives),
);

// Enable Express to utilize the Pug templating engine
app.set('views', './server/views');
app.set('view engine', 'pug');

// This line tells Express to use the /dist directory when fulfilling requests
// for static assets, like our bundle.js
app.use(express.static(path.resolve(__dirname, './dist/')));

// This line renders the HTML file with the styleNonce variable
app.get('/*', (req, res) => {
  res.render('index', {
    styleNonce: res.locals.styleNonce,
  });
});

// Error handler for other requests
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  next();
});

// Serve the app on a port
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Listening at port: ${port}`);
});
