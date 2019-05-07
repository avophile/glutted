import React from 'react';
import './Position.css';

class Position extends React.Component {
    constructor (props){
        super(props); 
        this.state = {
          latCoords: null,
          longCoords: null,
        };
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
       return <div >
       <h2>Current Position:</h2>
         <p>Latitude: {this.state.latCoords}</p>
         <p>Longitude: {this.state.longCoords}</p>
     </div>
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