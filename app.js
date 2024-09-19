const express = require('express');
const app = express();
const port = 3000;  //port used to run the webapp

const path = require('path');

// the URL: localhost:3000/Website

app.use('/Website', express.static(path.join(__dirname, 'code')));

app.use(function(req, res) {
    res.status(400);
    return res.send('404 Error: Resource not found');
  });

app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
})
