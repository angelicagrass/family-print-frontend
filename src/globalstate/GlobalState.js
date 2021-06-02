import React, { useEffect, useState } from 'react'

export const StateContext = React.createContext(null)

export default function GlobalState({ children }) {

  const itemsInCartFromLocalStorage = () => localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const [cartItems, setCartItems] = useState(itemsInCartFromLocalStorage())
  const [animation, setAnimation] = useState(false)
  const [discount, setDiscount] = useState('')
  const [discountValue, setDiscountValue] = useState(0)
  const [sizePrice, setSizePrice] = useState(0)
  const [counter, setCounter] = useState(0)
 
  const state = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    animation: animation,
    setAnimation: setAnimation,
    discount: discount,
    setDiscount: setDiscount,
    discountValue: discountValue,
    setDiscountValue: setDiscountValue,
    sizePrice: sizePrice,
    setSizePrice: setSizePrice,
    counter: counter,
    setCounter: setCounter
  }

  useEffect(() => {
    console.log(typeof sizePrice + "sizeprice")
  }, [sizePrice])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const fetchDiscount = async () => {
      console.log(discount)
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getdiscount/${discount}`)
      res = await res.json()
      const value = 1 - (res.value / 100)
      value ? setDiscountValue(value) : setDiscountValue(0)  
    }
    fetchDiscount()
  },[discount])

  useEffect(() => {
    cartItems.map((item) => (
      setCounter(counter => counter + item.qtyInCart)
    ))  
  }, [])

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}