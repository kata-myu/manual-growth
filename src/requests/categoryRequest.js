import axiosBase from "axios";

const api = axiosBase.create({
  baseURL: "http://localhost:3000/",
  responseType: "json",
});

const categoryRequest = async (action) => {
  switch(action){
    case "fetch":
      const categoriesData = await api.get("categories");
      return categoriesData;
    default:
      return null;
  }
};
export default categoryRequest;