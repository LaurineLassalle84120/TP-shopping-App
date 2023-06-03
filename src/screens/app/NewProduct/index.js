import React from 'react';
import  {Text} from "react-native"
import { styles } from './styles';
import Card from '../../../components/card';
import Button from '../../../components/button';
import Input from '../../../components/input';
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

const NewProduct =({ route }) => {
    // const { title,description,image,price } = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header showSearch={false} title="Create a new listing"/>
                    <View style={styles.contenu}>
                        <View style={styles.perso}>
                           <Text style={styles.mail}>Upload photos</Text> 

                           <Image source={require('../../../assets/close.png')} style={styles.icon}/>
                        </View>
                        <Input label='Title' placeholder="Listing title" onChangeText={v => onChange('username', v)} />
                        <Input label='Category' placeholder="Select the category" onChangeText={v => onChange('password', v)} />
                        <Input label='Price' placeholder="Enter price in USD" onChangeText={v => onChange('username', v)} />
                        <Input multiline inputStyle={styles.inputStyle} inputContainerStyle={styles.inputDesc} label='Description' placeholder="Tell us more..." onChangeText={v => onChange('username', v)} />
                        <Button title="Submit"  style={{ marginTop: "90%",width:"100%",height:60 }} />
                  
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewProduct;