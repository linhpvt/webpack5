/*
  SIMPLE EXPRESS SERVER
*/
const express = require('express');
const spa = new express();
const path = require('path');
const fs = require('fs');
const PORT = 9001;
const ROUTES = {
  Home: '/hello-world',
};

console.log(path.resolve(__dirname, '../dist'));

// Tell express server how to serve static resources such as images, css, js, ect.
spa.use('/static', express.static(path.resolve(__dirname, '../dist')));

// home page
spa.get(ROUTES.Home, async (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');

  // read content
  const contentHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(contentHtmlFile);
});

spa.listen(PORT, () =>
  console.log(`Sever started at http://localhost:${PORT}`),
);
