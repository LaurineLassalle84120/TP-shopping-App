import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../utils/colors';

const {fullWidth,fullHeight} = Dimensions.get('window');
console.log("fullWidth",fullWidth)
export const styles = StyleSheet.create({

  container: {

    paddingBottom:200
  },
  title: {
    fontWeight:"800",
    fontSize:20,
    marginBottom:10
  },
  price: {
    fontWeight:"800",
    fontSize:22,
    marginBottom:20
  },
  description: {
    fontSize:14
  },
  button:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between'
  },
  buttongrey:{
    marginTop: 20,
    width:60,
    height:60,
    marginRight:10,
    backgroundColor:colors.veryLightGrey,
    borderRadius:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  containerText:{
    backgroundColor:"white",
    padding: 24,
    borderRadius:10,
    marginTop:-10
  },
  heart:{
    color:colors.blue
  },
  image:{
    width:fullWidth,
    height:"40%",
    padding:4
  
    // objectFit:'contain',
    // borderRadius:10
  },

})