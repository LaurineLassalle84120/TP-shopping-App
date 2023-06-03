import React,{useContext} from 'react';//fonctions de react
import { styles } from './styles';
import { View, Text,TouchableOpacity,Pressable,Image } from 'react-native';//librairie de composants
import { FontAwesome,MaterialIcons  } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import {UserContext} from '../../../App';

export default function Header({title, onBackPress, onLogout, showLogout,showReturn, showSearch,showLogOut, onSearch, keyword}) {
    const {user,setUser} = useContext(UserContext);

    const onLogOutPress = () => {
        setUser(null);
        // console.log("******OnLogOutPress",user);
        // console.log("ciychdgfs");
      };
    //   console.log("******en dehors",user);
    
    return (
        <View style={styles.container}>
            {showSearch?<FontAwesome  style={styles.search} name="search" color="grey" size={16} />:null}
            <Image source={require('../../assets/back.png')} style={styles.iconBack}/>
            <Text style={styles.text}>{title}</Text>

            {showLogOut?
                <Pressable style={styles.buttongrey} onPress={onLogOutPress} >
                    <MaterialIcons  style={styles.logout} name="logout" color={colors.blue} size={16} />
                </Pressable>
            :null}

        </View>
    );
};

