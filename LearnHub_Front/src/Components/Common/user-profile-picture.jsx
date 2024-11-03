import { LEVEL_COLOR_HEX } from "../../utils/utils";

export const UserProfilePicture = ({ src, level }) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        borderColor: LEVEL_COLOR_HEX[level],
      }}
      className={`w-[72px] p-[0.19rem] h-[72px] rounded-[72px] border-[3px] border-solid`}
    />
  );
};
