import React from "react";

const HeadingWithDescription = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-6 w-[35%]">
      <p
        className=" text-[40px] text-start font-semibold "
        style={{
          background: "linear-gradient(0deg, #B7B9FF -94.44%, #000352 204.63%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {heading}
      </p>
      <p className="text-[24px] font-normal text-blue-text-secondary text-start">
        {description}
      </p>
    </div>
  );
};
function ModuleDetails({ imgUrl, heading, description, index }) {
  return (
    <div className="flex gap-12 justify-center cursor-pointer">
      {index % 2 != 0 ? (
        <>
          {/* <div className="flex flex-col gap-6 w-[50%]">
            <p className=" text-[40px] text-start font-semibold text-module-heading-color">
              {heading}
            </p>
            <p className="text-[24px] font-normal text-blue-text-secondary text-start">
              {description}
            </p>
          </div> */}
          <HeadingWithDescription heading={heading} description={description} />

          <div className="w-[500px] h-[380px] rounded-[10px] shadow-[0_0_15px_1px_rgba(0,0,0,0.5)] overflow-hidden">
            <img
              src={imgUrl}
              alt=""
              className=" object-cover w-[110%] h-[105%] mb-10"
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-[500px] h-[380px] rounded-[10px] shadow-[0_0_15px_1px_rgba(0,0,0,0.5)] overflow-hidden">
            <img
              src={imgUrl}
              alt=""
              className=" object-cover w-[110%] h-[105%] mb-10"
            />
          </div>

          {/* <div className="flex flex-col gap-6 w-[50%]">
            <p className=" text-[40px] text-start font-semibold text-module-heading-color">
              {heading}
            </p>
            <p className="text-[24px] font-normal text-blue-text-secondary text-start">
              {description}
            </p>
          </div> */}
          <HeadingWithDescription heading={heading} description={description} />
        </>
      )}
    </div>
  );
}

export default ModuleDetails;
