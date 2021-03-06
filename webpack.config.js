//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path    = require('path');
const webpack = require('webpack');

//-----------------------------------------------------------------------------//

module.exports = {

  mode: 'development', 

  entry: {
    bundle: path.resolve(__dirname, 'src/js/index.js')
  },

  output: {
    publicPath: 'js',
    path:        path.resolve(__dirname, 'dist/js'),
    filename:   '[name].js'
  },

  devtool: 'inline-source-map',

  // Options for webpack dev server for hot module reloading.

  devServer: {
    open:         true,
    hot:          true,
    inline:       true,
    contentBase: './dist'
  },

  performance: { 
    hints: false 
  },
  
  resolve: {

    // Import modules without using the following extensions.

    extensions: ['.js', '.ts', '.tsx', '.jsx'],

    // Resolve directories to look at when importing modules.

    modules: [
      'node_modules', 
      './src/js'
    ]
  },

  module: {
    rules: [
      
      // Lint javascript files.

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          quiet: false
        }
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      
      {
        test: /\.pug?$/,
        use: 'pug-loader',
        exclude: /node_modules/
      },

      // Compile Less to CSS

      {
        test: /\.less?$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, 
          {
            loader: 'css-loader' // translates CSS into CommonJS
          }, 
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },

      {
        // When encountering .css files, use css-loader to interpret the file,
        // and style-loader to place the css into the <style> tag.

        test: /.css?$/,
        use: [
          'css-hot-loader',
          'css-loader'
        ]
      },

/*
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
            {
                loader: 'tslint-loader',
                options: { }
            }
        ]
      },
*/

      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react'
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
