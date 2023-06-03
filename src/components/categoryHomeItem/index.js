import React from 'react'
import {Text, Pressable, Image, View} from 'react-native';
import {styles} from './styles';

export default function CategoryHomeItem({category, onPress}) {
    // console.log(category.image);
    return (
        <Pressable 
        style={styles.container}
        onPress={onPress}
        >
            {/* <View style={selectedCat ? styles.imageContainerSelected:styles.imageContainer}> */}
            <View style={styles.imageContainer}>
                {/* <Image source={{ uri: category.image }} style={styles.image}/> */}
                <Image source={require('../../assets/categories/star.png')} style={styles.image}/>
                
            </View>
            
            {/* <Text style={styles.title}>{category.title}</Text> */}
            <Text style={styles.title}>{category}</Text>
        </Pressable>
    );
};

