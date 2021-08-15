import HelloWorldButton from '../../components/hello-world-button/hello-world-button';
import Heading from '../../components/heading/heading';

export default class HelloPage {
  render() {
    const heading = new Heading();
    heading.render();
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  }
}
