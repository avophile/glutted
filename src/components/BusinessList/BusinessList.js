import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

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

export default BusinessList;