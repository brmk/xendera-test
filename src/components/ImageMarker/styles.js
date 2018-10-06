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
  },
  markerAndroid: {
    maxHeight: 60,
    maxWidth: 60,
    resizeMode: 'contain',
    overflow: 'hidden',
  }
});

export default styles;
