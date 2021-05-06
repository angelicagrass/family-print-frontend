import React, { useEffect, useState } from 'react'

export const StateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const initialQty = () => Number(localStorage.getItem('qtyInCart') || 0)
  // const initialItems = () => JSON.parse(localStorage.getItem('cartItems')) || []

  const itemsInCartFromLocalStorage = () => localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const [cartItems, setCartItems] = useState(itemsInCartFromLocalStorage())
 
  const state = {
    setCartItems: setCartItems,
    cartItems: cartItems,
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