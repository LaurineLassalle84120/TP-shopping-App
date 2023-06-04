import React from 'react';
import  {Text} from "react-native"
import { styles } from './styles';
import Card from '../../../components/card';
import Button from '../../../components/button';
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

const Settings =({ route }) => {
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
                        
                        <Card title="Name" description="Bruno Pham" inverseTitles="true"/>
                        <Card title="Email" description="bruno456@hotmail.com" inverseTitles="true"/>

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