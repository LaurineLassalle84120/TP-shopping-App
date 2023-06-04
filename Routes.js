import React, { useContext, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './src/screens/auth/SplashScreen';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Home from './src/screens/app/Home';
import { UserContext } from './App';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import Product from './src/screens/app/Product';
import Settings from './src/screens/app/Settings';
import Panier from './src/screens/app/Panier';
import NewProduct from './src/screens/app/NewProduct';
import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
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
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
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
              options={{ title: 'SignIn' }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: 'SignUp' }}
            />
          </>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;