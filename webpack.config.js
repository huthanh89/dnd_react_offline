//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path    = require('path');
const webpack = require('webpack');

//-----------------------------------------------------------------------------//

module.exports = {

  mode:    'development', 

  entry: {
    bundle: path.resolve(__dirname, 'src/js/index.js')
  },

  output: {
    publicPath: 'js',
    path:        path.resolve(__dirname, 'dist/js'),
    filename:   '[name].js'
  },

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
  
  resolve: {
    
    // Import modules without explicitly writing their extension.

    extensions: [ '.tsx', '.ts', '.js' ],
    
    // Resolve directories to look at when importing modules.

    modules: [
      'node_modules', 
      './src/js'
    ]
  },

  module: {
    rules: [
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          quiet: true
        }
      },

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

      // compiles Less to CSS

      {
        test: /\.less?$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
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

      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            '@babel/preset-typescript',
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
