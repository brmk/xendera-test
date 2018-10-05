import React from 'react';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
// import theme from 'app/config/theme';
import { HeaderTitle } from 'app/components';
import * as screens from 'app/screens';
import theme from 'app/config/theme';

const headerTitleFactory = (title) => {
  const headerTitle = () => <HeaderTitle>{title}</HeaderTitle>
  return headerTitle;
} 

const PartnersMapStack = createStackNavigator({
  PartnersMap: {
    screen: screens['PartnersMap'],
    navigationOptions: {
      headerTitle: headerTitleFactory('PartnersMap.headerTitle'),
    },
    headerTitleStyle: {
      color: theme.textColor,
    },
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
