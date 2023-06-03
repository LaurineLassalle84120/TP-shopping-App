import {StyleSheet, Dimensions} from 'react-native';


import { colors } from '../../utils/colors';
const {width,height} = Dimensions.get('window');


export const styles = StyleSheet.create({


  container: {
    display:"flex",
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
    marginHorizontal:8,
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:colors.lightGrey
  },
  container2:{
    display:"flex",
    flexDirection:'row',
    alignItems:'flex-start',
  },

  title: {
    fontSize: 12,

  },
  image:{
    width:(width/ 4)-16,
    height:(width/ 4)-16,
    objectFit:'contain',
    borderRadius:10
  },
  containerText:{
    paddingLeft:10
  },
  price:{
    fontWeight:"bold"
  },
  entypo:{
    color:colors.lightGrey,
    alignSelf:'flex-start'
  },
  icon:{
    width:(width/ 15),
    height:(width/ 15)
  }
})