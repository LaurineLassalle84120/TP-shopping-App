import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';
export const styles = StyleSheet.create({
    container:{
        marginVertical:16,
        height:80
    },
    label:{
        color:colors.blue,
        // paddingVertical:9
        marginBottom:9,
        fontWeight:"bold"
    },
    inputContainer:{
        borderWidth:1,
        borderColor: colors.grey,
        borderRadius:14,
        // flexDirection:'row',
        // display:"flex",
        // alignContent:"center"
    },
    input:{
        paddingHorizontal:17,
        paddingVertical:22,
        opacity:0.5,
        flex:1,
       
    },


    picker:{
        color:colors.blue
    }
  
})