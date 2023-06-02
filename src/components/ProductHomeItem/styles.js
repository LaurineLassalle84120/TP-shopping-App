import {StyleSheet, Dimensions} from 'react-native';


import { colors } from '../../utils/colors';
const {width,height} = Dimensions.get('window');


export const styles = StyleSheet.create({


  container: {
    marginHorizontal:8,
    marginTop:15
  },

  title: {
    fontSize: 12,

  },
  image:{
    width:(width/ 2)-16,
    height:200,
    objectFit:'contain',
    borderRadius:10
  }
})