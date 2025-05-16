import { createContext, useState, useEffect  } from 'react';
import { products } from "../assets/data.js"

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const currency = 'S'
  const delivery_charges = 10

  const [search, setSearch] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})

  // Adding items to cart
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      } else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }

    setCartItems(cartData)
  }

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])


  const contextValue = { products, currency, delivery_charges, search, setSearch, showSearch, setShowSearch, addToCart }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;

