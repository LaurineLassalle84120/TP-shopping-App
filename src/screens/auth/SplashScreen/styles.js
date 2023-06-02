import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/colors';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // paddingBottom: 200
      },
      background: {
        backgroundColor:  'white',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginBottom: 30,
        
        paddingBottom: 20,
        paddingHorizontal: 50
    },
     
    logo: {
      marginTop: 144,
      width:357,
      height:209
    },
    h1:{
        fontSize: 40,
        textAlign:"center",
        fontWeight:'bold',
    },
    h1Orange:{
        color:colors.orange,
        textDecorationLine: 'underline'
    },
    

})