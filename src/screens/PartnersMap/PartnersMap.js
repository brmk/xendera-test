import React from 'react';
import { View } from 'react-native';
import { ImageMarker } from 'app/components';
import MapView from 'react-native-maps';
import styles from './styles';

const PartnersMap = (props)=>{
  const { userLocation, markers } = props;
  
  return (
    <View style ={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={userLocation}
      > 
        { markers.map(marker => <ImageMarker key={marker.image} {...marker} /> )}
      </MapView>
    </View>
  )
} 
export default PartnersMap;