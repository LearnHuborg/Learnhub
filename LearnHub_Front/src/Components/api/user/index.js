import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getUserAvatars = async () => {
  const res = await axios.get(apiUrl + "/api/auth/profileImages");
  return res;
};

export const setUserAvatar = async (email, imgUrl) => {
  const res = await axios.put(apiUrl + "/api/auth/update-profile-image", {
    email,
    profileImageUrl: imgUrl,
  });
  return res;
};

export const getProfile = async (userId) => {
  const res = await axios.get(apiUrl + `/api/auth/userProfile/${userId}`);
  return res;
};

export const getLeaderBoard = async () => {
  const res = await axios.get(apiUrl + '/api/auth/leaderboard');
  return res;
}