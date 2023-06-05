//Imports
//React
import React,{useContext,useEffect,useState} from 'react';
import {SafeAreaView,ScrollView,Image,View,Text,Pressable,Alert} from 'react-native';
//Style
import { styles } from './styles';
//Composants
import Card from '../../../components/card';
import Button from '../../../components/button';
import Header from '../../../components/Header';
//Navigation
import { useNavigation } from '@react-navigation/native';
//Contexts
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../../App';
//Icons
import { FontAwesome5 } from '@expo/vector-icons';
//colors
import { colors } from '../../../utils/colors';


const Settings =({ route }) => {
    //States
    const [modeEdit,setModeEdit] = useState(false);
    const [firstNameValue,setFirstNameValue] = useState("");
    const [lastNameValue,setLastNameValue] = useState("");
    const [emailValue,setEmailValue] = useState("");
    
    //Context
    const {user,setUser} = useContext(UserContext);//info du user

    //fonction lors de l'appuie sur save (info personnelles)
    const onPressSave=()=>{
        if (firstNameValue && lastNameValue && emailValue)  {//si tous les champs ont été remplis
            console.log("emailValue",emailValue)
            console.log("firstNameValue",firstNameValue)
            console.log("lastNameValue",lastNameValue)
            setUser((prevUser) => ({
                ...prevUser,
                email: emailValue,
                firstName:firstNameValue,
                lastName:lastNameValue
            }));
            setModeEdit(!modeEdit)
        }else{//sinon on affiche un message
            Alert.alert("Veuillez remplir les champs");
        }
    }

    useEffect(() => {//permet de préremplir les champs input avec les informations de l'utilisateur (sinon ils sont vides)
        if (user) {
          setFirstNameValue(user.firstName);
          setLastNameValue(user.lastName);
          setEmailValue(user.email);
        }
      }, [user]);//a chaque changement de user (login)

    //fonction lors de l'appuie sur edit (infos personnelles)
    const onPressEdit=()=>{
        console.log("edit");
        setModeEdit(!modeEdit)

    }
    // const { title,description,image,price } = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} showReturn={true} title="Settings"/>
                    <View style={styles.contenu}>
                        <View style={styles.perso}>
                           <Text style={styles.mail}>Personal informations</Text> 
                           {modeEdit?(
                                <Pressable onPress={onPressSave}>
                                    <FontAwesome5 name="check" size={24} color={colors.blue} />
                                </Pressable>
                           ):(
                                <Pressable onPress={onPressEdit}>
                                    <Image source={require('../../../assets/edit.png')} style={styles.icon}/>
                                </Pressable>
                           )}
                           
                           
                        </View>
                        
                        <Card title="FirstName" 
                        description={user.firstName} 
                        inverseTitles="true" 
                        modeEdit={modeEdit} 
                        value={firstNameValue}
                        onChangeText={setFirstNameValue} 
                        />

                        <Card title="LastName" 
                        description={user.lastName} 
                        inverseTitles="true"
                        modeEdit={modeEdit} 
                        value={lastNameValue}
                        onChangeText={setLastNameValue}/>


                        <Card title="Email" 
                        description={user.email} 
                        inverseTitles="true" 
                        modeEdit={modeEdit} 
                        value={emailValue}
                        onChangeText={setEmailValue}
                        />

                        <Text style={styles.mail}>Help Center</Text> 
                        <Card title="FAQ" description="" showArrow="true" modeEdit={false}/>
                        <Card title="Contact Us" description="" showArrow="true" modeEdit={false}/>
                        <Card title="Privacy & Terms" description="" showArrow="true" modeEdit={false}/>
                  
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;