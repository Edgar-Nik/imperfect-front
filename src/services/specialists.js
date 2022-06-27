import { instance } from "./axios";
import axios from "axios";

export const createSpecialist = async (category, specialistData) => {
  const response = await instance().post(`/${category}`, specialistData);
  return response.data;
};
export const updateSpecialist = async (category, id, specialistData) => {
  const response = await instance().put(`/${category}/${id}`, specialistData);
  return response.data;
};

export const uploadImages = async (id, category, files) => {
  var data = new FormData();
  for (let item of files) {
    data.append("images", item);
  }

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/${category}/images/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);

  return response.data;
};

export const uploadGif = async (id, category, files) => {
  var data = new FormData();
  for (let item of files) {
    data.append("images", item);
  }

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/${category}/gif/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);

  return response.data;
};
