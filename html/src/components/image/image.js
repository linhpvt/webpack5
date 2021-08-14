import Wiki from '../../images/wiki.jpeg';
import './image.scss';
export default class Image {
  render() {
    const img = document.createElement('img');
    img.src = Wiki;
    img.alt = 'Wiki';
    img.classList = 'wiki-img';
    document.body.append(img);
  }
}
