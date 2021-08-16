import Navigation from './components/navigation/navigation';
import HelloPage from 'HelloWorldApp/HelloPage';
import KiwiPage from 'KiwiApp/KiwiPage';

// load dymamically
// import('HelloWorldApp/HelloPage').then((result) => {
//   console.log(result.default);
// });

// IIFE function
(() => {
  const navi = new Navigation();
  const naviItems = [
    {
      url: '/hello-world',
      title: 'Hello world',
    },
    {
      url: '/wiki',
      title: 'Wiki',
    },
  ];
  navi.render(naviItems);
})();

const renderHellPage = () => {
  const helloPage = new HelloPage();
  helloPage.render();
};

const renderKiwiPage = () => {
  // kiwi
  const kiwi = new KiwiPage();
  kiwi.render();
};

// render content of pages accordingly
const pathname = (window.location.pathname || '/').toLowerCase();
switch (pathname) {
  case '/wiki':
    renderKiwiPage();
    break;
  case '/hello-world':
    renderHellPage();
    break;
  default:
    document.body.append('Home Page');
}
