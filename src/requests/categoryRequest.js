import axiosBase from "axios";

const url = window.location.href


const categoryRequest = async (action, params) => {
  switch(action){
    case "fetch":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.get("categories");
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.get("categories");
          return categoriesData;
        }
    case "create":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.post("categories", params);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.post("categories", params);
          return categoriesData;
        }
    case "create_manual":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.post("categories/create_manual", params);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.post("categories/create_manual", params);
          return categoriesData;
        }
    case "delete_manual":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.delete(`categories/delete_manual?id=${params.id}`, params);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.delete(`categories/delete_manual?id=${params.id}`, params);
          return categoriesData;
        }
    default:
      return null;
  }
};
export default categoryRequest;