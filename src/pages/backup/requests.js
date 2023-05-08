import http from "services/http";
import urls from "configs/requestEndpoints";

const keys={
  asc:1,
  desc:0
}

export const fetchData = async (sortModel) => {
  const sortBy = sortModel.sort_by.split(" ")
  sortBy[1] = keys[sortBy[1]]

  const response = await http
    .post(urls.getBackups(sortModel.page, Number(sortBy.join(''))),{} , {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const getBackupNow = async () => {
  const response = await http
    .get(urls.getBackupNow, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,
      responseType: 'blob'
    })

  return response;
};

export const downloadBackup = async (id) => {
  const response = await http
    .get(urls.downloadBackupById(id), {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,
    }, { responseType: 'arraybuffer',})

  return response;
};

export const applyBackupById = async (id) => {
  const response = await http
    .post(urls.applyBackupById(id), {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,
    })

  return response;
};

export const applyBackup = async (form) => {
  const response = await http
    .post(urls.uploadBackup, {file: form}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,
      "Content-Type": "multipart/form-data",
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
