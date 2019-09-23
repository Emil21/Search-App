import React from 'react';
import { throttle } from 'throttle-debounce'; 
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", suggestions: [], showDropdown : false };
    this.autocompleteSearchThrottled = throttle(1000, this.autocompleteSearch);
  }

  changeQuery = event => {
    const showDropdown = event.target.value !== '' ? true : false;
    this.setState({ query: event.target.value, showDropdown }, () => {
      this.autocompleteSearchThrottled(this.state.query);
    });
  };

  autocompleteSearch = q => {
    this.fetchData(q);
  };

  countrySelected = (evt) => {
    const selected = evt.target.dataset.id;
    const { updateSearch } = this.props;
    this.setState({ suggestions: [], query: selected, showDropdown: false });
    const searchResults = [];
    let urls = [
      "http://localhost:3001/getdata?search=" + selected ,
      "http://localhost:3001/getDuckResults?search=" + selected ,
    ];
    
    let requests = urls.map(url => fetch(url));
    
    Promise.all(requests)
      // map array of responses into array of response.json() to read their content
      .then(responses => Promise.all(responses.map(r => r.json())))
      // all JSON answers are parsed: "searchResults" is the array of them
      .then(data => { data.forEach(d => searchResults.push(...d.result)   )
 
      updateSearch(searchResults) } );

  }

  showDropdown = () => {
    const { suggestions, showDropdown } = this.state;
    if(suggestions.length <1 && showDropdown)
    suggestions.push("Sorry, no results found. Please try another country name");
    return(
      <div className="dropdown">
      {suggestions.map( (item, index) => {
          return(
            <div key={item}  className="names" onClick={this.countrySelected} data-id={item}>{item}</div>                 
          )
      } ) }
      </div>
    );
  }

  fetchData = q => {
    const { updateSearch } = this.props;
    const parent = this;
    const url = "http://localhost:3001/typeahead?search=" + q ;
    fetch(url)
      .then( (result) => {
        result.json().then (function (data) {
          parent.setState({ suggestions: data.countries,  })
        });
      }

      )
      .catch( (err) => {
        updateSearch(err);
      }

      );
    
  };

  render() {
    const {query, suggestions, showDropdown} = this.state;
    return (
      <div className="holder">
        <input
          className="inputBox"
          name="search"
          placeholder="Search for country names" 
          type="text"
          value={query}
          onChange={this.changeQuery}
        />
        {showDropdown ? this.showDropdown() : null }
      </div>
    );
  }
}

export default SearchBar;
