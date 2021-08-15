import Navigation from './components/navigation/navigation';
import HelloPage from 'HelloWorldApp/HelloPage';

// load dymamically
// import('HelloWorldApp/HelloPage').then((result) => {
//   console.log(result.default);
// });
const navi = new Navigation();
console.log('NVVVV', navi);
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

const helloPage = new HelloPage();
helloPage.render();
