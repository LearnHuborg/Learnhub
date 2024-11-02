import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Context";
import { getProfile } from "../../api/user";

export const useProfileData = () => {
  const userId = localStorage.getItem("userId");
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await getProfile(userId);
      if (data) {
        setProfile(data);
      }
      setIsLoading(false);
    };
    getData();
  }, [userId]);

  return { profile, isLoading };
};
