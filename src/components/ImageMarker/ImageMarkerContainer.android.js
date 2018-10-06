import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import ImageMarker from './ImageMarker';

class ImageMarkerContainer extends Component { 
  setRef = (ref) => {
    this.marker = ref;
  }

  redrawMarker = () => {
    console.log(this.marker)
    this.marker && this.marker.redraw();
    // this.forceUpdate();
    // this.marker._runCommand('redraw', []);
  }

  render () {
    const { image, coordinate, ...rest } = this.props;
    return (
      <Marker coordinate={coordinate} {...rest} ref={this.setRef} tracksViewChanges={false}>
        <ImageMarker image={image} redrawMarker={this.redrawMarker} />
      </Marker>
    )
  }
}

export default ImageMarkerContainer;
