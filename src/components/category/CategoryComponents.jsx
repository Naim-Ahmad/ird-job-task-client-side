"use client";
/* eslint-disable react/no-unescaped-entities */
import { StateContext } from "@/context/StateProvider";
import { useContext, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import CategoryCard from "./CategoryCard";


const CategoryComponents = () => {
  const { getCategories, categories, selectedCategory, getSubCategories, isShow, subcategories, setIsShow } =
    useContext(StateContext);
  // console.log(categories)
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getSubCategories(selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      className={`md:relative absolute top-0 md:mb-0 mb-0 rounded-lg bg-white ${isShow ? "left-0" : " md:-translate-x-0 -translate-x-[500px]"
        }`}
    >
      <div className="rounded-t-md bg-[#1fa45b] flex md:block items-center justify-between p-2">
        <p className={`text-white font-semibold text-center py-3`}>
          Categories
        </p>
        {isShow && (
          <div onClick={() => setIsShow(false)} className="md:hidden">
            <ImCross color="white" size={20} />
          </div>
        )}
      </div>
      <div className="flex items-center bg-white p-3 border m-2 rounded-lg">
        <div className="text-xl">
          <IoSearchOutline />
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search by category"
          className="w-full pl-4 focus:border-none focus:outline-none text-sm"
        />
      </div>

      {/* category list */}
      <div
        className="overflow-y-auto h-full md:h-[67vh] overflow-hidden mb-12 md:mb-0"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#a8a8a8 #f1f1f1" }}
      >
        {
          categories.map((category, ind) => (
            <CategoryCard key={ind} ind={ind + 1} category={category} subcategories={subcategories.subcategories} />
          ))
        }
      </div>
    </div>
  );
};

export default CategoryComponents;
