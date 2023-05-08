import http from "services/http";
import urls from "configs/requestEndpoints";

const keys={
  asc:1,
  desc:0
}

export const fetchData = async (sortModel, filters) => {
  const sortBy=sortModel.sort_by.split(" ")
  sortBy[1]= keys[sortBy[1]]

  const response = await http
    .post(urls.operationHistory(sortModel.page, Number(sortBy.join(''))), filters, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const downloadDataFromServer = async () => {
  const response = await http
    .post(urls.operationReport, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};


export default function Home1() {
  return <div/>;
}
