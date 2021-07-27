import axiosBase from "axios";

const url = window.location.href


const categoryRequest = async (action, params, headers) => {
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
        const categoriesData = await api.post("categories", params, headers);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.post("categories", params, headers);
          return categoriesData;
        }
    case "create_manual":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.post(`categories/create_manual`, params, headers);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.post("categories/create_manual", params, headers);
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
    case "select_category":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.get(`categories/select_category?id=${params.id}`, params);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.get(`categories/select_category?id=${params.id}`, params);
          return categoriesData;
        }
    case "search_manual":
      if(url === "http://localhost:3001/"){
        const api = axiosBase.create({
          baseURL: "http://localhost:3000/",
          responseType: "json",
        });
        const categoriesData = await api.get(`categories/search_manual?word=${params.word}`, params);
        return categoriesData;
        }
        else{
          const api = axiosBase.create({
            baseURL: "https://manual-growth-server.herokuapp.com/",
            responseType: "json",
          });
          const categoriesData = await api.get(`categories/search_manual?word=${params.word}`, params);
          return categoriesData;
        }
    default:
      return null;
  }
};
export default categoryRequest;