import React from 'react';
import  {Text} from "react-native"
import { products } from '../../../data/products';
import {
    SafeAreaView,
    Pressable,
    FlatList,
    
    Image,
    View
} from 'react-native';
import Header from '../../../components/Header';
import FavoriteHomeItem from '../../../components/FavoriteHomeItem';
// import FavoriteHomeItem from '../../../components/FavoriteHomeItem';
const RenderFavoritesItem = (item) => {
    // console.log('category**', item);
    const product = item.item;

    return (
            <FavoriteHomeItem product={product} />
        
    );
};

const Favorites = () => {
    return (
        <SafeAreaView>
            <Header showSearch={false} title="Favorites"/>
            <FlatList
                data={products}
                renderItem={RenderFavoritesItem}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={true}
                numColumns={1}
                ListFooterComponent={<View style={{height:100}}></View>}
                // horizontal
            />
        </SafeAreaView>
    );
};

export default Favorites;