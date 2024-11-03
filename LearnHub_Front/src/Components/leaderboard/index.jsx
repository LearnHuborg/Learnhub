import { CodeXWithIcon } from "../Common/codeX-with-icon";
import GoldCoin from "@/assets/icons/gold_coin_icon.svg";
import { UserProfilePicture } from "../Common/user-profile-picture";
import { useLeaderBoardData } from "./hook/use-leader-board";
import { getDays, LEVEL_COLOR } from "../../utils/utils";

const UserDetails = ({ imgUrl, username, level, coins, date, rank }) => {
  const rankBgColor =
    rank === 1
      ? "rgba(255, 202, 53, 0.50)"
      : rank === 2
      ? "rgba(183, 185, 255, 0.50)"
      : rank === 3
      ? "rgba(59, 176, 53, 0.50)"
      : "rgba(255, 255, 255, 0.30)";
  const rankTextColor =
    rank === 1
      ? "#FFBB00"
      : rank === 2
      ? "#545CAD"
      : rank === 3
      ? "#3BB035"
      : "#AEAEAE";
  return (
    <div
      className="flex items-center justify-between gap-3"
      style={{
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "70px",
        background: "rgba(255, 255, 255, 0.30)",
      }}
    >
      <div className="flex gap-5">
        <UserProfilePicture src={imgUrl} level={level} />

        <div className="flex flex-col gap-2">
          <p className="text-[22px] font-semibold text-black ">{username}</p>
          <button
            className="text-[12px] font-semibold text-white rounded-full w-fit p-1 pl-2 pr-2 cursor-default"
            style={{
              background: LEVEL_COLOR[level],
            }}
          >
            {level}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1">
        <div className="flex flex-col gap-1">
          <div
            className="flex p-[0.2rem] items-center justify-center gap-2"
            style={{
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.30)",
            }}
          >
            <img src={GoldCoin} alt="" width={24} height={24} />
            <p className="text-[24px] font-bold text-[#FFBC00]">{coins}</p>
          </div>

          <div
            className="flex items-center justify-center"
            style={{
              padding: "0.3rem 0.8rem 0.3rem 0.8rem",
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.30)",
            }}
          >
            <p className="text-[24px] font-bold text-[#545CAD]">
              {getDays(date) || 0} Days
            </p>
          </div>
        </div>

        <div
          className="w-[100px] h-[100px] p-3 flex items-center justify-center  rounded-[50%]"
          style={{
            backgroundColor: rankBgColor,
          }}
        >
          <p
            className="text-[64px] font-bold"
            style={{
              color: rankTextColor,
            }}
          >
            {rank}
          </p>
        </div>
      </div>
    </div>
  );
};
export const LeaderBoard = () => {
  const { profiles } = useLeaderBoardData();

  return (
    <div className="flex flex-col gap-5 justify-center place-items-center">
      <CodeXWithIcon />

      <div
        className="w-[50%] rounded-[5px] flex flex-col gap-8 justify-center place-items-center"
        style={{
          padding: "2rem 0 2rem 0",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: blur(2),
        }}
      >
        <p className="text-[32px] text-center font-medium text-black ">
          Leaderboard!
        </p>

        <div
          style={{
            width: "80%",
            padding: "1rem",
            borderRadius: "50px",
            background: "rgba(183, 185, 255, 0.25)",
          }}
        >
          <div className="flex flex-col gap-2">
            {profiles.map((item, index) => (
              <UserDetails
                imgUrl={item.profileUrl}
                username={item.username}
                level={item.profileLevel.label}
                coins={item.coins}
                date={item.levelUpHistory[0]?.date}
                rank={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
