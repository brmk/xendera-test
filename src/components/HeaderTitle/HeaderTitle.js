import React from 'react';
import { Text } from 'app/components';
import { human } from 'react-native-typography'

const HeaderTitle = ({children}) => <Text i18n style={human.title3}>{children}</Text>
export default HeaderTitle;