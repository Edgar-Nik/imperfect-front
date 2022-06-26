import axios from "axios";
import { instance } from "./axios";

export const getUploadUrl = async () => {
  const response = await instance().get(`/s3`);
  return response.data;
};

export const uploadImages = async (id, category, files) => {
  var data = new FormData();
  for (let item of files) {
    data.append("images", item);
  }
  data.append("type", "image");

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/s3/${category}/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);

  return response.data;
};

export const uploadGif = async (id, files) => {
  var data = new FormData();
  for (let item of files) {
    data.append("images", item);
  }
  data.append("type", "gif");
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/s3/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);

  return response.data;
};
