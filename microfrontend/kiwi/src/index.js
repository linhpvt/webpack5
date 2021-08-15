import KiwiImage from './components/kiwi-image/kiwi-image';

const img = new KiwiImage();
img.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
