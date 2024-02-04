import Image from "next/image";
import img1 from "../../assets/language.svg";
import img2 from "../../assets/general.svg";
import img3 from "../../assets/Group 266.jpg";
import img4 from "../../assets/alldua.svg";
import img5 from "../../assets/alldua-Copy.svg";

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-3 h-full ">
      <div>
        <p className="text-center font-semibold text-[#393939] mb-1">
          Settings
        </p>
      </div>
      <div className="flex items-center gap-1 bg-[#F7F8FA] rounded-md p-2">
        <div>
          <Image
            src={img1}
            className="bg-[#e8f0f5] rounded-full p-1"
            alt="image"
          />
        </div>
        <div>
          <p
            className="text-[#868686] font-normal text-sm
                "
          >
            Language Settings
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-[#F7F8FA] rounded-md p-2">
        <div>
          <Image
            src={img2}
            className="bg-[#e8f0f5] rounded-full p-1"
            alt="image"
          />
        </div>
        <div>
          <p
            className="text-[#868686] font-normal text-sm
                "
          >
            General Settings
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-[#F7F8FA] rounded-md p-2">
        <div className="bg-[#e8f0f5] p-2 rounded-full">
          <Image src={img4} className=" h-3 w-3" alt="image" />
        </div>
        <div>
          <p
            className="text-[#868686] font-normal text-sm
                "
          >
            Font Settings
          </p>
        </div>
      </div>
      <div className="border rounded-t-md">
        <div className="flex items-center gap-1 border-l-4 border-[#1FA45B] bg-[#F7F8FA] rounded-t-md rounded-l-md p-2">
          <div className="bg-[#e8f0f5] p-2 rounded-full">
            <Image src={img5} className=" h-3 w-3" alt="image" />
          </div>
          <div>
            <p
              className="text-[#1FA45B] font-normal text-xs
                "
            >
              Appearance Settings
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full gap-1 mt-4 p-2">
          <div>
            <p
              className="text-[#868686] font-normal text-xs
                "
            >
              Night Mode
            </p>
          </div>
          <div>
            <Image
              src={img3}
              className="bg-[#e8f0f5] rounded-full p-1"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
