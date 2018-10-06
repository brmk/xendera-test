import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import ImageMarker from './ImageMarker';

class ImageMarkerContainer extends Component { 
  state = {
    loaded: false,
  }

  setRef = (ref) => {
    this.marker = ref;
  }

  redrawMarker = () => {
    this.marker && this.marker.redraw();
  }

  onLoad = async () => {
    await this.setState({
      loaded: true,
      hasError: false,
    });

    this.redrawMarker();
  }

  onError = async (error) => {
    await this.setState({
      hasError: true,
      loaded: true,
    });

    this.redrawMarker();
    console.log('Error loading', error);
  }

  render () {
    const { image, coordinate, ...rest } = this.props;
    const { loaded, hasError } = this.state;
    return (
      <Marker coordinate={coordinate} {...rest} ref={this.setRef} tracksViewChanges={false}>
        <ImageMarker 
          {...rest}
          image={image} 
          onLoad={this.onLoad} 
          onError={this.onError} 
          loaded={loaded}
          hasError={hasError}
        />
      </Marker>
    )
  }
}

export default ImageMarkerContainer;
