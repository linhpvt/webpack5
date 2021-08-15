import Heading from './components/heading/heading';
import { upperFirst } from 'lodash';
const heading = new Heading();
heading.render(upperFirst('Hello world'));
