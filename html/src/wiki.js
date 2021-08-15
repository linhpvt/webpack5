import Image from './components/image/image';
import Heading from './components/heading/heading';
import { upperFirst } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

const heading = new Heading();
heading.render(upperFirst('wiki'));

const image = new Image();
image.render();

ReactDOM.render(
  <span>This Span rendered by ReactDOM</span>,
  document.getElementById('react-root'),
);
