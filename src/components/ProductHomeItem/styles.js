import {StyleSheet, Dimensions} from 'react-native';


import { colors } from '../../utils/colors';
const {width,height} = Dimensions.get('window');


export const styles = StyleSheet.create({


  container: {
    marginHorizontal:8,
    marginTop:15,
    display:"flex",
    // flexWrap: 'wrap'
  },

  title: {
    // fontSize: 12,
    marginBottom:6,
    marginTop:6,
    color:colors.anotherGrey,
    fontSize:14,
    flexWrap: 'wrap'
  },
  image:{
    width:(width/ 2)-16,
    height:200,
    objectFit:'contain',
    borderRadius:10
  },
  price:{
    fontWeight:"700",
    fontSize:14
  }
 
})