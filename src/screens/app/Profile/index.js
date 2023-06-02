import React,{useContext} from 'react';
import  {Text} from "react-native"
import { styles } from './styles';
import Card from '../../../components/card';
import Button from '../../../components/button';
import {UserContext} from '../../../../App';

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
    const {user,setUser} = useContext(UserContext);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} showLogOut={true} title="Profile"/>
                    <View style={styles.contenu}>
                        <Text style={styles.name}>{user.firstName + " " + user.lastName}</Text>
                        <Text style={styles.mail}>{user.email}</Text>
                        <Card title="My Listings" description="Already have 10 listing"/>
                        <Card title="Settings" description="Account, FAQ, Contact" onPress={() => {
                            navigation.navigate('Settings', { 
                                // title: product.title,
                                // price: product.price,
                                // description: product.description,
                                // image: product.image
                            })
                        }} />
                       
                    <Button title="Add a new listing" disabled={true} style={{ marginTop: 70,width:"100%",height:60 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;