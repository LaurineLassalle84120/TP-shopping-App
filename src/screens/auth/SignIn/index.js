import React, { useContext, useState } from 'react'
import { View, Text, Image, ScrollView, Alert,Pressable } from 'react-native'
import { styles } from './styles';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import { AntDesign } from '@expo/vector-icons';
import Lien from '../../../components/lien';
import { SafeAreaView } from 'react-native-safe-area-context';
import {UserContext, ProductsContext} from '../../../../App'

export default function SignIn() {

  const [isChecked, setIschecked] = useState(false);
  const [values, setValues] = useState('');

  const {user, setUser} = useContext(UserContext);

  // const {cart, setCart} = useContext(UserContext);
  const {products, setProducts} = useContext(ProductsContext);
  // const {categories, setCategories} = useContext(UserContext);

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  }
//api : https://dummyjson.com/docs/products
//fonction de récupération du panier du user
  const recupCartUser = async (idUser) => {
    console.log("idUser",idUser);
    await fetch('https://dummyjson.com/carts/user/'+idUser, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
     
    })
    .then(res => res.json())
    .then(v => {
      console.log("Panier:",v);
      setCart(v);//on set le userContext cart

    }
      );
  }

  //fonction de récupération des produits
  const recupProducts = async () => {
       
    await fetch('https://dummyjson.com/products', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    
    })
    .then(res => res.json())
    .then(v => {
        console.log("Products:",v);
        setProducts(v);//on set le userContext products
    }
    );
}

  //fonction de récupération des catégories
  const recupCategories = async () => {
       
    await fetch('https://dummyjson.com/products/categories', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(v => {
        console.log("Categories:",v);
        setCategories(v);//on set le userContext categories
    }
    );
}

  const onSignIn = async () => {    
    // console.log(values)

    if(values.username && values.password){
      // console.log("ok")
      //tentative de login
      await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: values.username,
          password: values.password,
          // username: 'kminchelle',
          // password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(v => {
        if(v.token) {//si l'api renvoi bien un token
          setUser(v)
          console.log("user connect(v):",v)
          //on récupère le panier du user
          recupCartUser(v.id);
          //on récupère les produits
          recupProducts();//TODO:à tester
          recupCategories();//TODO:à tester
        }else{
          Alert.alert(v.message);
        }
        
      })
      //permet de voir ce que renvoi la requête
      // .then(console.log)
      .catch(e => console.error('e : ', e));

    }else{
      Alert.alert("Veuillez remplir les champs");
      // console.log("nok")
    }
  }

  console.log("user connect:",user)
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>

            <Input label='E-mail' placeholder="test@test.fr" onChangeText={v => onChange('username', v)} />
            <Input label='Password' placeholder="***********" isPassword onChangeText={v => onChange('password', v)} />
           
            <View style={styles.bouton}>
              <Button title="Sign In" onPress={onSignIn} disabled={false} style={{marginTop:20}}/>
            </View>
            <View style={styles.divLien}>
              <Text style={styles.greyLine}>------------------------------</Text>
              <Text style={styles.lien}> Or sign up with </Text>
              <Text style={styles.greyLine}>------------------------------</Text>
            </View>
            <View style={styles.google}>
              <AntDesign name="google" size={34} color="white" />
            </View>
            <Pressable style={styles.divLien}>
              <Text style={styles.textLien}>Don't have an account? </Text>
              <Text style={styles.lien}>Sign Up</Text>
            </Pressable>
          </View>
       
        </ScrollView>
      </SafeAreaView>
    </>

  )
}
