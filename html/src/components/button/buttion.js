import './button.scss';

export default class Button {
  // ES6 feature
  btnCssClass = 'btn-base';
  pCssClass = 'p-base';

  render(btnText) {
    const btn = document.createElement('button');
    btn.innerText = btnText;

    // ES6 feature
    btn.classList = `${this.btnCssClass}`;
    document.body.append(btn);

    btn.addEventListener('click', (evt) => {
      const p = document.createElement('p');
      p.innerText = `Paragraph: ${Date.now()}`;
      // ES6 feature
      p.classList = `${this.pCssClass}`;
      document.body.append(p);
    });
  }
}
