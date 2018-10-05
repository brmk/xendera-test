import React from 'react';
import { Text } from 'react-native';
import I18n from 'app/i18n';
import styles from './styles';

const CustomText = ({style, i18n, children, ...props}) => {
  if (i18n === true) {
    children = I18n.t(children);
  }

  return (
    <Text style={[styles.text, style]} {...props}>{children}</Text>
  )
} 
export default CustomText;
