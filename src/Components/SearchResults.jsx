import React, {Component} from 'react';
import './SearchResults.css';
import  google from './../assets/google.png';
import  duck from './../assets/duck.svg';

class SearchResults extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }   

    renderResults = () => {
        return(
            <div className="results">
                { this.state.data.map( (item) => {
                    const iconType = item.type === 'google' ? google : duck;
                    return(
                        <div className="links" key={item.link} width="700px">
                            <img src={iconType} alt="icon" className="icon" height="25px" width="25px"  />
                            <a href={item.link} width="500px">
                                {item.title.slice(0,100)}
                            </a>
                        </div>
                    );
                } ) }
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.results !== prevProps.results) {
            this.setState({ data: this.props.results })         
        }
      }

    render() {
        const { data } = this.state;
        return(
            <div className="resultOuterDiv">
                { data.length > 0 ? this.renderResults() : null }
            </div>
        );
    }
}

export default SearchResults;