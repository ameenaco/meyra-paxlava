import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

function getInitialCart() {
  const saved = localStorage.getItem('meyra_cart')
  if (saved) {
    return JSON.parse(saved)
  }
  return []
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart)

  useEffect(() => {
    localStorage.setItem('meyra_cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id)
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  function increaseQty(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  function decreaseQty(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  function clearCart() {
    setCart([])
  }

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0)

  const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalCount,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
