import React from 'react'
import {Text, Pressable, Image, View} from 'react-native';
import {styles} from './styles';
import { Foundation  } from '@expo/vector-icons';

export default function CategoryHomeItem({category, onPress,selected }) {
    // console.log(category.image);
    return (
        <Pressable 
        style={styles.container}
        onPress={onPress}
        >
            {/* <View style={selectedCat ? styles.imageContainerSelected:styles.imageContainer}> */}
            <View style={selected ? [styles.imageContainer,styles.imageContainerSelected] : styles.imageContainer}>
                {/* <Image source={{ uri: category.image }} style={styles.image}/> */}
                {/* <Image source={require('../../assets/categories/star.png')} style={styles.image}/> */}
                {selected ?(
                    <Foundation name="star" size={24} color="white" />
                ):(
                    <Foundation name="star" size={24} color="#303030" />
                )}
             
            </View>
            
            {/* <Text style={styles.title}>{category.title}</Text> */}
            <Text style={styles.title}>{category}</Text>
        </Pressable>
    );
};

