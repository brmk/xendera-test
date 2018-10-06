import React from 'react';
import Text from 'app/components/Text';
import { human } from 'react-native-typography'

const HeaderTitle = ({children}) => <Text i18n style={[{paddingHorizontal: 10}, human.title3]}>{children}</Text>
export default HeaderTitle;