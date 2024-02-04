"use client";
import { StateContext } from "@/context/StateProvider";
import { useContext } from "react";
import { IoMdMenu } from "react-icons/io";


const MenuIcon = () => {

  const { isShow, setIsShow } = useContext(StateContext)
  const handleShowCategory = () => {
    setIsShow(true)
  }

  return (
    <div onClick={handleShowCategory} className="lg:hidden bg-white p-3 rounded-md">
      <div className="flex items-center justify-between">
        <div className="text-xl">
          <IoMdMenu />
        </div>
        <div>
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;