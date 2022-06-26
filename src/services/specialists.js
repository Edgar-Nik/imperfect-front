import { instance } from "./axios";

export const createSpecialist = async (category, specialistData) => {
  const response = await instance().post(`/${category}`, specialistData);
  return response.data;
};
