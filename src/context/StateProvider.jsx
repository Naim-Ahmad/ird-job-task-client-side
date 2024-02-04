"use client"

import { createContext, useState } from "react";

export const StateContext = createContext()

export default function StateProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [selectedSubCategory, setSelectedSubCategory] = useState(1)
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState({})
  const [isShow, setIsShow] = useState(false)

  const getCategories = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();
    setCategories(data)
  }

  const getSubCategories = async () => {
    const res = await fetch(`http://localhost:5000/subcategories?cat=${selectedCategory}`);
    const data = await res.json();
    setSubcategories(data)
  }

  const stateData = {
    getCategories,
    categories,
    getSubCategories,
    subcategories,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    isShow,
    setIsShow,
  }

  return (
    <StateContext.Provider value={stateData}>{children}</StateContext.Provider>
  )
}