import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../utils/colors';

const {fullWidth,fullHeight} = Dimensions.get('window');
//console.log("fullWidth",fullWidth)
export const styles = StyleSheet.create({

  container: {
    height:700,
    // paddingBottom:200
    display:"flex",
    justifyContent:"flex-start",
    alignContent:"center"
  },
  contenu:{
    height:700,
    padding:20,
    display:"flex",
    justifyContent:"flex-start",
    alignContent:"center"
  },
  name: {
    fontSize:20,
    fontWeight:"600"
  },
  mail:{
    color:colors.grey,
    marginTop:5,
    marginBottom:10,
  },
  button:{
    alignSelf:"flex-end", 
    width:"100%",
    height:60 
  }
 

})