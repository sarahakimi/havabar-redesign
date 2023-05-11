import http from '../../services/http'
import urls from '../../configs/requestEndpoints'

const keys = {
  asc: 1,
  desc: 0
}

export const fetchData = async sortModel => {
  let sortBy = sortModel.sort_by.split(' ')
  const searchValue = sortBy[1]
  sortBy = sortBy.filter(element => element !== searchValue)
  sortBy[1] = keys[sortBy[1]]

  const response = await http.post(urls.getCustomers(sortModel.page, Number(sortBy.join(''))), sortModel.search, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const downloadDataFromServer = async () => {
  const response = await http.post(
    urls.customersReport,
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export const deleteUser = async id => {
  const response = await http.delete(urls.singleCustomer(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const registerUser = async data => {
  const response = await http.post(urls.registerCustomer, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editUser = async (id, data) => {
  const response = await http.put(urls.singleCustomer(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export default function Home1() {
  return <div />
}
