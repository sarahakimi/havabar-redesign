import http from 'services/http'
import urls from 'configs/requestEndpoints'

export const createOrder = async data => {
  const response = await http.post(urls.createOrder, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const calculatePrice = async data => {
  const response = await http.post(urls.calculatePrice, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

const keys = {
  asc: 1,
  desc: 0
}

export const fetchData = async sortModel => {
  let sortBy = sortModel.sort_by.split(' ')
  const searchValue = sortBy[1]
  sortBy = sortBy.filter(element => element !== searchValue)
  sortBy[1] = keys[sortBy[1]]
  const search = sortModel.search !== '' ? sortModel.search : {}

  const response = await http.post(urls.getCustomers(sortModel.page, Number(sortBy.join(''))), search, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export default function Home1() {
  return <div />
}
