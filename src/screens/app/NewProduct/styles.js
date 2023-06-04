import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../utils/colors';

const {fullWidth,fullHeight} = Dimensions.get('window');
console.log("fullWidth",fullWidth)
export const styles = StyleSheet.create({

  container: {

    paddingBottom:100
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
  },
  icon:{
    width:24,
    height:24,
    position:"absolute",
    alignSelf:"flex-end"
  },
  perso:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  inputDesc:{
    height:136,
    textAlign:"left"
  },
  inputStyle:{
    textAlign:"left"
  },
  addPhoto:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:90,
    height:90,
    borderWidth: 1,
    borderColor: colors.dashgrey,
    borderStyle: "dashed",
    borderRadius: 8,
  },
  photo:{
    width:90,
    height:90,
  },
  flex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  photoView:{
    marginLeft:10
  }
 

})