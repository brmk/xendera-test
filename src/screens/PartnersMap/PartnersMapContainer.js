import React, { Component } from 'react';
import PartnersMap from './PartnersMap';
import { PSEUDO_USER_LOCATION } from 'app/constants/globals';
import markers from 'app/constants/markers';

class PartnersMapContainer extends Component {
  render() {
    return (
      <PartnersMap 
        userLocation={PSEUDO_USER_LOCATION} 
        markers={markers}
        {...this.props}
      />
    );
  }
}

export default PartnersMapContainer;
