//Imports
//React
import React,{useState,useEffect,useContext} from 'react';
import {Text, SafeAreaView, Pressable, ScrollView, Image, View,Alert} from 'react-native';
//Style
import { styles } from './styles';
//Composants
import Card from '../../../components/card';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Liste from '../../../components/liste';
import Header from '../../../components/Header';
import dsfgg from '../../../assets/discus.jpg'
//Navigation
import { useNavigation } from '@react-navigation/native';
//Contexts
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../../App';
//Icons
import { AntDesign } from '@expo/vector-icons';
//Async Storage


const NewProduct =({ route }) => {
    const navigation = useNavigation();
    const {APIProducts, setAPIProducts} = useContext(ProductsContext);
    const {APICategories, setAPICategories} = useContext(CategoriesContext);
    const [values, setValues] = useState({
        photo:'https://medias.lampe-avenue.fr/13524-thickbox_eal/lampe-de-bureau-articulee-bleu-encre.jpg',
        title: '', 
        price: '', 
        description: '', 

      });    
    const [selectedCategory, setSelectedCategory] = useState(APICategories[0]);
    const onChange = (key, value) => {
        console.log(key)
        console.log(APICategories[0])
        console.log(APIProducts.products)
        if (key=="price"){//si le champ est celui du prix
            if (/^\d*\.?\d*$/.test(value)) {//on autorise seulement les valeurs numériques et le point
                setValues(v => ({ ...v, [key]: value }));
            }
        }else{
            setValues(v => ({ ...v, [key]: value }));
        }
        
    }

    //Fonction qui renvoi le dernier id du tableau de produits
    const lastProductId = APIProducts.products.reduce((maxId, product) => {//reduce permet de réduire le tableau à une seule valeur
        return Math.max(maxId, product.id);//parcours le tableau et compare l'id actuel avec l'id maximal précédent
      }, 0);

    const onSubmit = async () => {  
        if(values.photo && values.title && selectedCategory && values.price){
            console.log(values)   
            console.log(selectedCategory)
            console.log(APIProducts)  
            console.log("lastProductIds",lastProductId)   
            const newProduct = {
                // brand: 'Nouvelle marque',
                category: selectedCategory,
                description: values.description,
                // discountPercentage: 10,
                id: lastProductId+1,
                images: [values.photo],
                price: values.price,
                // rating: 4.5,
                // stock: 50,
                thumbnail: values.photo,
                title:  values.title,
              };
              console.log("newProduct",newProduct)
            const updatedProducts = [...APIProducts.products, newProduct];
            const updatedData = {
                ...APIProducts,
                products: updatedProducts,
              };
            console.log("updatedData",updatedData)
            setAPIProducts(updatedData)
            navigation.navigate("Home")
        }else{
            Alert.alert("Veuillez remplir les champs obligatoires (*)");
           
        }
   
    }

    // console.log(selectedCategory)
    // const { title,description,image,price } = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} showReturn={true} title="Create a new listing"/>
                    <View style={styles.contenu}>
                    <Text style={styles.mail}>Upload photos</Text> 
                        <View style={styles.flex}>
                            <View style={styles.perso}>
                            
                            <Pressable style={styles.addPhoto}>
                                <AntDesign  name="pluscircle" color={"#DADADA"} size={30} />
                            </Pressable>
                            
                            </View>
                            <View style={styles.photoView}>
                                {/* <Image source={require('../../../assets/lampe.png')} style={styles.photo}/> */}
                                <Image source={{ uri: 'https://medias.lampe-avenue.fr/13524-thickbox_eal/lampe-de-bureau-articulee-bleu-encre.jpg' }} style={styles.photo} />

                                
                                <Image source={require('../../../assets/close.png')} style={styles.icon}/>
                            </View>
                        </View>
                   
                        <Input label='Title*' placeholder="Listing title" value={values.title} onChangeText={v => onChange('title', v)} />
                        {/* <Input label='Category' placeholder="Select the category" onChangeText={v => onChange('password', v)} list={true}/> */}
                        
                        <Liste label='Category*'placeholder="Listing title" category={selectedCategory} setCategory={setSelectedCategory}/>
                   
                        <Input label='Price*'  keyboardType="numeric" placeholder="Enter price in USD" value={values.price} onChangeText={v => onChange('price', v)} />
                        <Input multiline inputStyle={styles.inputStyle} inputContainerStyle={styles.inputDesc} label='Description' placeholder="Tell us more..." value={values.description} onChangeText={v => onChange('description', v)} />
                        <Button title="Submit"  style={{ marginTop: 80,width:"100%",height:60 }} onPress={onSubmit} />
                  
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewProduct;