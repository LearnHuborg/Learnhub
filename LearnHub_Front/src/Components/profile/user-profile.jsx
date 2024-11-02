import { CodeXWithIcon } from "../Common/codeX-with-icon";
import GoldCoin from "@/assets/icons/gold_coin_icon.svg";
import { Slider, styled } from "@mui/material";
import { Button } from "../Common/button";
import { useProfileData } from "./hooks/use-profile";

import {
  coinsToGo,
  getUserRank,
  LEVEL_COLOR,
  LEVEL_COLOR_HEX,
} from "../../utils/utils";
import { useLeaderBoardData } from "../leaderboard/hook/use-leader-board";
import { useEffect, useState } from "react";
import { useDailyQuote } from "./hooks/use-daily-quote";

const CustomSlider = styled(Slider)({
  background: "#B7B9FF",
  borderRadius: 50,
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-track": {
    height: 28,
    color: "#353FB0",
  },
  "& .MuiSlider-rail": {
    color: "transparent",
  },
});

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
  const { profile, isLoading } = useProfileData();
  const { profiles } = useLeaderBoardData();
  const { quote } = useDailyQuote();
  const [nextLevel, setNextLevel] = useState(null);
  const [rank, setRank] = useState(0);
  const [currentCoins, setCurrentCoins] = useState(0);

  useEffect(() => {
    if (profile && profiles) {
      setRank(getUserRank(profiles, profile._id));
      setCurrentCoins(profile.coins);
      setNextLevel(coinsToGo(profile.coins));
    }
  }, [profiles, profile]);

  return (
    <div className="flex flex-col gap-5 justify-center place-items-center">
      <CodeXWithIcon />
      <div
        className="w-[50%] rounded-[5px] flex flex-col gap-4 justify-center place-items-center pt-2 pb-5"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: blur(2),
        }}
      >
        <p className="text-[32px] text-center font-medium text-black pb-5 pt-3">
          Your Profile!
        </p>

        <div
          className="flex w-[75%] justify-between items-center p-3"
          style={{
            borderRadius: "5px",
            background: "rgba(255, 255, 255, 0.20)",
          }}
        >
          <div className="flex gap-2">
            <img
              src={profile?.profileUrl}
              alt=""
              style={{
                borderColor: LEVEL_COLOR_HEX[profile?.profileLevel?.label],
              }}
              className={`w-[72px] p-[0.19rem] h-[72px] rounded-[72px] border-[3px] border-solid`}
            />

            <div className="flex flex-col gap-2">
              <p className="text-[22px] font-semibold text-black ">
                {profile?.username}
              </p>
              <button
                className="text-[12px] font-semibold text-white rounded-full w-fit p-1 pl-2 pr-2 cursor-default"
                style={{
                  background: LEVEL_COLOR[profile?.profileLevel?.label],
                }}
              >
                {profile?.profileLevel?.label}
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
                {profile?.coins}
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
          className="w-[75%] flex justify-around p-3"
          style={{
            borderRadius: "5px",
            background: "rgba(255, 255, 255, 0.20)",
          }}
        >
          <CommonPlayedCountBox
            label={"Code Practice!"}
            count={profile?.modules?.code}
          />
          <CommonPlayedCountBox
            label={"Quiz!"}
            count={profile?.modules?.quiz}
          />
          <CommonPlayedCountBox
            label={"Typing Practice!"}
            count={profile?.modules?.typing}
          />
        </div>

        <div className="flex gap-3 w-[75%]">
          <div
            className="flex flex-col gap-3 p-4 w-[50%]"
            style={{
              borderRadius: "5px",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <div className="flex items-center gap-5">
              <div
                className="flex items-center justify-center w-[100%]"
                style={{
                  borderRadius: "5px",
                  background: "rgba(255, 255, 255, 0.20)",
                }}
              >
                <p className="text-[48px] font-bold text-center text-[#353FB0] p-2">
                  {nextLevel && nextLevel.coinsToGo}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-medium text-black">
                  Coins To Go
                </p>

                <div
                  className="flex flex-col items-center justify-center w-[132px] h-[60px]"
                  style={{
                    borderRadius: "5px",
                    background: "rgba(183, 185, 255, 0.25)",
                  }}
                >
                  <p className="text-[10px] font-medium text-[#545CAD]">
                    You’ll be
                  </p>

                  <p className="text-[24px] font-bold text-[#000352]">
                    {nextLevel && nextLevel.nextLevel}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <p className="text-[12px] font-semibold text-[#B7B9FF] absolute top-[0.35rem] left-2 z-[1]">
                {profile?.profileLevel?.label}
              </p>
              <CustomSlider
                min={0}
                max={nextLevel ? nextLevel?.nextLevelCoins : 100}
                value={currentCoins==0?25:currentCoins}
                sx={{
                  cursor: "default",
                }}
              />
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center gap-2 w-[50%]"
            style={{
              padding: 2,
              borderRadius: "5px",
              background: " rgba(255, 255, 255, 0.20)",
            }}
          >
            <p className="text-[20px] font-normal text-black text-center">
              Leaderboard rank!
            </p>

            <div
              className="flex items-center justify-center w-[90%] h-[70%]"
              style={{
                borderRadius: "5px",
                background: " rgba(255, 255, 255, 0.20)",
              }}
            >
              <p className="text-[44px] font-medium text-[#353FB0] text-center">
                #{rank}/{profiles.length}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[75%]">
          <div
            className="flex flex-col p-4 items-center gap-4"
            style={{
              borderRadius: "5px",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <p className="text-[14px] font-medium text-black">Daily Quotes</p>

            <div
              className="text-[18px] p-5 pl-8 pr-8 font-medium text-[#353FB0] text-center"
              style={{
                borderRadius: "50px",
                background: " rgba(183, 185, 255, 0.25)",
              }}
            >
              {quote}
            </div>
          </div>
          <div className="flex gap-2 w-[100%] justify-between">
            <Button
              text={"Delete Account"}
              style={{
                width: "50%",
                fontSize: "22px",
                fontWeight: 600,
                color: "white",
                backgroundColor: "#000352",
              }}
            />

            <Button
              text={"Log Out"}
              style={{
                width: "50%",
                fontSize: "22px",
                fontWeight: 600,
                color: "white",
                backgroundColor: "#000352",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
