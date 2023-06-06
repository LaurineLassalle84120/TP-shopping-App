//Imports
//React
import React, { useContext, useState,useEffect } from 'react'
import { View, Text, ScrollView, Alert,Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//Style
import { styles } from './styles';
//Composants
import Input from '../../../components/input';
import Button from '../../../components/button';
//Navigation
import { useNavigation } from '@react-navigation/native';
//Contexts
import {UserContext, ProductsContext, CartsContext, CategoriesContext} from '../../../../App'
//Icons
import { AntDesign } from '@expo/vector-icons';
//Async Storage
import { storeData, getData, removeData } from '../../../utils/storage';

export default function SignIn() {

  const [isChecked, setIschecked] = useState(false);
  // const [values, setValues] = useState('');
  const [values, setValues] = useState({
    username: '', // Modifier la valeur initiale pour éviter les erreurs de contrôle non contrôlé
    password: '', // Modifier la valeur initiale pour éviter les erreurs de contrôle non contrôlé
  });

  const {user, setUser} = useContext(UserContext);
  const {carts, setCarts} = useContext(CartsContext);
  const {APIProducts, setAPIProducts} = useContext(ProductsContext);
  const {APICategories, setAPICategories} = useContext(CategoriesContext);

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  }
  const navigation = useNavigation();
//api : https://dummyjson.com/docs/products


  useEffect(() => {//au démarrage de la page
    //on va chercher les identifiants du user dans l'asyncstorage
    const fetchUserCredentials = async () => {
      const username = await getData("username");//on récupère dans le async storage le username
      const password = await getData("password");//on récupère dans le async storage le password
      setValues((prevValues) => ({ ...prevValues, username: username, password: password }));//on set les states values avec
    };
    fetchUserCredentials();

  }, []);//a chaque chargement du composant

//fonction de récupération du panier du user
  const recupCartUser = async (idUser) => {
    //console.log("idUser",idUser);
    await fetch('https://dummyjson.com/carts/user/'+idUser, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
     
    })
    .then(res => res.json())
    .then(v => {
      // console.log("SignIn:Carts:",v);
      setCarts(v);//on set le cartsContext

    }
      );
  }

  //fonction de récupération des produits
  const recupProducts = async () => {
       
    await fetch('https://dummyjson.com/products?limit=0', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    
    })
    .then(res => res.json())
    .then(v => {
        // console.log("SignIn:Products :",v);
        setAPIProducts(v);//on set le Context products
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
        // console.log("SignIn:Categories:",v);
        setAPICategories(v);//on set le userContext categories
    }
    );
  }

  //on va chercher les informations personnelles du user
  const fetchUserInformations = async () => {
    const asyncFirstName = await getData("firstName");//on récupère dans le async storage le firstName
    const asyncLastName = await getData("lastName");//on récupère dans le async storage le lastName
    const asyncEmail = await getData("email");//on récupère dans le async storage l'email
    
    if(asyncFirstName && asyncLastName && asyncEmail ){//si on a toutes les informations
        console.log("asyncFirstName:",asyncFirstName)
        console.log("asyncLastName:",asyncLastName)
        console.log("asyncEmail:",asyncEmail)

        setUser((prevUser) => ({//on va set le userContext
          ...prevUser,
          email: asyncEmail,
          firstName:asyncFirstName,
          lastName:asyncLastName
        }));

    }}
   

  //lors du click sur le lien
  const handlePress = () => {
    // Redirection vers la page SignUp
    navigation.navigate('SignUp');
  };

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
          storeData("username",values.username)//stockage du username dans l'asyncStorage
          storeData("password",values.password)//stockage du password dans l'asyncStorage
          setUser(v)//sauvegarde du user dans le UserContext
          // console.log("user connect(v):",v)
          //on récupère le panier du user
          recupCartUser(v.id);
          //on récupère les produits
          recupProducts();
          //on récupère les catégories
          recupCategories();
          //on récupère les informations personnelles du user (AsyncStorage)
          fetchUserInformations();
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

  // console.log("user connect:",user)

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>

            <Input label='E-mail' value={values.username} placeholder="test@test.fr" onChangeText={v => onChange('username', v)} />
            <Input label='Password' value={values.password} placeholder="***********" isPassword onChangeText={v => onChange('password', v)} />
           
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
            <Pressable style={styles.divLien} onPress={handlePress}>
              <Text style={styles.textLien}>Don't have an account? </Text>
              <Text style={styles.lien}>Sign Up</Text>
            </Pressable>
          </View>
       
        </ScrollView>
      </SafeAreaView>
    </>

  )
}
