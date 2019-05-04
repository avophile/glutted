import React from 'react';  // import the react library
import './BusinessList.css';
import Business from '../Business/Business.js';  //<BusinessList /> will make use of the <Business /> component repeatedly. To use the <Business /> component import it. 

class BusinessList extends React.Component {
    constructor (props) {  // makes the BusinessList a stateful component that will initialize the prop
      super(props);
      this.state = {};
    }

    render() {
       return (
        <div className="BusinessList">
          {
            this.props.businesses.map(business => {
                    return <Business key={business.id} business={business} />
                }
              )
          }
        </div>
        );
    }
}

export default BusinessList;  // This list component will need to be rendered again by another component, so export it. 