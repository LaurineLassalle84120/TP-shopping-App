import React from 'react'
import { Text, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function ProductHomeItem({ product, onPress }) {
    console.log("ProductHomeItem:product:",product)
    return (
        
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{'$ '}{product.price}</Text>
        </Pressable>
    );
};

