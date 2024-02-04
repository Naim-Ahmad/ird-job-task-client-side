"use client";
import azan_ikamot from "@/assets/azan_ikamot.svg";
import bari from "@/assets/bari.svg";
import dua_kobuler_somoy from "@/assets/dua_kobuler_somoy.svg";
import duar_gurutto from "@/assets/duar_gurutto.svg";
import ghum from "@/assets/ghum.svg";
import jader_dua_kobul_hoy from "@/assets/jader_dua_kobul_hoy.svg";
import poshak from "@/assets/poshak.svg";
import sokal_sondha from "@/assets/sokal_sondha.svg";
import toilet from "@/assets/toilet.svg";
import zikirer_fozilot from "@/assets/zikirer_fozilot.svg";
import { StateContext } from "@/context/StateProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import SubCategory from "./SubCategory";

const images = {
  dua_kobuler_somoy,
  duar_gurutto,
  zikirer_fozilot,
  jader_dua_kobul_hoy,
  sokal_sondha,
  ghum,
  poshak,
  bari,
  toilet,
  azan_ikamot
}

export default function CategoryCard({ category, ind }) {
  const { cat_id, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = category || {};
  // console.log(subcategory)
  const { selectedCategory, setSelectedCategory, setSelectedSubCategory } = useContext(StateContext)

  const handleToggle = () => {
    setSelectedCategory(ind);
    setSelectedSubCategory(1);
  };

  return (
    <div className={`transition-height group ease-in-out bg-white duration-1000 ${selectedCategory === ind ? "h-[auto]" : "h-20"} my-2 `}>

      {/* category clickable card */}
      <Link href={`#duaSec1`} onClick={handleToggle} className={`grid grid-cols-6 ${selectedCategory === ind && 'bg-[#e8f0f5]'} p-2 cursor-pointer rounded-md mx-2 hover:bg-[#e8f0f5]`}>
        <div className="col-span-5 flex items-center gap-2">
          <div className="p-3 rounded-md bg-[#f7f8fa]">
            <Image src={images[cat_icon]} alt="image" />
          </div>
          <div className="flex flex-col">
            <p>{cat_name_en}</p>
            <p className="text-xs">SubCategory: {no_of_subcat}</p>
          </div>
        </div>

        <div className={`${selectedCategory === ind && "border-l-0"} border-l-2 group-hover:border-l-0 col-span-1 px-1 text-center mt-2`}>
          <p>{no_of_dua}</p>
          <p className="text-[#989b9c]">Dua</p>
        </div>
      </Link>

      {/* show sub category of selected category */}
      {selectedCategory === ind && <SubCategory catId={cat_id} />}
    </div>
  );
}
