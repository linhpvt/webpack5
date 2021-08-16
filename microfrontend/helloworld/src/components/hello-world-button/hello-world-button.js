import $ from 'jquery';
import './hello-world-button.scss';
class HelloWorldButton {
  buttonCssClass = 'hello-world-button';

  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add('hello-world-button');
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');
      $('body').append(p);
    };
    $('body').append(button);

    // vanilla js ver
    // const button = document.createElement('button');
    // const body = document.querySelector('body');
    // button.innerHTML = 'Hello world';
    // button.onclick = function () {
    //     const p = document.createElement('p');
    //     p.innerHTML = 'Hello world';
    //     p.classList.add('hello-world-text');
    //     body.appendChild(p);
    // }
    // button.classList.add('hello-world-button');
    // body.appendChild(button);
  }
}

export default HelloWorldButton;
