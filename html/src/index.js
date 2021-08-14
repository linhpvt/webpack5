// import Wiki from './images/wiki.jpeg';
// import BeautifulTree from './images/beautiful-tree.jpg';
// import GenericTechnician from './images/generic_technician.jpg';
// import sayHello from './hello-world';
// import addImage from './add-image';

// import altText from './text/alt-text.txt';
// sayHello();

import Button from './components/button/buttion';
import Heading from './components/heading/heading';
import { generatePromise, asyncFunc } from './components/promises';

document.addEventListener('DOMContentLoaded', async function () {
  const heading = new Heading();
  heading.render();

  const btn = new Button();
  btn.render('Submit');
  const firstSample = await generatePromise(10, 'First sample output');
  console.log(firstSample);

  const secondSample = await asyncFunc(1000, 'Second sample output');
  console.log(secondSample);

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
