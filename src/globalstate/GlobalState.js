import React, { useEffect, useState } from 'react'

export const StateContext = React.createContext(null)

export default function GlobalState({ children }) {

  const itemsInCartFromLocalStorage = () => localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const [cartItems, setCartItems] = useState(itemsInCartFromLocalStorage())
  const [animation, setAnimation] = useState(false)
  const [ discount, setDiscount ] = useState('')
 
  const state = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    animation: animation,
    setAnimation: setAnimation,
    discount: discount,
    setDiscount: setDiscount
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const fetchDiscount = async () => {
      console.log(discount)
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getdiscount/${discount}`)
      res = await res.json()
   
      console.log(res)
    }
    fetchDiscount()
  },[discount])

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}