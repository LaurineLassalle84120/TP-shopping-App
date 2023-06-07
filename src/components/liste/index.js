import React,{useState,useContext} from 'react'
import { Text, TouchableOpacity, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import {UserContext,ProductsContext,CartsContext,CategoriesContext} from '../../../App';

export default function Liste({ label, value, placeholder, onChangeText,category,setCategory }) {
  const categoryOptions = ['Option 1', 'Option 2', 'Option 3']; // Remplacez par vos options réelles
  // const [category, setCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {APICategories, setAPICategories} = useContext(CategoriesContext);
  
  function capitalizeFirstLetter(str) {//seulement esthétique pour afficher une lettre en majuscule pour les catégories dans la liste
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <Picker style={styles.picker}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            {APICategories.map((option, index) => (
              <Picker.Item key={index} label={capitalizeFirstLetter(option)} value={option} />
            ))}
          </Picker>
  
        </View>
      </View>
    </>
  )
}