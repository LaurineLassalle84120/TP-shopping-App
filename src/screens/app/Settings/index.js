//Imports
//React
import React,{useContext,useEffect,useState} from 'react';
import {SafeAreaView,ScrollView,Image,View,Text} from 'react-native';
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

const Settings =({ route }) => {
    const {user,setUser} = useContext(UserContext);//info du user
    // const { title,description,image,price } = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} showReturn={true} title="Settings"/>
                    <View style={styles.contenu}>
                        <View style={styles.perso}>
                           <Text style={styles.mail}>Personal informations</Text> 
                           <Image source={require('../../../assets/edit.png')} style={styles.icon}/>
                        </View>
                        
                        <Card title="Name" description={user.firstName + " " + user.lastName} inverseTitles="true"/>
                        <Card title="Email" description={user.email} inverseTitles="true"/>

                        <Text style={styles.mail}>Help Center</Text> 
                        <Card title="FAQ" description="" showArrow="true"/>
                        <Card title="Contact Us" description="" showArrow="true"/>
                        <Card title="Privacy & Terms" description="" showArrow="true"/>
                  
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;