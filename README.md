# WebsiteCode

## Static Website Deployment using Node.js and Webpack

This project demonstrates how to bundle static assets (HTML, CSS) using Webpack and serve them using a Node.js server with Express. The purpose of this setup is to implement a basic continuous integration (CI) and continuous deployment (CD) pipeline using Azure DevOps.

## Project Structure
my_project/ 
├── src/ │ 
  ├── index.html 
├── public/ │ 
  ├── style.css 
├── dist/ 
  │ └── (Webpack output will go here) 
├── webpack.config.js 
└── server.js


- **`src/`**: Contains the `index.html` file for the website.
- **`public/`**: Contains the `style.css` file for the website.
- **`dist/`**: The folder where Webpack will output the bundled assets (HTML and CSS).
- **`webpack.config.js`**: Webpack configuration file for bundling HTML and CSS.
- **`server.js`**: A Node.js server using Express to serve the bundled files.

## Getting Started

### Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/) (version 14.x or higher).
- **npm**: Node package manager comes with Node.js. You’ll use npm to install dependencies.

### Steps to Set Up

1. **Navigate to Your Project Folder**:
   ```bash
   cd C:/path/to/project/folder
2. npm init --y:  This command will create a package.json file automatically.
3. npm i express: Installing Express
4. npm i html-webpack-plugin css-loader html-loader style-loader : install Necessary Webpack Dependencies

5. Create a webpack.config.js file and write this code
   const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./public/index.html', './src/assets/css/style.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
  ],
  target: 'web',
  mode: 'development', 
};

Running the Project
1. npm run build : This will generate the bundled files in the dist/ folder.
2. npm start or node app (name of the js file created at the beginning) : The application will be available at http://localhost:****.


   

