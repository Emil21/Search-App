import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';



describe('Apps page test', () => {

  let div = null;
  beforeAll(() => {
    return div = document.createElement('div');
  });

  it('renders without crashing', () => {
    ReactDOM.render( <App /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
