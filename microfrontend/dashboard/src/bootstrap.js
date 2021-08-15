import Navigation from './components/navigation/navigation';
import Button from 'HelloWorldApp/HelloWorldButton';

// load dymamically
// import('HelloWorldApp/HelloWorldButton').then((result) => {
//   const Button = result.default;
//   const btn = new Button();
//   btn.render();
// });

const img = new KiwiImage();
img.render();

const btn = new Button();
btn.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
