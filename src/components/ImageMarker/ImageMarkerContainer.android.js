import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import ImageMarker from './ImageMarker';

class ImageMarkerContainer extends Component { 
  setRef = (ref) => {
    this.marker = ref;
  }

  redrawMarker = () => {
    this.marker && this.marker.redraw();
  }

  onError = (error) => {
    console.log('Error loading', error);
  }

  render () {
    const { image, coordinate, ...rest } = this.props;
    return (
      <Marker coordinate={coordinate} {...rest} ref={this.setRef} tracksViewChanges={false}>
        <ImageMarker image={image} redrawMarker={this.redrawMarker} onError={this.onError} />
      </Marker>
    )
  }
}

export default ImageMarkerContainer;
