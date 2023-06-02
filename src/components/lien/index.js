import React from 'react'
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import {styles} from './styles';
export default function Lien({title, onPress, disabled, style}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={[styles.container,style]}  disabled={disabled}>
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity >
  )
}


