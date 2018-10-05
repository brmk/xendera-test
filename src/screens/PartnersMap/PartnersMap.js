import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const PartnersMap = (props)=>{
  return (
    <View style ={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
       </MapView>
     </View>
  )
} 
export default PartnersMap;
