import Image from "next/image";
import img1 from "../../assets/profile.svg";
import img2 from "../../assets/Polygon 2.jpg";
import { IoSearchOutline } from "react-icons/io5";

const Navigation = () => {
  return (
    <div className="grid grid-cols-2 items-center ">
      <div className="col-span-1">
        <p className="text-[#393939] text-xl font-semibold">Dua Page</p>
      </div>
      <div className="md:grid grid-cols-5 items-center">
        <div className="col-span-3 hidden md:block">
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
          <Image src={img1} alt="image" />
          <Image src={img2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
