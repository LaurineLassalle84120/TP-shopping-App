import React from 'react'
import { Text, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function ProductHomeItem({ product, onPress }) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
        </Pressable>
    );
};

