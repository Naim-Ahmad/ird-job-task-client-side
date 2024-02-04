"use client";
import { StateContext } from "@/context/StateProvider";
import { useContext } from "react";
import { IoMdMenu } from "react-icons/io";


const MenuIcon = () => {

    const {isShow, setIsShow} = useContext(StateContext)
    const handleShowCategory = () => {
        setIsShow(true)
    }

    return (
        <div className="md:hidden bg-white p-3 rounded-md">
            <div className="flex items-center justify-between">
              <div onClick={handleShowCategory} className="text-xl">
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