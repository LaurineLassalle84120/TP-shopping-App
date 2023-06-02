import React,{useState} from 'react'
import { Text, TouchableOpacity, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';
import { styles } from './styles';

export default function Checkbox({ isChecked, setIschecked }) {
    


return(

    <Pressable style={styles.container} onPress={() => setIschecked(!isChecked)}>
        <View style={styles.checkbox} >
            {isChecked ? <Image style={styles.image} source={require('../../assets/check.png')}/>:null}
        </View>
    </Pressable>




)


    
}