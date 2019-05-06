import React from 'react';
import './Position.css';

class Position extends React.Component {
    constructor (props){
        super(props); 
        this.state = {
          latCoords: null,
          longCoords: null,
        };
       //this.getCurrentPosition = this.getCurrentPosition.bind(this);
      }
    
      componentWillMount(){
        navigator.geolocation.getCurrentPosition(position => {
              this.setState({
                latCoords: position.coords.latitude, 
                longCoords: position.coords.longitude
                });
             }, err => console.log(err));
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

    render() {  
      return (
          <div className="Position">
            <div className="My-position">
              {this.renderGetCurrentPosition()}
            </div>
          </div>
        )
    }
}

export default Position;