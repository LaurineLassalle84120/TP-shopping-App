import React,{useState} from 'react'
import { Text, TouchableOpacity, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';
import { styles } from './styles';

export default function Input({ label, isPassword, value, placeholder, onChangeText, containerStyle,inputStyle ,inputContainerStyle, multiline }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible)
    // console.log("first")
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.inputContainer, inputContainerStyle]}>
          <TextInput
            style={[styles.input, inputStyle]}
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
            secureTextEntry={Boolean(isPassword && !isPasswordVisible)}
            textAlignVertical={multiline ? 'top' : 'center'}
            multiline={multiline}
          />
          {isPassword ?
            <Pressable onPress={onEyePress} style={styles.pressableEye}>
              <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye_closed.png') : require('../../assets/eye.png')}></Image>
            </Pressable> : null}
        </View>
      </View>
    </>
  )
}