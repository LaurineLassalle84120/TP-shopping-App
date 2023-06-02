import React from 'react'
import {Text, Pressable, Image, View} from 'react-native';
import {styles} from './styles';
import { colors } from '../../utils/colors';

import { AntDesign } from '@expo/vector-icons'; 

export default function Card({title,description}) {

    return (
        <Pressable>
            <View style={styles.container}>
                <View>
                    {/* <Text style={styles.title}>
                        {title}
                    </Text> */}
                    <Text style={styles.title}>
                        {title}
                    </Text> 
                    <Text style={styles.desc}>
                        {description}
                    </Text> 
                   
                </View> 
                <AntDesign name="rightcircleo" size={24} color={colors.blue} />
             
            </View>
        </Pressable>


      )
}