import React from "react";

const HeadingWithDescription = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-6 w-[40%]">
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

const ImageBox = ({ imgUrl }) => {
  return (
    <div className="w-[500px] h-[380px] rounded-[10px] shadow-[0_0_15px_1px_rgba(0,0,0,0.5)] overflow-hidden ursor-pointer">
      <img
        src={imgUrl}
        alt=""
        className=" object-cover w-[110%] h-[105%] mb-10"
      />
    </div>
  );
};
function ModuleDetails({ imgUrl, heading, description, index }) {
  return (
    <div className="flex gap-12 justify-center ">
      {index % 2 != 0 ? (
        <>
          <HeadingWithDescription heading={heading} description={description} />

          <ImageBox imgUrl={imgUrl} />
        </>
      ) : (
        <>
          <ImageBox imgUrl={imgUrl} />

          <HeadingWithDescription heading={heading} description={description} />
        </>
      )}
    </div>
  );
}

export default ModuleDetails;
