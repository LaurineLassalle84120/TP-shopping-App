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
import {UserContext,ProductsContext,CartsContext,CategoriesContext,PanierContext} from '../../../../App';
import {styles} from './styles'


// import FavoriteHomeItem from '../../../components/FavoriteHomeItem';


const Panier = () => {
    const navigation = useNavigation();
    const {user, setUser} = useContext(UserContext);
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    // const {carts, setCarts} = useContext(CartsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);
    const {APIPanier, setAPIPanier} = useContext(PanierContext);
    const [panier, setPanier] = useState([]);
 
    // console.log("Favo:user",user);
    
    // console.log("Favo:products",APIProducts);
    // console.log("Favo:carts ",carts);
    // console.log("Favo:carts.carts1 ",carts.carts[1].products);
    // console.log("Favo:APIPanier ",APIPanier);

    const RenderFavoritesItem = (item) => {
        // console.log('category**', item);
        
        const product = item.item;
        return (
            // <FavoriteHomeItem product={product} showTrash={true} />
            <FavoriteHomeItem product={product} key={product.id} showTrash={true} onPress={() => {
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
                    productId: product.id,
                    images:productInCart.images
                })
            }} />
        );
    };
    //fonction executée qu'au rechargement du composant
    useEffect(() => {
        // console.log("début");

        if (APIPanier !== undefined ) {
            const panier = APIPanier.carts[0].products;
            // console.log("APIPanier",panier);
            setPanier(panier);
        }
    // console.log("Panier:APIPanier:",APIPanier);
    }, [APIPanier]);//dès que le panier est set on initialise 


    
        
    
    return (
        <SafeAreaView>
            <ScrollView>
            <Header showSearch={false}  title="Cart"/>
                <View style={styles.container}>
                    
                    <FlatList
                        // data={products}
                        // data={APICarts}
                        data={panier}
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

export default Panier;