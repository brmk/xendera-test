import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image'
import styles from './styles';

const ImageMarker = ({ image })=>{
  return (
    <View>
      <FastImage source={{uri: image, priority: FastImage.priority.normal}} resizeMode={FastImage.resizeMode.contain} style={styles.markerImage}/>
    </View>
  )
} 
export default ImageMarker;
