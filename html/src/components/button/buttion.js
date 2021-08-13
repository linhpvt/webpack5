import './button.css';

export default class Button {
  render(btnText) {
    const btn = document.createElement('button');
    btn.innerText = btnText;
    btn.classList = 'btn-base';
    document.body.append(btn);

    btn.addEventListener('click', (evt) => {
      const p = document.createElement('p');
      p.innerText = `Paragraph: ${Date.now()}`;
      p.classList = 'p-base';
      document.body.append(p);
    });
  }
}
