import { Avatar, Skeleton } from "@mui/material";

const DuaCardSkeleton = () => {
  return (
    <div className="min-h-[350px] bg-white rounded-2xl py-4 px-7 mb-3">
      <div className="w-full flex items-center space-x-5">
        <div>
          <Skeleton variant="circular" className="bg-color-skeleton">
            <Avatar />
          </Skeleton>
        </div>
        <div className="w-3/5">
          <Skeleton animation="wave" className="bg-color-skeleton w-full h-8" />
        </div>
      </div>
      <div className="py-10 flex flex-col space-y-4">
        <Skeleton animation="wave" className="bg-color-skeleton w-full" />
        <Skeleton animation="wave" className="bg-color-skeleton w-full" />
        <Skeleton animation="wave" className="bg-color-skeleton w-4/5" />
      </div>
      <Skeleton animation="wave" className="bg-color-skeleton w-1/12" />
      <div className="flex items-center justify-between mt-8">
        <div>
          <Skeleton variant="circular" className="bg-color-skeleton">
            <Avatar />
          </Skeleton>
        </div>
        <div className="flex items-center space-x-6">
          <Skeleton animation="wave" className="bg-color-skeleton w-9 h-9" />
          <Skeleton animation="wave" className="bg-color-skeleton w-9 h-9" />
          <Skeleton animation="wave" className="bg-color-skeleton w-9 h-9" />
          <Skeleton animation="wave" className="bg-color-skeleton w-9 h-9" />
         
        </div>
      </div>
    </div>
  );
};

export default DuaCardSkeleton;