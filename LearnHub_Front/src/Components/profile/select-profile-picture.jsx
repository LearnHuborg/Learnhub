import { useState } from "react";
import { Button } from "../Common/button";
import { CodeXWithIcon } from "../Common/codeX-with-icon";
import GirlAvatar from "@/assets/images/girl-avatar.jpeg";
import { useSelectProfile } from "./hooks/use-select-profile";

const images = [
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
  GirlAvatar,
];
export const SelectProfilePicture = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const { isLoading, profiles, setUserProfile } = useSelectProfile();
  const handleConfirm = () => {
    if (!selectedImageIndex) return;
    setUserProfile(profiles[selectedImageIndex].imageUrl);
  };
  return (
    <div className="flex flex-col gap-5 justify-center place-items-center">
      <CodeXWithIcon />

      <div
        className="w-[50%] h-[59vh] rounded-[5px] flex flex-col gap-8 justify-center place-items-center"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: blur(2),
        }}
      >
        <p className="text-[32px] text-center font-medium text-black ">
          Select profile picture!
        </p>

        <div className="flex flex-col gap-[1.5rem] items-center">
          <div className="flex flex-col gap-[1rem] items-center">
            <div className="flex gap-[1.5rem]">
              {profiles?.slice(0, 3).map((image, index) => (
                <img
                  src={image.imageUrl}
                  alt=""
                  key={image._id}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-[70px] h-[70px] rounded-[70px] cursor-pointer ${
                    selectedImageIndex === index
                      ? "border-[2px] border-solid border-[#fff]"
                      : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-[1.5rem]">
              {profiles?.slice(3, 7).map((image, index) => (
                <img
                  src={image.imageUrl}
                  alt=""
                  onClick={() => setSelectedImageIndex(3 + index)}
                  key={image._id}
                  className={`w-[70px] h-[70px] rounded-[70px] cursor-pointer ${
                    selectedImageIndex === index + 3
                      ? "border-[2px] border-solid border-[#fff]"
                      : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-[1.5rem]">
              {profiles?.slice(7, 10).map((image, index) => (
                <img
                  src={image.imageUrl}
                  alt=""
                  onClick={() => setSelectedImageIndex(7 + index)}
                  key={image._id}
                  className={`w-[70px] h-[70px] rounded-[70px] cursor-pointer ${
                    selectedImageIndex === index + 7
                      ? "border-[2px] border-solid border-[#fff]"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              text={"Confirm selection"}
              handleClick={handleConfirm}
              style={{
                fontSize: 22,
              }}
            />

            <Button
              text={"Skip"}
              style={{
                fontSize: 22,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
