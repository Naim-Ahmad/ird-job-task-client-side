"use client";
/* eslint-disable react/no-unescaped-entities */
import { StateContext } from "@/context/StateProvider";
import { useContext, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import CategoryCard from "./CategoryCard";
import CategoryCardSkeleton from "./Skeletion";


const CategoryComponents = () => {
  const { getCategories, isLoading, categories, selectedCategory, getSubCategories, isShow, subcategories, setIsShow } =
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
      className={`lg:relative transition-all ease-linear duration-500 absolute top-0 lg:mb-0 mb-0 rounded-lg bg-white ${isShow ? "-left-1" : " lg:-translate-x-0 -translate-x-[500px]"
        }`}
    >
      <div className="lg:rounded-t-md bg-[#1fa45b] flex lg:block items-center justify-between p-2 px-3">
        <p className={`text-white font-semibold text-center py-3`}>
          Categories
        </p>
        {isShow && (
          <div onClick={() => setIsShow(false)} className="lg:hidden">
            <MdClose color="white" size={25} />
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
     {
      isLoading ? <div className="overflow-y-auto h-full lg:h-[67vh] overflow-hidden mb-12 lg:mb-0"><CategoryCardSkeleton/></div> :  <div
      className="overflow-y-auto h-full lg:h-[67vh] overflow-hidden mb-12 lg:mb-0"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#a8a8a8 #f1f1f1" }}
    >
      {
       isLoading ? <div className="flex flex-col"><CategoryCardSkeleton/> <CategoryCardSkeleton/> <CategoryCardSkeleton/><CategoryCardSkeleton/></div> : categories.map((category, ind) => (
          <CategoryCard key={ind} ind={ind + 1} category={category} subcategories={subcategories.subcategories} />
        ))
      }
    </div>
     }
    </div>
  );
};

export default CategoryComponents;
