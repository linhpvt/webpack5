import KiwiImage from '../../components/kiwi-image/kiwi-image';

// load dymamically
// import('HelloWorldApp/HelloWorldButton').then((result) => {
//   const Button = result.default;
//   const btn = new Button();
//   btn.render();
// });

export default class KiwiPage {
  render() {
    const img = new KiwiImage();
    img.render();
  }
}
