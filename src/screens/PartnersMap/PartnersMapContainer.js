import React, { Component } from 'react';
import PartnersMap from './PartnersMap';
import { PSEUDO_USER_LOCATION } from 'app/constants/globals';
import markers from 'app/constants/markers';
import FastImage from 'react-native-fast-image';

class PartnersMapContainer extends Component {
  state = { ready: false }

  async componentDidMount(){
    // await FastImage.preload(markers.map(({image})=>({uri:image})));
    // this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;

    return (
      <PartnersMap 
        userLocation={PSEUDO_USER_LOCATION} 
        markers={markers}
        ready={ready} 
        {...this.props}
      />
    );
  }
}

export default PartnersMapContainer;
