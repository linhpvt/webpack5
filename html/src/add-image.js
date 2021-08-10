import Wiki from './images/wiki.jpeg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Wiki';
  img.src = Wiki;
  // img.width = 300;
  document.body.append(img);
  // console.log('run addImage');
}
export default addImage;
