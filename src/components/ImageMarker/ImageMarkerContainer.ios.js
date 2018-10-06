import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import ImageMarker from './ImageMarker';
import * as Animatable from 'react-native-animatable';

class ImageMarkerContainer extends Component {
  state = {
    loaded: false,
    hasError: false,
  }

  anchor = {
    x: 0.5, 
    y: 0.5
  }


  redrawMarker = () => {
    this.marker && this.marker.redraw();
  }

  onLoad = async () => {
    await this.setState({
      loaded: true,
      hasError: false,
    });

    this.animatable.bounceIn(1600);
  }

  onError = async (error) => {
    await this.setState({
      hasError: true,
      loaded: true,
    });

    this.animatable.fadeIn(1600);
    console.log('Error loading', error);
  }

  setAnimatableRef = (ref) => {
    this.animatable = ref;
  }

  render() {
    const { image, coordinate, ...rest } = this.props;
    const { loaded, hasError } = this.state;

    return (
      <Marker key={image} coordinate={coordinate} anchor={this.anchor} {...rest}>
        <Animatable.View ref={this.setAnimatableRef}>
          <ImageMarker 
            image={image} 
            loaded={loaded} 
            hasError={hasError}
            onLoad={this.onLoad}
            onError={this.onError}
          />
        </Animatable.View>
      </Marker>
    )
  }
}

export default ImageMarkerContainer;
