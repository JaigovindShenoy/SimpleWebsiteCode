// Below is the Updated code after creating the node_modules and dist file
// Dist folder now contains the compressed index.html file with all necessary packages so we have only to run that file

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// Below is the Code before building the DIST folder

//const express = require('express');
// const app = express();
// const port = 3000;  //port used to run the webapp

// const path = require('path');

// // the URL: localhost:3000/Website

// app.use('/Website', express.static(path.join(__dirname, 'code')));

// app.use(function(req, res) {
//     res.status(400);
//     return res.send('404 Error: Resource not found');
//   });

// app.listen(port, () => {
//   console.log(`App listening  on port ${port}`);
// })
