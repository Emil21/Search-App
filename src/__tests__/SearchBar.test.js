import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './../Components/SearchBar';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('SearchBar Componenet test', () => {

  let div = null;
  beforeAll(() => {
    return div = document.createElement('div');
  });

  it('renders without crashing', () => {
    ReactDOM.render( <SearchBar /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders search input textbox', () => {
    const wrapper = shallow(<SearchBar  />);
    const inputBox = wrapper.find('input[name="search"]');
    expect(inputBox.html()).toBe('<input type="text" class="inputBox" name="search" placeholder="Search" value=""/>');
  });

  it('Input search text change handler', () => {
        const value = 'German';
        const event = { target: { value } };
        const wrapper = shallow(<SearchBar />);
        wrapper.find('input[name="search"]').simulate('change', event);
        expect(wrapper.state().query).toBe(value);
  }); 

});
