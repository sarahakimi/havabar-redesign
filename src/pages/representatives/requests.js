import http from "../../services/http";
import urls from "../../configs/requestEndpoints";

export const fetchData = async (sortModel) => {
  const response = await http
    .get(urls.getRepresentatives, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const deleteUser = async (id) => {
  const response = await http
    .delete(urls.singleRepresentatives(id), {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const registerUser = async (data) => {
  const response = await http
    .post(urls.registerCustomer, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const editUser = async (id, data) => {
  const response = await http
    .put(urls.singleRepresentatives(id), data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};
