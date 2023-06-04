import React,{useContext} from 'react';//fonctions de react
import { styles } from './styles';
import { View, Text,TouchableOpacity,Pressable,Image,TextInput } from 'react-native';//librairie de composants
import { FontAwesome,MaterialIcons  } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import {UserContext} from '../../../App';
import { useNavigation } from '@react-navigation/native';

export default function Header({title, onBackPress, onLogout,showReturn, showSearch,showLogOut, onSearch,onChangeText}) {
    const {user,setUser} = useContext(UserContext);
    const navigation = useNavigation();
    const onLogOutPress = () => {
        setUser(null);
        // console.log("******OnLogOutPress",user);
        // console.log("ciychdgfs");
      };
    //   console.log("******en dehors",user);
    // const onChangeText = () =>{
    //     // console.log("search")

    // }
    return (
        <View style={styles.container}>
            {showSearch?<FontAwesome  style={styles.search} name="search" color="grey" size={16} />:null}
            {showReturn?<Pressable style={styles.iconBackPressable} onPress={()=>{
                navigation.navigate("Profile");
            }}>
                   <Image source={require('../../assets/back.png')} style={styles.iconBack}/>
            </Pressable>:null}
            {onSearch?(//si on a la recherche (page home)
                <TextInput
                style={styles.inputSearch}
                onChangeText={onChangeText}
                placeholder="Find all you need"
                // value={keyword}
            
            
           
                />
            ):(//sinon
                <Text style={styles.text}>{title}</Text>//on affiche le titre de la page
            )}
            
            {showLogOut?
                <Pressable style={styles.buttongrey} onPress={onLogOutPress} >
                    <MaterialIcons  style={styles.logout} name="logout" color={colors.blue} size={16} />
                </Pressable>
            :null}

        </View>
    );
};

