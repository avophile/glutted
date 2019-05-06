import React, { Component } from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Position from '../src/components/Position/Position';
import Yelp from '../src/util/Yelp.js';

class App extends Component {
  constructor (props){
    super(props); 
    this.state = {
      businesses: [],
      latCoords: null,
      longCoords: null,
    };
    this.searchYelp = this.searchYelp.bind(this);
   //this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(position => {
          this.setState({
          latCoords: position.coords.latitude, 
          longCoords: position.coords.longitude
          });
    }, err => console.log(err)
    );
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
      <div >
        <h2>Current Position:</h2>
          <p>Latitude: {this.state.latCoords}</p>
          <p>Longitude: {this.state.longCoords}</p>
      </div>
        {<Position getCurrentPosition={this.latCoords}/>}
        {<SearchBar searchYelp={this.searchYelp}/>}
        {<BusinessList businesses={this.state.businesses}/>} 
    </div>)   
    }   
}

export default App;
