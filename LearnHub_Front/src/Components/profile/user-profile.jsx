import { CodeXWithIcon } from "../Common/codeX-with-icon";
import GirlAvatar from "@/assets/images/girl-avatar.jpeg";
import GoldCoin from "@/assets/icons/gold_coin_icon.svg";

const CommonPlayedCountBox = ({ label, count }) => {
  return (
    <div
      className="p-3 flex flex-col gap-3"
      style={{
        borderRadius: "5px",
        background: "rgba(255, 255, 255, 0.20)",
        backdropFilter: blur(2.5),
      }}
    >
      <p className="text-[14px] text-center  font-normal text-black">{label}</p>

      <div
        className="w-[140px] text-center text-[40px] font-medium text-black p-2"
        style={{
          borderRadius: "5px",
          background: "rgba(255, 255, 255, 0.25)",
        }}
      >
        {count}
      </div>
    </div>
  );
};

export const UserProfile = () => {
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
          Your Profile!
        </p>

        <div
          className="flex w-[70%] justify-between items-center p-3"
          style={{
            borderRadius: "5px",
            background: "rgba(255, 255, 255, 0.20)",
          }}
        >
          <div className="flex gap-2">
            <img
              src={GirlAvatar}
              alt=""
              className="w-[72px] h-[72px] rounded-[72px]"
            />

            <div className="flex flex-col gap-2">
              <p className="text-[22px] font-semibold text-black ">Username</p>
              <button
                className="text-[12px] font-semibold text-white rounded-full w-fit p-1 pl-2 pr-2"
                style={{
                  background:
                    "linear-gradient(91deg, #0070CB 0.42%, #008BFF 48.92%, #0070CB 98.51%)",
                }}
              >
                Novice
              </button>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-1">
              <p
                className="text-[16px] font-bold text-[#E5A900]"
                style={{
                  textShadow: "0px 0px 10px rgba(255, 242, 242, 0.50)",
                }}
              >
                Total Coins!
              </p>

              <div
                className="text-[36px] font-bold text-white text-center "
                style={{
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: blur("2.5px"),
                  textShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                80
              </div>
            </div>

            <div
              style={{
                borderRadius: "5px",
                padding: "0.5rem",
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: blur(2.5),
              }}
            >
              <img src={GoldCoin} alt="" />
            </div>
          </div>
        </div>

        <div
          className="w-[70%] flex justify-between p-3"
          style={{
            borderRadius: "5px",
            background: "rgba(255, 255, 255, 0.20)",
          }}
        >
          <CommonPlayedCountBox label={"Code Practice!"} count={15} />
          <CommonPlayedCountBox label={"Code Practice!"} count={15} />
          <CommonPlayedCountBox label={"Code Practice!"} count={15} />
        </div>
      </div>
    </div>
  );
};
