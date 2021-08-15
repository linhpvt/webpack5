import Image from './components/image/image';
import Heading from './components/heading/heading';
import { upperFirst } from 'lodash';

const heading = new Heading();
heading.render(upperFirst('wiki'));

const image = new Image();
image.render();
