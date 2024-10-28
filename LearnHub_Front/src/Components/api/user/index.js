import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getUserAvatars = async () => {
  const res = await axios.get(apiUrl + "/api/auth/profileImages");
  return res;
};

export const setUserAvatar = async (email, imgUrl) => {
  const res = await axios.put(apiUrl + "/api/auth/update-profile-image", {
    email,
    imgUrl,
  });
  return res;
};
