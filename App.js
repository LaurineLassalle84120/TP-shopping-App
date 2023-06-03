import React, { useState, createContext } from "react"
import Routes from './Routes';
import { SafeAreaProvider } from "react-native-safe-area-context"

export const UserContext = createContext({});
export const ProductsContext = createContext({});
export const CategoriesContext = createContext({});
export const CartsContext = createContext({});

export default function App() {

  const [user, setUser] = useState();
  const [APIProducts, setAPIProducts] = useState();
  const [APICategories, setAPICategories] = useState();
  const [carts, setCarts] = useState();

  return (
    <SafeAreaProvider>
      <CartsContext.Provider value={{ carts, setCarts }}>
        <CategoriesContext.Provider value={{ APICategories, setAPICategories }}>
          <ProductsContext.Provider value={{ APIProducts, setAPIProducts }}>
            <UserContext.Provider value={{ user, setUser }}>
              <Routes />
            </UserContext.Provider>
          </ProductsContext.Provider>
        </CategoriesContext.Provider>
      </CartsContext.Provider>
    </SafeAreaProvider>
  );
}


