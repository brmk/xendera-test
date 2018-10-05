import React, { Component } from 'react';
import AppNavigator from './navigators/AppNavigator';

class App extends Component {
  componentDidMount() {
    // SplashScreen.hide();
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
