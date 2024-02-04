"use client"
import { StateContext } from "@/context/StateProvider";
import localFont from "next/font/local";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import DuaCard from "./DuaCard";
const meQuran = localFont({
  src: [
    { path: "../../assets/me_quran Regular/me_quran Regular.ttf", weight: "400" },
  ],
  variable: "--font-me_quran",
});

const DuaComponent = () => {

  const { subcategories } = useContext(StateContext) || {}

  // console.log(subcategories.subcategories)

  return (
    <div className="mb-44 md:mb-0 text-sm rounded-md overflow-hidden">
      {
        subcategories?.subcategories?.map(subCategory => (
          <>
            <div id={subCategory.cat_id} key={subCategory.subcat_id} className="bg-white mb-2 rounded-md">
              <p className=" p-3 px-5 font-semibold">
                <span className="text-[#1FA45B] font-semibold">Section:</span> The
                {subCategory?.subcat_name_en}
              </p>
            </div>


           {
            subcategories?.doa?.filter(d=> d.subcat_id === subCategory.subcat_id)?.map((d, ind) => <DuaCard key={uuidv4()} ind={ind + 1} doa={d}  />)
            }
          </>
        ))
      }

    </div>
  );
};

export default DuaComponent;