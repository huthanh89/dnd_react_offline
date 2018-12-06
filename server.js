//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path          = require('path');
const express       = require('express');
const compression   = require('compression')
const app           = express();
const config        = require('./server/config.js');
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config');

//-----------------------------------------------------------------------------//
// Configure App
//-----------------------------------------------------------------------------//

// Tell express to look for views in the following directory.

app.set("views", path.join(__dirname, "dist"));

// Set view engine to be interpret as html.

app.set('view engine', 'html');

// Use compression to GZip files size.

app.use(compression());

//-----------------------------------------------------------------------------//
// Handle routes.
//-----------------------------------------------------------------------------//

const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

//-----------------------------------------------------------------------------//
// Handle routes.
//-----------------------------------------------------------------------------//

let urls = [
    '/',
    '/instruction',
    '/inventory',
    '/workspace'
]

urls.forEach(function(url){
    app.use(`${url}`,  express.static(__dirname + '/dist'));
    app.get(`${url}`, function(req, res){
        res.render('index.html');
    });
});

//-----------------------------------------------------------------------------//
// Start Application
//
// Listen app on the following port.
//-----------------------------------------------------------------------------//

app.listen(config.port, () => console.log(`App listening on port ${config.port}`))

//-----------------------------------------------------------------------------//
