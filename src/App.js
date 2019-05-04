import React, { Component } from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from '../src/util/Yelp.js';

class App extends Component {
  constructor (props){
    super(props); 
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then(businesses=>{
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
    <div className="App">
      <h1>glutted</h1>
        {<SearchBar searchYelp={this.searchYelp}/>}
        {<BusinessList businesses={this.state.businesses}/>} 
    </div>)   
    }   
}

export default App;
