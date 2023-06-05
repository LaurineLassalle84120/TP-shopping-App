//Imports
//React
import React,{useContext,useEffect,useState} from 'react';
import {Text,SafeAreaView,Pressable,ScrollView,View} from 'react-native';
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


const Profile = () => {


    const {user,setUser} = useContext(UserContext);//info du user
    const {carts,setCarts} = useContext(CartsContext);//panier du user
    
    const [ lenghtCarts, setLenghtCarts ] = useState(0); //nbr d'item dans le panier (carts)

    const navigation = useNavigation();

    useEffect(() => {
        if (carts !== undefined ) {
            const cartItems = carts.carts[0].products;
            const cartItemsLength = cartItems.length;

            setLenghtCarts(cartItemsLength);
        }
    }, [carts]);//dès que le panier est disponible


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
                            <Card title="My Listings" description={`Already have ${lenghtCarts} listing`} showArrow="true" modeEdit={false}/>
                        </Pressable>
                        <Pressable onPress={() => {
                                navigation.navigate('Settings');
                            }}>
                            <Card title="Settings" description="Account, FAQ, Contact"  showArrow="true" modeEdit={false}/>
                        </Pressable>
                       
                        <Button title="Add a new listing"  style={styles.button} onPress={() => {
                                navigation.navigate('NewProduct');
                        }}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;