import React from 'react'
import { Text, Pressable, Image,View } from 'react-native';
import { styles } from './styles';

export default function ProductHomeItem({ product, onPress }) {
    //évite le décalage des photos si un titre est trop long
    const truncatedTitle = product.title.length > 25 ? product.title.substring(0, 25) + '...' : product.title;
    // console.log("ProductHomeItem:product:",product)
    return (
        
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{truncatedTitle }</Text>
                <Text style={styles.price}>{'$ '}{product.price}</Text>
            </View>
        </Pressable>
    );
};

