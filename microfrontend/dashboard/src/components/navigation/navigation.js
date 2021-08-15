export default class Navigation {
  render(items) {
    const lis = (items || []).map((item) => {
      return `
      <li><a href="${item.url}">${item.title}</a></li>
      `;
    });
    const ul = document.createElement('ul');
    ul.innerHTML = lis.join('');
    ul.classList = 'navigation-bar';
    document.body.append(ul);
  }
}
