import React from 'react';
import './SearchBar.css';

const sortByOptions={     // an object with three key/value pairs
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
    constructor (props) {  // makes the SearchBar a stateful component that will initialize the prop
        super(props);   //  this inherits the props being passed to the class/component
        this.state = {  // initialize the state of the this.state object, make it a stateful component
            term: '',  // these are the initial values of our state 
            location: '',
            sortBy: 'best_match',
            latCoords: null,
            longCoords: null,
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch= this.handleSearch.bind(this);
        this.handleGetCurrentPosition = this.handleGetCurrentPosition.bind(this);
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
      if (sortByOption === this.state.sortBy){ // if best_match === best_match this function sets the className of one of the sortByOption elements to the active state, updating its CSS
          return 'active'; 
          }
         
      return '';  
      
    }

    handleSortByChange(sortByOption) {   // function that sets the state of our sort option and changes the sort by state and changes our active options
      this.setState({ sortBy: sortByOption });   //updates the state by calling .setState(), the object sets sortBy to the value of the argument: sortByOption
    }

    handleGetCurrentPosition(){
      this.props.getCurrentPosition({latCoords: this.state.latCoords});
    }

    renderGetCurrentPosition(){
        
        if (this.state.latcoords){
        console.log(this.state.latcoords)
        } else {
          console.log('No latcoords!')
        };
       return <p>You are here:
              Latitude: {this.state.latCoords}
              Longitude: {this.state.latCoords}</p>
    }

    renderSortByOptions() {   // this method dynamically creates the list of sort by options (right now retrieved from the sortByOption array above, later to be pulled from Yelp API)
       return Object.keys(sortByOptions).map(sortByOption => {   // To iterate through the object, you’ll need to start by accessing the keys of the sortByOptionsobject. Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument. iterate over the keys and values of the sortByOption object and return a list item. The list item elements should use the keys as an attribute, and the values as content. .map takes a call back function as an object(sortByOption) returns an array of each element
            let sortByOptionValue = sortByOptions[sortByOption]; // storing the key property values accessed though the .map method. store the object values in a variable. Inside of the callback function, access the sortByOptions values using the sortByOption parameter of the callback function. Store values in variable called sortByOptionValue.
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} > {sortByOption} </li> // return a <li> element. Add a className attribute to the <li> element. Set it equal to the return value of the getSortByClass() method. Pass in sortByOptionValue as the argument. This will conditionally style each sort by option, displaying to the user which sorting option is currently selected. The list item should have an attribute called key set to sortByOptionValue (don’t forget to use curly braces to inject JavaScript). The content of the list item should be sortByOption. Again, use curly braces to achieve the JavaScript injection.
       });                                                                                            
    }

    render() {  
      return (
          <div className="SearchBar">
            <div className="SearchBar-my-position">
              {this.renderGetCurrentPosition()}
            </div>
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
              <a href="#.com" onClick={this.handleSearch}>Find it!</a>
            </div>
          </div>
        )
    }
}

export default SearchBar;