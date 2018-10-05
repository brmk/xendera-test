import React from 'react';
import { View } from 'react-native';
import { ImageMarker } from 'app/components';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import markers from 'app/constants/markers';


const PartnersMap = (props)=>{
  const { userLocation } = props;
  return (
    <View style ={styles.container}>
      {/*
        markers.map((marker) => (
          <View key={marker.image}>
            <Image source={{uri: marker.image }} style={styles.markerImage}/>
          </View>
        ))
      */}
      {
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={userLocation}
        > 
          { markers.map((marker) => (
            <Marker key={marker.image} coordinate={marker.coordinate}>
              <ImageMarker image={marker.image} />
            </Marker>
          ))}
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