import { StyleSheet/*, Dimensions*/ } from 'react-native';

// const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerImage: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.7,
  },
  markerImageWebView: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
  },
  hasError: {
    backgroundColor: 'red',
  },
  loaded: {
    opacity: 1,
  }
});

export default styles;
