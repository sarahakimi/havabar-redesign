import http from "services/http";
import urls from "configs/requestEndpoints";

export const createOrder = async (data) => {
  const response = await http
    .post(urls.createOrder, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const fetchData = async (sortModel) => {
  const response = await http
    .get(urls.getusers, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};
