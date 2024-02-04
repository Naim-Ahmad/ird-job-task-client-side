import CategoryComponents from "@/components/category/CategoryComponents";
import DuaComponent from "@/components/dua-card/DuaComponent";
import LeftSideBar from "@/components/left-side-bar/LeftSideBar";
import MenuIcon from "@/components/menu icon/MenuIcon";
import Navigation from "@/components/navigation/navigation";
import RightSideBar from "@/components/right-side-bar/RightSideBar";
import StateProvider from "@/context/StateProvider";

const homePage = () => {
  return (
    <StateProvider>
      <div className="bg-[#ebeef2] text-[#393939] p-2 md:pt-4 md:pb-2 md:px-4 h-[100svh]  md:grid grid-cols-12 gap-5 grid-rows-12 overflow-y-scroll">
        <div className="md:col-span-1 md:row-span-12  bg-white rounded-t-2xl md:rounded-xl fixed bottom-0 md:relative  left-0 justify-center md:w-auto z-10">
          <LeftSideBar />
        </div>
        <div className="col-span-11 h-[50px] row-span-1">
          <Navigation />
        </div>
        <div className="col-span-3 row-span-12 my-5">
          <MenuIcon />
          <CategoryComponents />
        </div>
        <div
          className="col-span-6 md:mx-2 rounded-md row-span-12 overflow-y-auto max-h-[100vh] my-5"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#a8a8a8 #f1f1f1" }}
        >
          <DuaComponent />
        </div>

        <div className="col-span-2 row-span-11 bg-white rounded-xl p-2 mt-5 hidden md:block">
          <RightSideBar />
        </div>
      </div>
    </StateProvider>
  );
};

export default homePage;
