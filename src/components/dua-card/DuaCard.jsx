"use client"
import { Tooltip } from "@mui/material";
import localFont from "next/font/local";
import Image from "next/image";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import bookmarkBtn from "../../assets/bookmark.svg";
import copyBtn from "../../assets/copy.svg";
import duaCard from "../../assets/duacard.svg";
import memorizeBtn from "../../assets/plan.svg";
import reportBtn from "../../assets/report.svg";
import shareBtn from "../../assets/share.svg";
import Audio from "./Audio";

const meQuran = localFont({
  src: [
    { path: "../../assets/me_quran Regular/me_quran Regular.ttf", weight: "400" },
  ],
  variable: "--font-me_quran",
});


export default function DuaCard({ doa, ind }) {

  const { id, cat_id, subcat_id, dua_id, dua_name_bn, dua_name_en, top_bn, top_en, dua_arabic, dua_indopak, clean_arabic, transliteration_bn, transliteration_en, translation_bn, translation_en, bottom_bn, bottom_en, refference_bn, refference_en, audio } = doa || {};

  const audioRef = useRef()

  const handleCopy = () => {
    const duwaName = dua_name_en ? dua_name_en : ""
    const topEn = top_en ? top_en : "";
    const duaArabic = dua_arabic ? dua_arabic : ""
    const transliteration = transliteration_en ? transliteration_en : ""
    const translation = translation_en ? translation_en : ""
    const refference = refference_en ? refference_en : ""

    const text = `${duwaName}
              ${topEn}
              ${duaArabic}
              Transliteration: ${transliteration}
              Translation: ${translation}
              Reference: ${refference}
              `
    // console.log(text)
    window.navigator.clipboard.writeText(text)
    toast.success("Copied")
  }

  return (
    <div className="rounded-md">
      <Toaster />
      <div id={ind} className="bg-white mb-6  rounded-md p-3 lg:px-5">
        <div id={dua_name_en} className="flex items-center gap-2 pb-6">
          <Image src={duaCard} alt="" />
          <p className="text-[#1FA45B] font-semibold">
            {dua_name_en}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {top_en && <p className="text-justify font-normal">
            {top_en}
          </p>}

          {/* doa arabic */}
          {
            dua_arabic && <p
              className={`text-2xl font-medium py-3 text-right leading-loose ${meQuran.className}`}
            >
              {dua_arabic}
            </p>
          }

          {/* transliteration */}
          {
            transliteration_en && <p className="text-justify font-normal">
              <span className="font-semibold">Transliteration:</span> {transliteration_en}
            </p>
          }

          {/* translation */}
          {
            translation_en && <p className="text-justify font-normal">
              <span className="font-semibold">Translation:</span>{translation_en}
            </p>
          }
          <p className="flex flex-col">
            <span className="text-[#1FA45B] font-semibold">Reference:</span>
            <span>{refference_en}</span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-3 mb-2 mt-5">
          {audio ? <Audio audio={audio}/> : <div></div>}
          
          <div className="flex justify-center gap-3 lg:gap-8">

            <Tooltip title="Copy" placement="top" arrow>
              <button onClick={handleCopy} className="cursor-pointer"><Image src={copyBtn} alt="image" /></button>
            </Tooltip>

            <button tooltip="something" className="cursor-pointer"><Image src={bookmarkBtn} alt="image" /></button>
            <button className="cursor-pointer"><Image src={memorizeBtn} alt="image" /></button>
            <button className="cursor-pointer"><Image src={shareBtn} alt="image" /></button>
            <button className="cursor-pointer"><Image src={reportBtn} alt="image" /></button>
          </div>
        </div>
      </div>
    </div >
  )
}
