import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../utils/colors';

const {fullWidth,fullHeight} = Dimensions.get('window');
console.log("fullWidth",fullWidth)
export const styles = StyleSheet.create({

  container: {

    paddingBottom:200
  },
  contenu:{
    padding:20
  },
  name: {
    fontSize:20,
    fontWeight:"600"
  },
  mail:{
    color:colors.grey,
    marginTop:5,
    marginBottom:10,
  }
 

})