import React, { useEffect, useState } from 'react'

export const StateContext = React.createContext(null)

export default function GlobalState({ children }) {
  
  const itemsInCartFromLocalStorage = localStorage.getItem('itemsInCart') ? JSON.parse(localStorage.getItem('itemsInCart')) : []
  const [cartItems, setCartItems] = useState([itemsInCartFromLocalStorage])
 
  const state = {
    setCartItems: setCartItems,
    cartItems: cartItems
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}