import React, { useEffect, useState } from 'react'

export const StateContext = React.createContext(null)

export default function GlobalState({ children }) {

  const itemsInCartFromLocalStorage = () => localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const [cartItems, setCartItems] = useState(itemsInCartFromLocalStorage())
  const [animation, setAnimation] = useState(false)
 
  const state = {
    setCartItems: setCartItems,
    cartItems: cartItems,
    animation: animation,
    setAnimation: setAnimation
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    console.log('ANIMERA')
  }, [animation])

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}