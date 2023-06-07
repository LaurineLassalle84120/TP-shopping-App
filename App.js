import React, { useState, createContext } from "react"
import Routes from './Routes';
import { SafeAreaProvider } from "react-native-safe-area-context"

export const UserContext = createContext({});//informations personnelles user
export const ProductsContext = createContext({});//catalogue produits
export const CategoriesContext = createContext({});//catégories de produits
export const CartsContext = createContext({});//liste des produit favori (favorites) du user
export const PanierContext = createContext({});//liste des produit du panier (my listings) du user
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {

  const [user, setUser] = useState();
  const [APIProducts, setAPIProducts] = useState();
  const [APICategories, setAPICategories] = useState();
  const [carts, setCarts] = useState();
  const [APIPanier, setAPIPanier] = useState();

//definition de la portée des context:
  return (
    <SafeAreaProvider>
       <PanierContext.Provider value={{ APIPanier, setAPIPanier }}>
        <CartsContext.Provider value={{ carts, setCarts }}>
          <CategoriesContext.Provider value={{ APICategories, setAPICategories }}>
            <ProductsContext.Provider value={{ APIProducts, setAPIProducts }}>
              <UserContext.Provider value={{ user, setUser }}>
                <Routes />
              </UserContext.Provider>
            </ProductsContext.Provider>
          </CategoriesContext.Provider>
        </CartsContext.Provider>
       </PanierContext.Provider>
      
    </SafeAreaProvider>
  );
}


