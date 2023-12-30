import React from "react";

const MenuItem = (props) => {
  return (
    <>
      <div className="w-full md:w-[400px] p-4 rounded-lg hover:bg-off cursor-pointer">
        <div className="flex flex-row">
          <div className="w-[150px]">
            <img
              src={props.imgUrl}
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full ml-4 font_poppins text-white mt-2">
            <p className="font-semibold text-base md:text-xl">CHICKEN BIRIYANI</p>
            <p className="text-normal text-sm md:text-lg">Rs 450/-</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
