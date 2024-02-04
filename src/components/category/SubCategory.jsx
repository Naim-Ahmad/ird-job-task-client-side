"use client";
import { StateContext } from "@/context/StateProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import arrowDua from "../../assets/duaarrow.svg";

export default function SubCategory({ catId }) {
  const {
    subcategories,
    setSelectedSubCategory,
    selectedSubCategory,
    setIsShow,
  } = useContext(StateContext);
  

  return (
    <ul onClick={() => setIsShow(false)} className="ml-10 list-disc mt-3 border-dotted border-l-[3px] border-[#1fa45b] text-xs">
      {
      subcategories?.subcategories?.map((subcategory, ind) => (
        <>
          <Link
            href={`#duaSec${ind + 1}`}
            onClick={() => setSelectedSubCategory(subcategory.subcat_id)}
            key={uuidv4()}
            className="py-3 flex hover:text-[#1fa45b] cursor-pointer font-semibold text-md items-center gap-2 -ml-[5px]"
          >
            <div className="bg-[#1fa45b] w-2 h-2 rounded-full"></div>
            {subcategory.subcat_name_en}
          </Link>
          {selectedSubCategory === subcategory.subcat_id && (
            <div>
              {subcategories.doa.map((d) => {
                if (d.subcat_id === subcategory.id && d.dua_name_en) {
                  return (
                    <Link
                      href={`#${d.dua_name_en}`}
                      className="flex items-center ml-2 gap-2 my-2 cursor-pointer hover:text-[#1fa45b]"
                      key={d.id}
                    >
                      <Image src={arrowDua} alt={d.subcat_id} />
                      {d.dua_name_en}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </>
      ))
      }
    </ul>
  );
}
