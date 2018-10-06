import React from 'react';
import { View } from 'react-native';
import { ImageMarker } from 'app/components';
import MapView from 'react-native-maps';
import styles from './styles';


const PartnersMap = (props)=>{
  const { userLocation, markers } = props;
  
  return (
    <View style ={styles.container}>
      {/*
        markers.map((marker) => (
          <View key={marker.image}>
            <Image source={{uri: marker.image }} style={{height:50,width:50}}/>
          </View>
        ))
      */}
      {
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={userLocation}
        > 
          { markers.map(marker => <ImageMarker key={marker.image} {...marker} /> )}
        </MapView>
      }
    </View>
  )
} 
export default PartnersMap;
// <MapView
//         provider={MapView.PROVIDER_GOOGLE}
//         style={styles.map}
//         initialRegion={PSEUDO_USER_LOCATION}
//       > 
//         { markers.map((marker) => {
//           <MapView.Marker key={marker.image} coordinate={marker.coordinate}>
//             <Image source={{uri: marker.image }} />
//           </MapView.Marker>
//         })}
//       </MapView>