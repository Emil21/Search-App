import React, {Component} from 'react';
import Header from './Components/Header';
import SearchResults from './Components/SearchResults';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: []
    }
  }

  updateSearch = (results) => {
    this.setState({ searchResults : results});
  }

  render() {
    return (
      <div>
        <Header updateSearch={this.updateSearch} />
         <SearchResults results={this.state.searchResults}/>
      </div>
     );
  } 
 
}

export default App;
