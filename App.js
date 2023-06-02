import React, { useState, createContext } from "react"
import Routes from './Routes';
import { SafeAreaProvider } from "react-native-safe-area-context"

export const UserContext = createContext({});
export const ProductsContext = createContext({});

export default function App() {

  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  return (
    <SafeAreaProvider>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes />
        </UserContext.Provider>
      </ProductsContext.Provider>

    </SafeAreaProvider>
  );
}


