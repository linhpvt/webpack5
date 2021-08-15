import './heading.scss';
export default class Heading {
  render(pageName) {
    const h1 = document.createElement('h1');
    h1.innerHTML = `Webpack is awsome. Page ${pageName}`;
    h1.classList.add('heading-gray');
    document.body.append(h1);
  }
}
