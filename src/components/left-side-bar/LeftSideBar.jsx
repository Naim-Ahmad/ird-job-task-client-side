import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import img2 from "../../assets/alldua.svg";
import img4 from "../../assets/bookmark.svg";
import img7 from "../../assets/books.svg";
import img8 from "../../assets/bxs_donate-heart.svg";
import img6 from "../../assets/dua-info.svg";
import img1 from "../../assets/home.svg";
import img3 from "../../assets/memorize.svg";
import img5 from "../../assets/ruqyah.svg";
import img9 from "../../assets/unnamed 1.jpg";

const LeftSideBar = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="flex md:flex-col md:justify-between rounded-xl h-full py-3">
      <div className="hidden md:block">
        <Image alt="image" className="" src={img9} />
      </div>
      <div className="flex md:flex-col gap-3 w-[100vw] md:w-auto justify-evenly md:gap-4 mx-auto rounded-t-2xl md:rounded-none px-3 md:px-0">
        {images.map((img) => (
          <p className="bg-[#e8f0f5] py-2 rounded-full w-8 md:mx-auto" key={uuidv4()}>
            <Image className="mx-auto  h-4 w-4" alt="image" src={img} />
          </p>
        ))}
      </div>
      <div className="hidden md:block">
        <Image
          alt="image"
          className="bg-[#1ea65a] mx-auto p-3 h-16 w-16 rounded-lg"
          src={img8}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
