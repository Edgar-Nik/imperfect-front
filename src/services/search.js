import { resolveRequestDates } from "../utils/resolveRequestDates";
import { instance } from "./axios";

export const getAll = async (category, filters = {}, page) => {
  const filterData = resolveRequestDates(filters);

  const response = await instance().post(`/${category}/all`, filterData, {
    params: { page: page },
  });
  return response.data;
};
