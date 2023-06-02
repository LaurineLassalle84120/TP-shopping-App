import React, {useState} from 'react'
import {View, Text,Image, ScrollView,Pressable} from 'react-native'
import {styles} from './styles';
import { AntDesign } from '@expo/vector-icons';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import Lien from '../../../components/lien';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';



export default function SignUp() {
  const [isChecked, setIschecked] = useState(false);
  const [values, setValues] = useState('');
  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  }
  const onSignUp = () => {    
    // console.log(values)
     // Simple POST request with a JSON body using fetch
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ 
    //     name: postData.name,
    //     role: postData.role,
    //     email: postData.email,
    //     password: postData.password  
    //   })
    // };
    // fetch( `${config.urlServer}/api/users`, requestOptions)
    //   // .then(response => response.json())
    //   .then(function (res) {
    //     // setLabelSubmit(res.data['hydra:totalItems'])
    //     console.log(res.status);
    //     if (res.status=="201"){
          
    //       setLabelSubmit("Utilisateur bien créer");
    //     }else{
    //       // console.log("no");
    //       setLabelSubmit("Problème : l'utilisateur n'a pas été créé");
    //     }
    //     console.log(res);
      
    // })
  }
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Input style={styles.input} label='Name' placeholder="John Doe" onChangeText={v => onChange('name', v)} />
            <Input style={styles.input} label='E-mail' placeholder="test@test.fr" onChangeText={v => onChange('email', v)} />
            <Input style={styles.input} label='Password' placeholder="***********" isPassword onChangeText={v => onChange('password', v)} />
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

            <Pressable style={styles.divLien}>
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
