import React from 'react';  // import the react library
import './Business.css';

class Business extends React.Component {  // create a React component called Business. business.property references a property in the business object
  render() {                                    // most components have a method to render JSX, the render function does not change any states, always renders JSX the same way
     const { business } = this.props;
     return (
      <div className="Business">
      <div className="image-container">
       <img src={business.imageSrc} alt=''/>
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
       <div className="Business-address">
         <p>{business.address}</p>    
         <p>{business.city}</p>
         <p>{business.state} {business.zipCode}</p>
       </div>
       <div className="Business-reviews">
         <h3>{business.category}</h3>
         <h3 className="rating">{business.rating} stars</h3>
         <p>{business.reviewCount} reviews</p>
       </div>
      </div>
      </div>
   );
  }
}

export default Business;  // makes the business component available to the rest of the Ravenous app