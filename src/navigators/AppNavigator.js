import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
// import theme from 'app/config/theme';
import * as screens from 'app/screens';

const PartnersMapStack = createStackNavigator({
  PartnersMap: {
    screen: screens['PartnersMap'],
    navigationOptions: {
      // headerTitle: '',
    }
  }
})

const AppNavigator = createSwitchNavigator({
  // Index: { 
  //   screen: screens['Index']
  // },
  App: PartnersMapStack,
},{
  // initialRouteName: 'Index',
  initialRouteName: 'App',
})


export default AppNavigator;
