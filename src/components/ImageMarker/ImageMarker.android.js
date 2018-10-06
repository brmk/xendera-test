import React from 'react';
import { WebView } from 'react-native';
import styles from './styles';

const ImageMarker = ({ image, redrawMarker })=>{
  console.log('rerender')
  return (
    <WebView
      originWhitelist={['*']}
      style={{ maxHeight: 100, height:100, width: 100, maxWidth: 100, flex:1 }}
      source={{ uri: image }}
      injectedJavaScript={`
        const body = document.getElementsByTagName("BODY")[0];
        body.style.backgroundColor = "red";
        body.style.margin = 0;
        const images = Array.from(document.getElementsByTagName("IMG"));
        images.forEach((image) => {
          Object.assign(image.style, {
            'max-width': '100vw',
            height: '100vh',
            'object-fit': 'contain',
          });
        });
      `}
      javaScriptEnabledAndroid={true}
      onError = {(error) => console.log('onError', error)}
      onLoad={()=>{ console.log('onLoad'); redrawMarker(); }}
      onLoadStart={()=>console.log('onLoadStart')}
      onLoadEnd={()=>{ console.log('onLoadEnd'); redrawMarker(); }}
      onMessage={()=> console.log('onMessage')}
      mixedContentMode={'always'}
    />
  )
} 

export default ImageMarker;
