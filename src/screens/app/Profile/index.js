import React,{useContext,useEffect,useState} from 'react';
import  {Text} from "react-native"
import { styles } from './styles';
import Card from '../../../components/card';
import Button from '../../../components/button';
// import {UserContext} from '../../../../App';
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Pressable,
    FlatList,
    ScrollView,
    Image,
    View
} from 'react-native';
import Header from '../../../components/Header';



const Profile = () => {

    const {user,setUser} = useContext(UserContext);//info du user
    const {carts,setCarts} = useContext(CartsContext);//panier du user
    
    const [ lenghtCarts, setLenghtCarts ] = useState(0); //nbr d'item dans le panier (carts)

    const navigation = useNavigation();

    useEffect(() => {
        if (carts !== undefined ) {
            let lenght = carts.carts[0].totalProducts;
        
            console.log("début");
            console.log("Profil:carts",carts);
            console.log("Profil:carts:lenght",carts.carts[0].totalProducts);
            setLenghtCarts(parseInt(carts.carts[0].totalProducts));
        }
    }, [carts]);//dès que le apnier est disponible


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} showLogOut={true} title="Profile"/>
                    <View style={styles.contenu}>
                        <Text style={styles.name}>{user.firstName + " " + user.lastName}</Text>
                        <Text style={styles.mail}>{user.email}</Text>
                        <Pressable onPress={() => {
                                navigation.navigate('Panier');
                            }}>
                            <Card title="My Listings" description={`Already have ${lenghtCarts} listing`} showArrow="true"/>
                        </Pressable>
                        <Pressable onPress={() => {
                                navigation.navigate('Settings');
                            }}>
                            <Card title="Settings" description="Account, FAQ, Contact"  showArrow="true"/>
                        </Pressable>
                       
                    <Button title="Add a new listing"  style={{ marginTop: "90%",width:"100%",height:60 }} onPress={() => {
                                navigation.navigate('NewProduct');
                            }}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;