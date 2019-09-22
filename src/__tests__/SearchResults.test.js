import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './../Components/SearchResults';

describe('SearchResults Component test', () => {

  let div = null;
  beforeAll(() => {
    return div = document.createElement('div');
  });

  it('renders without crashing', () => {
    ReactDOM.render( <SearchResults /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });


  
});
