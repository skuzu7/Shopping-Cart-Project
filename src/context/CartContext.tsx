// CartProvider.tsx

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  priceId: string
}

interface CartContextType {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  getTotalPrice: () => number // Adicione o tipo para a função getTotalPrice
  isCartOpen: boolean
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addItem: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeItem: () => {},
  isCartOpen: false,

  getTotalPrice: function (): number {
    throw new Error('Function not implemented.')
  },
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const removeItem = (itemId: string) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId)
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems]
      updatedItems.splice(itemIndex, 1)
      setCartItems(updatedItems)
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        isCartOpen,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
