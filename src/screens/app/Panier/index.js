import React, { useState, useEffect, useRef,useContext } from 'react';
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
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../../App';



// import FavoriteHomeItem from '../../../components/FavoriteHomeItem';
const RenderFavoritesItem = (item) => {
    // console.log('category**', item);
    const product = item.item;

    return (
            <FavoriteHomeItem product={product} showTrash={true} />
        
    );
};

const Panier = () => {
    const {user, setUser} = useContext(UserContext);
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    const {carts, setCarts} = useContext(CartsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);

  
    const [APICarts, setAPICarts] = useState([]);
    // console.log("Favo:user",user);
    
    // console.log("Favo:products",APIProducts);
    // console.log("Favo:carts ",carts);
    // console.log("Favo:carts.carts ",carts.carts[0].products);
    //fonction executée qu'au rechargement du composant
    useEffect(() => {
        console.log("début");

        if (carts !== undefined ) {
            const panier = carts.carts[0].products;
            console.log("panier",panier);
            setAPICarts(panier);
        }
    
    }, [carts]);//dès que le panier est set on initialise 

    // console.log("APICarts:",APICarts);
    return (
        <SafeAreaView>
            <Header showSearch={false} showReturn={true} title="My listings"/>
            <FlatList
                // data={products}
                data={APICarts}
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

export default Panier;