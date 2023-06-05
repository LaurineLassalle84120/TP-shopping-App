import React from 'react'
import {Text,TextInput, Pressable, Image, View} from 'react-native';
import {styles} from './styles';
import { colors } from '../../utils/colors';

import { AntDesign } from '@expo/vector-icons'; 

export default function Card({title,description,showArrow,inverseTitles,modeEdit,value,onChangeText}) {

    return (
       
            <View style={styles.container}>
                <View>
     
                    <Text style={inverseTitles ? styles.desc : styles.title}>
                        {title}
                    </Text> 
                    {description && modeEdit==false? (//on test si la description est défini
                    <Text style={inverseTitles ? styles.title : styles.desc}>
                        {description}
                    </Text> //si elle est pas définie on ne l'affiche pas:évite un décalage
                   ) : null}
                    {description && modeEdit==true? (//on test si la description est défini
                        <TextInput
                        style={styles.title}
                        onChangeText={onChangeText}
                        keyboardType="email-address" // Utiliser le clavier "email-address"
                        placeholder={description}
                        value={value}
                        />
                       
                       
                   ) : null}


                </View> 
                {/* <AntDesign name="rightcircleo" size={24} color={colors.blue} /> */}
                {showArrow?(
                    <Image source={require('../../assets/arrow.png')} style={styles.icon}/>
                ):(
                    null
                )}
                
            </View>
  


      )
}