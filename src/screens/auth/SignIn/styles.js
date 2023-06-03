import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/colors';
export const styles = StyleSheet.create({

  container: {
    padding: 24,
    paddingBottom:100,
    marginTop:-34
  },
  agreeTextBold: {
    fontWeight:'bold',
    fontSize:14
  },
  agreeText:{
    color:colors.blue,
    marginLeft:10,
    fontSize:14
  },
  bouton:{
    alignItems: 'center',
    marginBottom:30
  },
  textLien:{
    color:colors.blue,
    textAlign:"center"
  },
  divLien:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginBottom:20
  },
  lien:{
    color:colors.blue,
    fontWeight:"500"
  },
  greyLine:{
    color:colors.otherGrey
  },
  google:{
    margin:"auto",
    height:60,
    width:142,
    backgroundColor:colors.darkGrey,
    borderRadius:10,
    alignSelf:"center",
    marginBottom:40,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
    
})