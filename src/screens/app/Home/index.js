import React, { useState, useEffect, useRef,useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    FlatList,
    View
} from 'react-native';

import {
    styles
} from './styles'

// DATA
// import { products } from '../../../data/products';

// import { categories } from '../../../data/categories';


import ProductHomeItem from '../../../components/ProductHomeItem';
import CategoryHomeItem from '../../../components/categoryHomeItem';
import Header from '../../../components/Header';
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../../App';

export default function Home() {
  

    const navigation = useNavigation();

    const {user, setUser} = useContext(UserContext);
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    const {carts, setCarts} = useContext(CartsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);

    //useState
    const [productFiltered, setProductFiltered] = useState([])
    const [choiceCategory, setChoiceCategory] = useState(0)
    useEffect(() => {
        console.log("début");
        // setProductFiltered(products);
       
    }, []);
    // console.log("Home:user",user);
    // console.log("Home:products",APIProducts.products);
    // console.log("Home:carts ",carts);
    // console.log("Home:APICategories",APICategories);
    // console.log("Home:categories",categories);

    //fonction de click sur la category
    const clickCat = (category) => {

        // setProductFiltered([]);
        // console.log("category.id", category.id);
        // const choiceCat = category.id;
        // let productsFilt = [];

        // console.log("choiceCategory", choiceCat);

        // // console.log("element.category",element.category);
        // if (choiceCat == 0) {//si la category choisie est ALL
        //     productsFilt = productsFilt.concat(products);//on affiche tous les produits

        //     console.log("products", products);
        //     console.log("productsFilt", productsFilt);
        // } else {//sinon
        //     products.forEach(element => {
        //         if (element.category == choiceCat) {
        //             console.log("ça match");
        //             console.log("element:", element);

        //             productsFilt.push(element);//on ajoute les produits qui ont la catégory choisie
        //             // setProductFiltered=(choiceCategory)
        //         }
        //     });
        // }

        // console.log("products", products);
        // console.log("productsFilt ", productsFilt);
        // setProductFiltered(productsFilt);
        // setChoiceCategory(category.id);
        // console.log(productFiltered);
    }


    const RenderCategoryItem = (item) => {
        console.log('category**', item);
        const category = item.item;
        return (

            <CategoryHomeItem category={category}
                onPress={() => clickCat(category)} />

        );
    };



    const RenderProductItem = (item) => {
        const product = item.item;

        return (
            // <ProductHomeItem product={product} onPress={() => {
            <ProductHomeItem product={product} onPress={() => {
                navigation.navigate('Product', { 
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.thumbnail
                 })
            }} />
        );
    };

    return (
        <SafeAreaView>
            <Header showSearch={true} title="Find all you need" />
            <FlatList
                // data={categories}
                data={APICategories}
                renderItem={RenderCategoryItem}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                horizontal

            />
            <FlatList
                data={APIProducts.products}
                // data={productFiltered}
                renderItem={RenderProductItem}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={<View style={{ height: 300 }}></View>}
            />

        </SafeAreaView>
    );
};