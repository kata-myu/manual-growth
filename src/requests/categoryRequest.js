import axiosBase from "axios";

const api = axiosBase.create({
  baseURL: "http://loacalhost3000/",
  responseType: "json",
});

const categoryRequest = async () => {
  const categoriesData = await api.get("/");
  return categoriesData;
};
export default categoryRequest;