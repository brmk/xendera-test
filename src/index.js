import React, { Component } from 'react';
import AppNavigator from './navigators/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
