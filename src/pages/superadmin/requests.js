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
    .post(urls.getCompaniesFromSuperAdminPageEndpoint(sortModel.page, Number(sortBy.join(''))), {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const fetchSingleCompany = async (id) => {
  const response = await http
    .get(urls.singleCompany(id),{}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const deleteCompany = async (id) => {
  const response = await http
    .delete(urls.singleCompany(id), {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const registerCompany = async (data) => {
  const response = await http
    .post(urls.registerCompany, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const editCompany = async (id, data) => {
  const response = await http
    .put(urls.singleCompany(id), data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const changeExpire = async (id, type, duration) => {
  const response = await http
    .put(urls.expireChange(id, type), duration, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};


export default function Home1() {
  return <div/>;
}
