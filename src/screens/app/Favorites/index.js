import React, { useState, useEffect, useRef,useContext } from 'react';
import  {Text,ScrollView} from "react-native"
import { products } from '../../../data/products';
import { useNavigation } from '@react-navigation/native';
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
import {styles} from './styles'




const Favorites = () => {
    const {user, setUser} = useContext(UserContext);
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    const {carts, setCarts} = useContext(CartsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);

    const navigation = useNavigation();
    const [APICarts, setAPICarts] = useState([]);
    // console.log("Favo:user",user);
    
    // console.log("Favo:products",APIProducts);
    // console.log("Favo:carts ",carts);
    // console.log("Favo:carts.carts ",carts.carts[0].products);
    // import FavoriteHomeItem from '../../../components/FavoriteHomeItem';
    const RenderFavoritesItem = (item) => {

        // console.log('category**', item);
        const product = item.item;

        return (
                <FavoriteHomeItem product={product} key={product.id}  showCross={true} onPress={() => {
                    // console.log("product.id",);
                    let idProduct = product.id;
                    // console.log(APIProducts.products);
                    const productInCart = APIProducts.products.find((product) => product.id === idProduct);
                    // console.log("productInCart",productInCart.thumbnail)
                    // console.log("product.description",productInCart.description)
                    navigation.navigate('Product', { 
                        title: product.title,
                        price: product.price,
                        description: productInCart.description,//description non présente dans le cart, obligé d'aller la chercher dans products
                        image: productInCart.thumbnail,//image non présente dans le cart, obligé d'aller la chercher dans products
                        productId: product.id
                    })
                }} />
            
        );
    };
    //fonction executée qu'au rechargement du composant
    useEffect(() => {
        // console.log("début");

        if (carts !== undefined ) {
            const panier = carts.carts[0].products;
            // console.log("panier",panier);
            setAPICarts(panier);
        }
    
    }, [carts]);//dès que le panier est set on initialise 

    // console.log("APICarts:",APICarts);
    return (
        <SafeAreaView>
            <ScrollView>
            <Header showSearch={false} title="Favorites"/>
                <View style={styles.container}>
                    
                    <FlatList
                        // data={prosducts}
                        data={APICarts}
                        renderItem={RenderFavoritesItem}
                        keyExtractor={item => String(item.id)}
                        showsVerticalScrollIndicator={true}
                        numColumns={1}
                        ListFooterComponent={<View style={{height:100}}></View>}
                        // horizontal
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Favorites;