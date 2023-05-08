import http from "../../services/http";
import urls from "../../configs/requestEndpoints";

const keys={
  asc:1,
  desc:0
}

export const fetchData = async (sortModel) => {
  const sortBy = sortModel.sort_by.split(" ")
  sortBy[1] = keys[sortBy[1]]

  const response = await http
    .post(urls.getHubsFromAdmin(sortModel.page, Number(sortBy.join(''))), {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const downloadDataFromServer = async () => {
  const response = await http
    .post(urls.hubReport, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const deleteUser = async (id) => {
  const response = await http
    .delete(urls.singleHub(id), {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const registerUser = async (data) => {
  const response = await http
    .post(urls.registerHub, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const editUser = async (id, data) => {
  const response = await http
    .put(urls.singleHub(id), data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
