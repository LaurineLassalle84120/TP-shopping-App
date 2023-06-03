import React, {useState} from 'react'
import {View, Text,Image, ScrollView,Pressable} from 'react-native'
import {styles} from './styles';
import { AntDesign } from '@expo/vector-icons';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';



export default function SignUp() {
  const [isChecked, setIschecked] = useState(false);
  const [values, setValues] = useState('');
  const navigation = useNavigation();
  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  }
  const onSignUp = () => {    
   
  }
  //lors du click sur le lien
  const handlePress = () => {
    // Redirection vers la page SignIn
    navigation.navigate('SignIn');
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Input style={styles.inputForm} label='Name' placeholder="John Doe" onChangeText={v => onChange('name', v)} />
            <Input style={styles.inputForm} label='E-mail' placeholder="test@test.fr" onChangeText={v => onChange('email', v)} />
            <Input style={styles.inputForm} label='Password' placeholder="***********" isPassword onChangeText={v => onChange('password', v)} />
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Checkbox isChecked={isChecked} setIschecked={setIschecked}></Checkbox><Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms </Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>

            </View>
            <View style={styles.bouton}>
              <Button title="Sign Up" onPress={onSignUp} disabled={false} style={{marginTop:0}}/>
            </View>
            <View style={styles.divLien}>
              <Text style={styles.greyLine}>------------------------------</Text>
              <Text style={styles.lien}> Or sign up with </Text>
              <Text style={styles.greyLine}>------------------------------</Text>
            </View>
            <View style={styles.google}>
              <AntDesign name="google" size={34} color="white" />
            </View>

            <Pressable style={styles.divLien} onPress={handlePress}>
              <Text style={styles.textLien}>Already have an account? </Text>
              <Text style={styles.lien}>Sign In</Text>
            </Pressable>
           
            {/* <GoogleSigninButton  ne fonctionne pas...
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
            />; */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  )
}
