import React, { useContext, useState,useEffect } from 'react'
import { View, Text, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import Lien from '../../../components/lien';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../../App';
export default function Product({ route }) {

  const navigation = useNavigation();
  const {carts, setCarts} = useContext(CartsContext);
  const {APIProducts, setAPIProducts} = useContext(ProductsContext);
  const { title,description,image,price,productId } = route.params;
  const [productFavori,setProductFavori] = useState(false);

  useEffect(() => {
    if (carts !== undefined ) {
      const panier = carts.carts[0].products;
      // console.log("panier",panier);
      panier.forEach(element => {
        // console.log("element.id",element.id);
        // console.log("id",productId);
        if (element.id==productId){//si le produit affiché est dans les favori
          setProductFavori(true);
        }
      });
    }
  }, [carts]);//dès que le panier est set on initialise 

  const onPressHeart=()=>{//met en favori ou enlève des favori le produit
    //console.log("heart")
    setProductFavori(!productFavori);//met à jour le state
    //met à jour la panier
    if(!productFavori){//on doit ajouter le produit au panier
      //console.log("add")
      addToCart(productId);
    }else{//on doit enlever le produit au panier
      //console.log("productId",productId)
      removeFromCart(productId);
      //console.log("remove")
    }

  }

  //fonction de suppression d'un produit dans le cart
  const removeFromCart = (productId) => {
    const cartItems = carts.carts[0].products; // Extraction du tableau de produits
    const updatedCart = cartItems.filter((product) => product.id !== productId);
    setCarts({ ...carts, carts: [{ ...carts.carts[0], products: updatedCart }] });
  };
  //fonction d'ajout d'un produit dans le cart
  const addToCart = async (productId) => {
    const cartItems = carts.carts[0].products; // Extraction du tableau de produits
    //rajoute le produit de la page au favori
    const updatedCart = [...cartItems, { id: productId,title:title,price:price,quantity:1 }];
    //console.log("updatedCart",updatedCart)
    // console.log("APIProductss:",APIProducts.products[])
    // await fetch('https://dummyjson.com/products/'+productId)
    // .then(res => res.json())
    // .then((product) => {
    //   console.log(product)
    // })
    // .catch((error) => {
    //   console.log('Erreur lors de la récupération des détails du produit :', error);
    // });
    setCarts({ ...carts, carts: [{ ...carts.carts[0], products: updatedCart }] });
  };

  const onPress=()=>{
    navigation.navigate("Home");
  }
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image}/>
            <TouchableOpacity  activeOpacity={0.6} style={styles.buttonBack} onPress={onPress}>
              <Image source={require('../../../assets/back.png')} style={styles.icon}/>
            </TouchableOpacity >
            
            <View style={styles.containerText}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{'$ '}{price}</Text>
              <Text style={styles.description}>{description}</Text>
              <View style={styles.button}>
                <TouchableOpacity  activeOpacity={0.6} style={styles.buttongrey} onPress={onPressHeart} >
                    <FontAwesome  name="heart" color="red" size={26} style={productFavori?(styles.heartFavoriTrue):(styles.heartFavoriFalse)}/>
                </TouchableOpacity >
                  <Button title="Contact Seller" disabled={true} style={{ marginTop: 20,width:"77%",height:60 }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  )
}
