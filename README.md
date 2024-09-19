# WebsiteCode

## Static Website Deployment using Node.js and Webpack

This project demonstrates how to bundle static assets (HTML, CSS) using Webpack and serve them using a Node.js server with Express. This setup aims to implement a basic continuous integration (CI) and continuous deployment (CD) pipeline using Azure DevOps.

## Project Structure
```my_project/
├── src/
│   ├── index.html
├── public/
│   ├── style.css
├── dist/
│   └── (Webpack output will go here)
├── package.json
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
2. This command will create a package.json file automatically.
   ```bash
   npm init --y 
4. Installing Express
   ```bash
   npm i express 
5. Install Necessary Webpack Dependencies
   ```bash
   npm i html-webpack-plugin css-loader html-loader style-loader 

9. Create a webpack.config.js file and write this code
    ```bash
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
1. To generate the bundled files in the dist/ folder.
   ```bash
   npm run build

2. The application will be available at http://localhost:****.
   ```bash
    npm start or node server (name of the JS file created at the beginning) 
