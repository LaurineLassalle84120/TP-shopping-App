import {StyleSheet, Dimensions} from 'react-native';


import { colors } from '../../../utils/colors';

const {width,height} = Dimensions.get('window');


export const styles = StyleSheet.create({


  container: {
    marginHorizontal:8,

  },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 2,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  title: {
    fontSize: 12,

  },
  image:{
    width:(width/ 2)-16,
    height:200,
    objectFit:'contain',
    borderRadius:10
  },
  viewCat:{
    flexDirection: 'column',
    alignItems: 'center',
  }
})