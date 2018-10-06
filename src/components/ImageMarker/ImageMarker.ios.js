import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { MARKER_LOGO_PLACEHOLDER_URI } from 'app/constants/globals';


const ImageMarker = ({ image, loaded, hasError, onError, onLoad })=>{
  return (
    <View style={[
      styles.markerImageContainer, 
      loaded ? styles.loaded : null, 
      hasError ? styles.hasError : null,
    ]}>
      <FastImage 
        source={{uri: image, priority: FastImage.priority.normal}} 
        resizeMode={FastImage.resizeMode.contain} 
        style={[styles.markerImage]}
        onLoad={onLoad}
        onError={onError}
      />
      <FastImage 
        source={{uri: MARKER_LOGO_PLACEHOLDER_URI, priority: FastImage.priority.normal}} 
        resizeMode={FastImage.resizeMode.contain} 
        style={[styles.markerImage, { position: 'absolute', top: 0, left: 0 }, loaded && !hasError ? { opacity: 0 } : null ]}
      />
    </View>
  )
} 
export default ImageMarker;
