import React from 'react'
import {Text, Pressable, Image,View} from 'react-native';
import {styles} from './styles';
import { Entypo  } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
export default function FavoriteHomeItem({product}) {
    return (
        <Pressable style={styles.container}>
           
                <View style={styles.container2}>
                    <Image source={{ uri: product.image }} style={styles.image}/>
                    <View style={styles.containerText}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                    </View>
                </View>
                {/* <Entypo  style={styles.entypo} name="cross" size={24} color={colors.blue} /> */}
                <Image source={require('../../assets/close.png')} style={styles.icon}/>
        </Pressable>
    );
};

