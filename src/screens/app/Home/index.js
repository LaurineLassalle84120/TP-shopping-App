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
    const [choiceCategory, setChoiceCategory] = useState("")
    const [allCategories, setAllCategories] = useState([])
    
    //fonction executée qu'au rechargement du composant
    useEffect(() => {
        console.log("début");

        const updatedCategories = ["All",...APICategories ];
        setAllCategories(updatedCategories);
        // const Categories = [...APICategories, "All"];
        // setAPICategories(Categories);
        // allCategories = APICategories.unshift("All");//on rajoute la categorie All pour reset le filtre
        if (APIProducts.products) {
            setProductFiltered(APIProducts.products);
        }
        
       
    }, []);
    // console.log("Home:user",user);
    // console.log("Home:products",APIProducts);
    // console.log("Home:carts ",carts);
    // console.log("Home:APICategories",APICategories);
    // console.log("Home:categories",categories);

    //fonction de click sur la category
    const clickCat = (category) => {

        setProductFiltered([]);
        console.log("category", category);
        const choiceCat = category;
        let productsFilt = [];

        console.log("choiceCategory", choiceCat);

        // // console.log("element.category",element.category);
        if (choiceCat == "All") {//si la category choisie est ALL
            productsFilt = APIProducts.products;//on affiche tous les produits

          
          
        } else {//sinon
            APIProducts.products.forEach(element => {
                // console.log(element);
         
                console.log(element.category);
                if (element.category == choiceCat) {
                    console.log("ça match");
                    console.log("element:", element);

                    productsFilt.push(element);//on ajoute les produits qui ont la catégory choisie
                    // setProductFiltered=(choiceCategory)
                }
            });
        }

        console.log("products", APIProducts);
        console.log("productsFilt ", productsFilt);
        setProductFiltered(productsFilt);
        setChoiceCategory(category);
        // console.log(productFiltered);
    }


    const RenderCategoryItem = (item) => {
        // console.log('category**', item);
        const category = item.item;
        return (

            <CategoryHomeItem category={category} key={category.id}
                onPress={() => clickCat(category)} />

        );
    };



    const RenderProductItem = (item) => {
        const product = item.item;

        return (
            // <ProductHomeItem product={product} onPress={() => {
            <ProductHomeItem product={product} key={product.id} onPress={() => {
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
            {/* <CategoryHomeItem category="All" key={57890}
                onPress={() => clickCat("All")} /> */}
            <FlatList
                // data={categories}
                // data={APICategories}
                data={allCategories}
                
                renderItem={RenderCategoryItem}
                keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()} // Vérifie si item.id est défini
                // keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                horizontal

            />
            <FlatList
                // data={APIProducts.products}
                // data={APIProducts}
                data={productFiltered}
                renderItem={RenderProductItem}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={<View style={{ height: 300 }}></View>}
            />

        </SafeAreaView>
    );
};