import { StyleSheet/*, Dimensions*/ } from 'react-native';

// const {height, width} = Dimensions.get('window');

const size = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerImageContainer: {
    height: size,
    width: size,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.3,
  },
  markerImage: {
    height: size,
    width: size,
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
