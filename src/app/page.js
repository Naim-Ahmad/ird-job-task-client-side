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
      <div className="bg-[#ebeef2] text-[#393939] p-2 lg:pt-4 lg:pb-2 lg:px-4 lg:h-[100svh]  lg:grid grid-cols-12 gap-5 grid-rows-12 overflow-y-scroll">
        <div className="lg:col-span-1 lg:row-span-12  bg-white rounded-t-2xl lg:rounded-xl fixed bottom-0 lg:relative  left-0 justify-center lg:w-auto z-10">
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
          className="col-span-6 lg:mx-2 rounded-md row-span-12 overflow-y-auto lg:max-h-[100vh] lg:my-5"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#a8a8a8 #f1f1f1" }}
        >
          <DuaComponent />
        </div>

        <div className="col-span-2 row-span-11 bg-white rounded-xl p-2 mt-5 hidden lg:block">
          <RightSideBar />
        </div>
      </div>
    </StateProvider>
  );
};

export default homePage;
