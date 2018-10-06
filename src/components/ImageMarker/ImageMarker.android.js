import React from 'react';
import { WebView, View } from 'react-native';
import { MARKER_LOGO_PLACEHOLDER_URI } from 'app/constants/globals';
import styles from './styles';


// ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗                           
// ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝                           
// ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗                          
// ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║                          
// ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝                          
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝                                              
//  _        _
// ( `-.__.-' )
//  `-.    .-'
//     \  /
//      ||
//      ||
//     //\\
//    //  \\
//   ||    ||
//   ||____||
//   ||====||
//    \\  //
//     \\//
//      ||
//      ||
//      ||
//      ||
//      ||
//      ||
//      ||
//      ||
//      []

const ImageMarker = ({ image, onLoad, onError, hasError, loaded, title }) => {
  return (
    <View style={[
      styles.markerImageContainer, 
      loaded ? styles.loaded : null, 
      hasError ? styles.hasError : null,
    ]}>
      <WebView
        originWhitelist={['*']}
        style={styles.markerImage}
        // Renders marker
        // if there is an issue with the image, the component will load a placeholder
        source={{ 
          html: `
            <head>
              <style>
                body {
                  position: relative;
                }
                img {
                  max-width: 100vw; 
                  height: 100vh; 
                  object-fit: contain;
                }
                #placeholder {
                  position: absolute; 
                  left: 0;
                  top: 0; 
                  z-index: 10;
                }
              </style>
            </head>
            <body style="backgroundColor: white; margin: 0; overflow: hidden;">
              <img id="logo" src=${image} alt=${title} onload="onLoad()" />
              <img id="placeholder" src=${MARKER_LOGO_PLACEHOLDER_URI} />
              <script>
                function onLoad(){
                  const placeholder = document.getElementById('placeholder');
                  Object.assign(placeholder.style, {
                    // left: 0,
                    // top: 0,
                    opacity: 0,
                  });
                }
              </script>
            </body>
          `
        }}
        injectedJavaScript={`
          
        `}
        javaScriptEnabledAndroid={true}
        onError = {onError}
        onLoad={onLoad}
        mixedContentMode={'always'}
        scrollEnabled={false}
      />
    </View>
  )
} 

export default ImageMarker;
