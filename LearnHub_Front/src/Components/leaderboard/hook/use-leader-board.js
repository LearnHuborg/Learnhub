import { useEffect, useState } from "react";
import { getLeaderBoard, getProfile } from "../../api/user";

export const useLeaderBoardData = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await getLeaderBoard();
      console.log(data);
      if (data) {
        setProfiles(data.leaderboard);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  return { profiles, isLoading };
};
