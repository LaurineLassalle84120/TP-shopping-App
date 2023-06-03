import React,{useContext} from 'react';
import  {Text} from "react-native"
import { styles } from './styles';
import Card from '../../../components/card';
import Button from '../../../components/button';
import {UserContext} from '../../../../App';
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
    const {user,setUser} = useContext(UserContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} showLogOut={true} title="Profile"/>
                    <View style={styles.contenu}>
                        <Text style={styles.name}>{user.firstName + " " + user.lastName}</Text>
                        <Text style={styles.mail}>{user.email}</Text>
                        <Card title="My Listings" description="Already have 10 listing" showArrow="true"/>
                        <Pressable onPress={() => {
                                navigation.navigate('Settings');
                            }}>
                            <Card title="Settings" description="Account, FAQ, Contact"  showArrow="true"/>
                        </Pressable>
                       
                    <Button title="Add a new listing" disabled={true} style={{ marginTop: "90%",width:"100%",height:60 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;