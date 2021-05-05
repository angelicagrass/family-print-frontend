import React, { useEffect, useState } from 'react'

export const StateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const initialQty = Number(localStorage.getItem('qtyInCart') || 0)
  
  const itemsInCartFromLocalStorage = localStorage.getItem('itemsInCart') ? JSON.parse(localStorage.getItem('itemsInCart')) : []
  const [cartItems, setCartItems] = useState([itemsInCartFromLocalStorage])
  const [qty, setQty] = useState(initialQty)
  
 
  const state = {
    setCartItems: setCartItems,
    cartItems: cartItems,
    setQty: setQty,
    qty: qty
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("qtyInCart", qty)

  }, [qty])

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}