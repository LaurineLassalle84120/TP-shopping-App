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

const Settings = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} title="Profile"/>
                    <View style={styles.contenu}>
                    
                        <Text style={styles.mail}>Personal informations</Text>
                        <Card title="My Listings" description="Already have 10 listing"/>
                        <Card title="Settings" description="Account, FAQ, Contact"/>
                       
                    <Button title="Add a new listing" disabled={true} style={{ marginTop: 70,width:"100%",height:60 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;