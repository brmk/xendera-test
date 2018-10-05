import React from 'react';
import FastImage from 'react-native-fast-image'
import styles from './styles';

const ImageMarker = ({ image })=>{
  return (
    <FastImage 
      source={{uri: image, priority: FastImage.priority.normal}} 
      resizeMode={FastImage.resizeMode.contain} 
      style={styles.markerImage}
      // onLoad={()=>{console.log('on load end', image)}}
      // onLoadStart={()=>{console.log('on load start', image)}}
      // onLoadEnd={()=>{console.log('on load end', image)}}
      // onProgress={e => console.log(e.nativeEvent.loaded / e.nativeEvent.total, image)}
    />
  )
} 
export default ImageMarker;
