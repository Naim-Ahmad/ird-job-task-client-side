"use client"
import gotoTop from "@/assets/go_to_top.svg";
import { StateContext } from "@/context/StateProvider";
import localFont from "next/font/local";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DuaCard from "./DuaCard";
import DuaCardSkeleton from "./DuaCardSkelletion";

const meQuran = localFont({
  src: [
    { path: "../../assets/me_quran Regular/me_quran Regular.ttf", weight: "400" },
  ],
  variable: "--font-me_quran",
});

const DuaComponent = () => {

  const { subcategories, isLoading } = useContext(StateContext) || {}
  const [isShow, setIsShow] = useState(false)

  // console.log(subcategories.subcategories)
  useEffect(() => {

   const unsubscribe =  window.addEventListener('scroll', (e) => {
      // console.log(window.scrollY)
      if (window.scrollY > 250) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    })
    return ()=> window.removeEventListener("scroll", unsubscribe)
  }, [])

  const handleGotoTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (isLoading) return <><DuaCardSkeleton /><DuaCardSkeleton /></>

  return (
    <div className="lg:mb-44 mb-0 text-sm rounded-md overflow-hidden">
      {
        isShow && <div onClick={handleGotoTop} className="lg:hidden fixed cursor-pointer bottom-20 right-10">
          <Image src={gotoTop} alt="image"/>
        </div>
      }
      {
        subcategories?.subcategories?.map((subCategory, ind) => (
          <>
            <div id={`duaSec${ind + 1}`} key={subCategory.subcat_id} className="bg-white mb-2 rounded-md">
              <p className=" p-3 px-5 font-semibold">
                <span className="text-[#1FA45B] font-semibold">Section:</span> The
                {subCategory?.subcat_name_en}
              </p>
            </div>

            
            {
              subcategories?.doa?.filter(d => d.subcat_id === subCategory.subcat_id)?.map((d, ind) => <DuaCard key={uuidv4()} ind={ind + 1} doa={d} />)
            }
          </>
        ))
      }

    </div>
  );
};

export default DuaComponent;