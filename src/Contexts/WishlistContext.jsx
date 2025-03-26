 

import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([])

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if item already exists in wishlist
      if (prevItems.some((item) => item.id === product.id)) {
        return prevItems
      }
      return [...prevItems, product]
    })
  }

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // Clear entire wishlist
  const clearWishlist = () => {
    setWishlistItems([])
  }

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => {
  return useContext(WishlistContext)
}

