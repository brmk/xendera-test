import React, { Component } from 'react';
import PartnersMap from './PartnersMap';

class PartnersMapContainer extends Component {
  state = {}
  render() {
    return (
      <PartnersMap {...this.props}/>
    );
  }
}

export default PartnersMapContainer;
