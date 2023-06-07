import React, { useState, useEffect, useRef,useContext } from 'react';
import {Text, Pressable, Image,View} from 'react-native';
import {styles} from './styles';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import {UserContext,ProductsContext,CartsContext,CategoriesContext,PanierContext} from '../../../App';


export default function FavoriteHomeItem({product,showCross,showTrash,onPress}) {
    const {user, setUser} = useContext(UserContext);
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    const {carts, setCarts} = useContext(CartsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);
    const {APIPanier, setAPIPanier} = useContext(PanierContext);
    // console.log("FavoriteHomeItem:APIproducts",APIProducts.products[86].thumbnail)
    // console.log("FavoriteHomeItem:product",typeof(APIProducts.products[0].thumbnail))
    // console.log("FavoriteHomeItem:product",parseInt((product.id)))
    // console.log("FavoriteHomeItem:product",typeof(parseInt(product.id)))

    //fonction de suppression d'un produit dans le cart favori
    const removeFromCart = (productId) => {
        const cartItems = carts.carts[0].products; // Extraction du tableau de produits
        const updatedCart = cartItems.filter((product) => product.id !== productId);
        setCarts({ ...carts, carts: [{ ...carts.carts[0], products: updatedCart }] });
    };
    //fonction de suppression d'un produit dans le panier
    const removeFromPanier = (productId) => {
        const panierItems = APIPanier.carts[0].products; // Extraction du tableau de produits du panier
        const updatedPanier = panierItems.filter((product) => product.id !== productId);
        setAPIPanier({ ...APIPanier, carts: [{ ...APIPanier.carts[0], products: updatedPanier }] });
    };
    //fonction d'ajout d'un produit dans le panier
    const addToPanier = (productId) => {
        // console.log(productId)
        //on retrouve le produit dans le catalogue (APIProducts)
        const product = APIProducts.products.find((product) => product.id === productId);
        // console.log(product)
        if (product!=undefined){
            const panierItems = APIPanier.carts[0].products; // Extraction du tableau de produits
            //rajoute le produit de la page au favori
            const updatedPanier = [...panierItems, { id: productId,title:product.title,price:product.price,quantity:1 }];
            //console.log("updatedCart",updatedCart)
            // console.log("APIProductss:",APIProducts.products[])
        
            setAPIPanier({ ...APIPanier, carts: [{ ...APIPanier.carts[0], products: updatedPanier }] });
        }
     
    };
    //lors de l'appuie sur la croix
    const onPressCross = () => {
        // console.log(product.id);
        removeFromCart(product.id);//on enlève le produit au favori
    };
    //lors de l'appuie sur la poubelle
    const onPressTrash = () => {
        // console.log(product.id);
        removeFromPanier(product.id);//on enlève le produit au favori
    };
    //lors de l'appuie sur la chariot (panier)
    const onPressCart = () => {
        // console.log(product.id);
        addToPanier(product.id);//on ajoute le produit au panier
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
                    <View style={styles.iconsFav}>
                        <Pressable onPress={onPressCross}>
                            <Image source={require('../../assets/close.png')} style={styles.icon}/>
                        </Pressable>
                        <Pressable onPress={onPressCart}>
                            <AntDesign   name="shoppingcart" color={colors.blue} size={26} style={styles.cart}/>
                        </Pressable>
                    </View>
                ):null}
               
                {showTrash?(
                    <Pressable onPress={onPressTrash}>
                        <Image source={require('../../assets/delete.png')} style={styles.icon}/>
                    </Pressable>
                ):null}
               
        </Pressable>
    );
};

