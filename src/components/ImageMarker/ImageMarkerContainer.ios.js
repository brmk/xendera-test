import React from 'react';
import { Marker } from 'react-native-maps';
import ImageMarker from './ImageMarker';

const ImageMarkerContainer = ({ image, coordinate, ...rest }) => {
  return (
    <Marker key={image} coordinate={coordinate} {...rest}>
      <ImageMarker image={image} />
    </Marker>
  )
}

export default ImageMarkerContainer;
