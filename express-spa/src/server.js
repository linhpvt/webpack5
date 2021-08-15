const express = require('express');
const spa = new express();
const PORT = 3000;
const ROUTES = {
  Home: '/',
};
spa.get(ROUTES.Home, async (req, res) => {
  res.send('Hello world !');
});

spa.listen(PORT, () =>
  console.log(`Sever started at http://localhost:${PORT}`),
);
