import React from 'react';
import './SearchBar.css';

const sortByOptions={
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
    constructor (props) {  // makes the SearchBar a stateful component that will initialize the prop
        super(props);   //  this inherits the props being passed to the class/component
        this.state = {  // initialize the stateful component as the this.state object
            term: '',  // these are the initial values of our state 
            location: '',
            sortBy: 'best_match',
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch= this.handleSearch.bind(this);
      }

    handleSearch(event){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      event.preventDefault();   // stops native functionality of anchor tag reloading
    }

    handleTermChange(event){
        this.setState({term: event.target.value})  // grabs value of input event HTML with a value
    }

    handleLocationChange(event){
        this.setState({location: event.target.value})
    }

    getSortByClass(sortByOption) { 
      if (sortByOption === this.state.sortBy){ // if best_match === best_match this function sets the className of one of the sortByOption elements to the active state
          return 'active'; 
          }
         
      return '';  
      
    }

    handleSortByChange(sortByOption) {   // function that set the active class of our sort option and changes the sort by state and changes our active options
      this.setState({ sortBy: sortByOption });   //sortBy : sortByOption
    }

    renderSortByOptions() {   // this dynamically creates the list of sort by options (right now retrieved from the sortByOption array above, later to be pulled from Yelp API)
       return Object.keys(sortByOptions).map(sortByOption => {   // iterate over the keys of the sortByOption object. .map takes a call back function as an object(sortByOption) returns an array of each element
            let sortByOptionValue = sortByOptions[sortByOption]; // storing the key property values accesed though the .map method
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} > {sortByOption} </li>
       });                                                                                            
    }

    render() {  
      return (
          <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses"  onChange={this.handleTermChange} />
              <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
              <a href="#.com" onClick={this.handleSearch}>Let's Go</a>
            </div>
          </div>
        )
    }
}

export default SearchBar;