
import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../utils/colors';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
   
        elevation: 3,
        width:"100%",
        height:60,
       
        fontWeight:'bold',
        marginTop: 13,
        marginBottom: 20
    },
    title:{
     
        color:colors.blue,
        fontSize:18
    },
    desc:{
        fontSize:12
    },
    icon:{
        width:(width/ 15),
        height:(width/ 15)
      }


})