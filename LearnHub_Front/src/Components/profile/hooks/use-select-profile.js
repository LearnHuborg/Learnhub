import { useEffect, useState } from "react";
import { getUserAvatars, setUserAvatar } from "../../api/user/index.js";

export const useSelectProfile = () => {
  const [profiles, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await getUserAvatar();
      if (data) {
        setProfiles(data.profiles);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  const setUserProfile = async (imageUrl) => {
    const email = localStorage.getItem("email");
    const { data } = await setUserAvatar(email, imageUrl);
    console.log(data);

    return data;
  };

  return { profiles, isLoading, setUserProfile };
};
