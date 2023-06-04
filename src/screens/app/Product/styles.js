import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../utils/colors';

const {fullWidth,fullHeight} = Dimensions.get('window');
console.log("fullWidth",fullWidth)
export const styles = StyleSheet.create({

  container: {

    paddingBottom:600,
    position: 'relative',
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
    alignItems:"center",
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Couleur de l'ombre
    shadowOpacity: 0.8, // Opacité de l'ombre (0 à 1)
    shadowRadius: 6, // Rayon de l'ombre
    shadowOffset: {
      width: 0, // Décalage horizontal de l'ombre
      height: 2, // Décalage vertical de l'ombre
    },
    elevation: 4, // Élévation sur les plateformes Android

  },
  containerText:{
    backgroundColor:"white",
    padding: 24,
    borderRadius:10,
    marginTop:-10,
    
  },
  heartFavoriTrue:{
    color:colors.blue,
    
  },
  heartFavoriFalse:{
    color:colors.dashgrey,
    
  },
  image:{
    width:fullWidth,
    height:"100%",
    padding:4,
  
    objectFit:'cover',
    // borderRadius:10
  },
  icon:{
    width:20,
    height:20,
    margin:10
  },
  buttonBack:{
    width:40,
    height:40,
    borderRadius:10,
    backgroundColor:colors.white,
    position: 'absolute',
    top: 20,
    left: 20,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Couleur de l'ombre
    shadowOpacity: 0.8, // Opacité de l'ombre (0 à 1)
    shadowRadius: 6, // Rayon de l'ombre
    shadowOffset: {
      width: 0, // Décalage horizontal de l'ombre
      height: 2, // Décalage vertical de l'ombre
    },
    elevation: 4, // Élévation sur les plateformes Android
  }

})