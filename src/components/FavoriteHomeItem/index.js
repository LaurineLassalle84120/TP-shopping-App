import React, { useState, useEffect, useRef,useContext } from 'react';
import {Text, Pressable, Image,View} from 'react-native';
import {styles} from './styles';
import { Entypo  } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../App';


export default function FavoriteHomeItem({product,showCross,showTrash,onPress}) {
    const {user, setUser} = useContext(UserContext);
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    const {carts, setCarts} = useContext(CartsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);
    // console.log("FavoriteHomeItem:APIproducts",APIProducts.products[86].thumbnail)
    // console.log("FavoriteHomeItem:product",typeof(APIProducts.products[0].thumbnail))
    // console.log("FavoriteHomeItem:product",parseInt((product.id)))
    // console.log("FavoriteHomeItem:product",typeof(parseInt(product.id)))

    //fonction de suppression d'un produit dans le cart
    const removeFromCart = (productId) => {
        const cartItems = carts.carts[0].products; // Extraction du tableau de produits
        const updatedCart = cartItems.filter((product) => product.id !== productId);
        setCarts({ ...carts, carts: [{ ...carts.carts[0], products: updatedCart }] });
    };

    const onPressCross = () => {
        // console.log(product.id);
        removeFromCart(product.id);
    };
    return (
        <Pressable style={styles.container} onPress={onPress}>
           
                <View style={styles.container2}>
                    <Image source={{ uri: APIProducts.products[product.id-1].thumbnail }} style={styles.image}/>
                    <View style={styles.containerText}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.price}>{'$ '}{product.price}</Text>
                    </View>
                </View>
                {/* <Entypo  style={styles.entypo} name="cross" size={24} color={colors.blue} /> */}
                {showCross?(
                    <Pressable onPress={onPressCross}>
                        <Image source={require('../../assets/close.png')} style={styles.icon}/>
                    </Pressable>
                ):null}
                {showTrash?(<Image source={require('../../assets/delete.png')} style={styles.icon}/>):null}
        </Pressable>
    );
};

