import {StyleSheet, Dimensions} from 'react-native';


import { colors } from '../../utils/colors';
const {width,height} = Dimensions.get('window');


export const styles = StyleSheet.create({


  container: {
    display:"flex",
    alignItems:"center",

    marginHorizontal:8,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 24
  },

  title: {
    fontSize: 12,

  },
  image:{
    width:38,
    height:38,
    padding:4,
    // objectFit:'contain',
    // borderRadius:10
  },
  imageContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    // flexDirection: 'column',
    backgroundColor:colors.white,
    padding: 4,
    borderRadius: 8,
    marginBottom: 8
  },
  imageContainerSelected:{
  
    // flexDirection: 'column',
    backgroundColor:colors.grey,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8
  }
  
})