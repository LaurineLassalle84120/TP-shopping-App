import React from 'react'
import {View, Text,Image, ScrollView} from 'react-native'
import {styles} from './styles';

import Button from '../../../components/button';
import Lien from '../../../components/lien';


export default function SplashScreen({navigation}) {
  const onSignIn = () =>{
    navigation.navigate("SignIn")
    // console.log("click");
  }
  const onSignUp = () =>{
    navigation.navigate("SignUp")
    // console.log("click");
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image resizeMode="contain" source={require('../../../assets/splash_image.png')} style={styles.logo} />

        <View style={styles.container}>
            <Text style={styles.h1}>You'll Find</Text>
            <Text style={[styles.h1,styles.h1Orange]}>All you need</Text>
            <Text style={styles.h1}>Here !</Text>
        </View>
        <Button title="Sign Up" onPress={onSignUp} disabled={false} style={{marginTop:70,width:"80%"}}/>
        <Lien title="Sign In" onPress={onSignIn} style=""/>
      </View>
    </ScrollView>
    
  )
}
