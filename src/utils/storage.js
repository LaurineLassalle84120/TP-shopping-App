import AsyncStorage from '@react-native-async-storage/async-storage';

//listes des fonctions utiles pour la gestion de l'asynstorage

//fonction de stockage de données dans l'asyncStorage
export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Données stockées avec succès !');
    } catch (error) {
      console.log('Erreur lors du stockage des données :', error);
    }
  };

  //fonction de récupération de données dans l'asyncStorage
  export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Valeur récupérée :', value);
        return value;
      } else {
        console.log('Aucune valeur trouvée pour la clé spécifiée.');
        return null;
      }
    } catch (error) {
      console.log('Erreur lors de la récupération des données :', error);
      return null;
    }
  };
  //fonction de suppression de données dans l'asyncStorage
  export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Données supprimées avec succès !');
    } catch (error) {
      console.log('Erreur lors de la suppression des données :', error);
    }
  };
  