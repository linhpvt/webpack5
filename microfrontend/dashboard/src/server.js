/*
  SIMPLE EXPRESS SERVER
*/
const express = require('express');
const spa = new express();
const path = require('path');
const fs = require('fs');
const PORT = 9002;
const ROUTES = {
  Home: '/',
};

console.log(path.resolve(__dirname, '../dist'));

// Tell express server how to serve static resources such as images, css, js, ect.
spa.use(ROUTES.Home, express.static(path.resolve(__dirname, '../dist')));

// all pages
spa.get('*', async (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');

  // read content
  const contentHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(contentHtmlFile);
});

spa.listen(PORT, () =>
  console.log(`Sever started at http://localhost:${PORT}`),
);
