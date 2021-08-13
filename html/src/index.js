// import Wiki from './images/wiki.jpeg';
// import BeautifulTree from './images/beautiful-tree.jpg';
// import GenericTechnician from './images/generic_technician.jpg';
// import sayHello from './hello-world';
// import addImage from './add-image';

// import altText from './text/alt-text.txt';
// sayHello();

import Button from './components/button/buttion';

document.addEventListener('DOMContentLoaded', function () {
  const btn = new Button();
  btn.render('Submit');

  /*
  const technicianImg = document.createElement('img');
  technicianImg.alt = altText;
  technicianImg.src = GenericTechnician;
  addImage(technicianImg);

  const wikiImg = document.createElement('img');
  wikiImg.alt = altText;
  wikiImg.src = Wiki;
  addImage(wikiImg);

  const beautifulTreeImg = document.createElement('img');
  beautifulTreeImg.alt = 'Wiki';
  beautifulTreeImg.src = BeautifulTree;
  addImage(beautifulTreeImg);
  */
});
