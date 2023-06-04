import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';
export const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
     
        justifyContent:'space-between',
        marginTop: "12%",
        height:"15%",
        maxHeight:50,
        backgroundColor:colors.white
    },
    text:{
        textAlign:"center",
        // marginLeft:70,
        fontSize:16,
        fontWeight:"600",
        // marginRight:"5%",
        // marginLeft:"5%",
        flex: 1, // Permet au texte de remplir l'espace disponible

    },
    search:{
        marginLeft:"5%",
        color:colors.blue,

        flexGrow: 0, // Permet à l'icône de ne pas prendre de l'espace supplémentaire
        flexShrink: 0, // Empêche l'icône de rétrécir lorsqu'elle est cachée
        marginRight:-20
    }
    ,
    logout:{
        // alignItems:"flex-end"
        marginLeft:-20
    },
    buttongrey:{
        marginRight:"5%",
        flexGrow: 0, // Permet à l'icône de ne pas prendre de l'espace supplémentaire
        flexShrink: 0, // Empêche l'icône de rétrécir lorsqu'elle est cachée
    },
    iconBack:{
        width:20,
        height:20,
        // marginLeft:"5%",
        // flexGrow: 0, // Permet à l'icône de ne pas prendre de l'espace supplémentaire
        // flexShrink: 0, // Empêche l'icône de rétrécir lorsqu'elle est cachée
        // marginRight:"-6%",
        flex:0,

    },
    iconBackPressable:{
        marginLeft:"3%",
    },
    inputSearch:{
        flex:1,
        marginLeft:"10%"
    }


})