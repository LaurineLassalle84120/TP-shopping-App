import React, { useContext, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import SplashScreen from './src/screens/auth/SplashScreen';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import Product from './src/screens/app/Product';
import Settings from './src/screens/app/Settings';
import Panier from './src/screens/app/Panier';
import NewProduct from './src/screens/app/NewProduct';
//Context
import { UserContext } from './App';
//Icons
import { FontAwesome } from '@expo/vector-icons';
//Utils
import { colors } from '../TP-shopping-App/src/utils/colors';

const Tab = createBottomTabNavigator();//créer les onglets et les composants à afficher pour chaque onglet
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
    
        headerShown:false
      }}
      tabBarOptions={{
        activeTintColor: '#4F63AC', // Couleur des icônes des onglets actifs
      }}
    >
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome  name="home" color={color} size={26} />
        )
      }} name="Home" component={Home} />

      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome  name="bookmark" color={color} size={26} />
        )
      }} name="Favorites" component={Favorites} />

      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome  name="user" color={color} size={26} />
        )
      // }} name="Profile" component={Profile} />
      }} name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen //sous menu du bouton profile
        name="Profile"
        component={Profile}
        options={{  headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{  headerShown: false }}
      />
      <Stack.Screen
        name="Panier"
        component={Panier}
        options={{  headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const Routes = () => {

  const {user} = useContext(UserContext);
// console.log("********user",user)
// console.log("********type",typeof user)
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        {
        user ?
         ( <>
            <Stack.Screen
              name="MyTabs"
              component={MyTabs}
              options={{ title: 'MyTabs', headerShown: false }}
            />
             <Stack.Screen
              name="Product"
              component={Product}
              options={{  headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{  headerShown: false }}
            />
            <Stack.Screen
              name="NewProduct"
              component={NewProduct}
              options={{  headerShown: false }}
            />
            <Stack.Screen
              name="Panier"
              component={Panier}
              options={{  headerShown: false }}
            />

          </>):
          (<>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ title: 'SplashScreen', headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: 'Sign In',
              headerTintColor: colors.blue, // Couleur du texte de l'en-tête
              headerTitleStyle: {
                fontWeight: 'bold', // Style du texte de l'en-tête
                fontSize:26
              },
               }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: 'Sign Up',
              headerTintColor: colors.blue, // Couleur du texte de l'en-tête
              headerTitleStyle: {
                fontWeight: 'bold', // Style du texte de l'en-tête
                fontSize:26
              },
               }}
            />
          </>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;