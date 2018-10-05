import React, { Component } from 'react';
import PartnersMap from './PartnersMap';
import { PSEUDO_USER_LOCATION } from 'app/constants/globals';

class PartnersMapContainer extends Component {
  state = {}

  render() {
    return (
      <PartnersMap userLocation={PSEUDO_USER_LOCATION} {...this.props}/>
    );
  }
}

export default PartnersMapContainer;
