import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import img2 from "../../assets/Polygon 2.jpg";
import profile from "../../assets/profile.svg";

const Navigation = () => {
  return (
    <div className="grid grid-cols-2 items-center ">
      <div className="col-span-1">
        <p className="text-[#393939] text-xl font-semibold">Dua Page</p>
      </div>
      <div className="lg:grid grid-cols-5 items-center">
        <div className="col-span-3 hidden lg:block">
          <div className="flex items-center bg-white border rounded-lg">
            <input
              type="search"
              name=""
              placeholder="Search by Dua Name"
              className="w-full focus:border-none focus:outline-none text-sm pl-9"
              id=""
            />
            <div className="text-xl rounded-md bg-[#f3f4f6] p-3 m-1">
              <IoSearchOutline />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 justify-end col-span-2">
          <Image src={profile} alt="image" />
          <Image src={img2} alt="image" />
          <div className="flex items-center gap-1 justify-end col-span-2 ml-2">
            <FaGear color="#1fa45b" size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
