import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './../Components/Logo';

describe('Logo Component test', () => {

  let div = null;
  beforeAll(() => {
    return div = document.createElement('div');
  });

  it('renders without crashing', () => {
    ReactDOM.render( <Logo /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
