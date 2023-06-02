import React, { useContext, useState } from 'react'
import { View, Text, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import Lien from '../../../components/lien';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../../../App'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function Product({ route }) {

  const navigation = useNavigation();

  const { title,description,image,price } = route.params;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image}/>
            <View style={styles.containerText}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.description}>{description}</Text>
              <View style={styles.button}>
                <TouchableOpacity  activeOpacity={0.6} style={styles.buttongrey}  >
                    <FontAwesome  name="heart" color="red" size={26} style={styles.heart}/>
                </TouchableOpacity >
                  <Button title="Contact Seller" disabled={true} style={{ marginTop: 20,width:200,height:60 }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  )
}
