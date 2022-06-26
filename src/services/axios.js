import axios from "axios";

export const instance = (token) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });
};
