import React from 'react'
import {Text, Pressable, Image, View} from 'react-native';
import {styles} from './styles';
import { colors } from '../../utils/colors';

import { AntDesign } from '@expo/vector-icons'; 

export default function Card({title,description,showArrow,inverseTitles}) {

    return (
       
            <View style={styles.container}>
                <View>
         
                    <Text style={inverseTitles ? styles.desc : styles.title}>
                        {title}
                    </Text> 
                    {description ? (//on test si la description est défini
                    <Text style={inverseTitles ? styles.title : styles.desc}>
                        {description}
                    </Text> //si elle est pas définie on ne l'affiche pas:évite un décalage
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