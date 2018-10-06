import React from 'react';
import { WebView, View } from 'react-native';
import styles from './styles';

const ImageMarker = ({ image, redrawMarker, onError })=>{
  return (
    <View style={styles.markerImage}>
      <WebView
        originWhitelist={['*']}
        style={styles.markerImage}
        source={{ 
          html: `
            <body style="backgroundColor: white; margin: 0; overflow: hidden;">
              <img src=${image} style="max-width: 100vw; height: 100vh; object-fit: contain;" />
            </body>
          `
        }}
        injectedJavaScript={`
        `}
        javaScriptEnabledAndroid={true}
        onError = {onError}
        onLoadEnd={redrawMarker}
        mixedContentMode={'always'}
        scrollEnabled={false}
      />
    </View>
  )
} 

export default ImageMarker;
