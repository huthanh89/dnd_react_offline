//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path    = require('path');
const webpack = require('webpack');

//-----------------------------------------------------------------------------//

module.exports = {

  entry: [
    './src/js/index.js'
  ],

  // TODO: Move this to gulp file using development flag.
  mode:    'development', 
  devtool: 'inline-source-map',

  // Tell webpack dev server where to serve files from.

  devServer: {
    hot:          true,
    inline:       true,
    contentBase: './dist'
  },

  performance: { 
    hints: false 
  },

  output: {
    path:      path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },

  // Resolve directories to look at when importing modules.

  resolve: {
    modules: [
      'node_modules', 
      './src/js'
    ]
  },

  module: {
    rules: [

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      
      {
        test: /\.pug?$/,
        use: 'pug-loader',
        exclude: /node_modules/
      },

      {
        // When encountering .css files, use css-loader to interpret the file,
        // and style-loader to place the css into the <style> tag.

        test: /.css?$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },

      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            '@babel/preset-typescript',
            '@babel/preset-flow'
          ],
          plugins: [
            '@babel/plugin-syntax-flow'
          ]
        }
      }
    ]
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};

//-----------------------------------------------------------------------------//
