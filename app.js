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
