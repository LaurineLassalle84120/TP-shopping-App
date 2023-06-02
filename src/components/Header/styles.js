import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';
export const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        display:'flex',
        flexDirection:'row',

        justifyContent:'flex-start',
        marginTop: 20,
        height:48,
        backgroundColor:colors.white
    },
    text:{
        textAlign:"center",
        marginLeft:70
 
    },
    search:{
        marginLeft:10
    }
    ,
    logout:{
        // alignItems:"flex-end"
    },
    buttongrey:{
        borderWidth:1
    }

})