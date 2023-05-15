import http from '../../services/http'
import urls from '../../configs/requestEndpoints'

const keys = {
  asc: 1,
  desc: 0
}

export const fetchData = async (sortModel, filter, hasFilter) => {
  let sortBy = sortModel.sort_by.split(' ')
  const searchValue = sortBy[1]
  sortBy = sortBy.filter(element => element !== searchValue)
  sortBy[1] = keys[sortBy[1]]
  let search
  if (hasFilter) {
    search = filter
  } else {
    search = sortModel?.search !== '' ? sortModel.search : {}
  }

  const response = await http.post(urls.getAdminOrders(sortModel.page, Number(sortBy.join(''))), search, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const deleteUser = async id => {
  const response = await http.delete(urls.deleteOrder(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const registerUser = async data => {
  const response = await http.post(urls.createOrder, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editUser = async (id, data) => {
  const response = await http.put(urls.editOrder(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const assignToPeyk = async (id, data) => {
  const response = await http.post(urls.assign_to_peyk(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const distributeOrder = async (id, data) => {
  const response = await http.post(urls.distributeOrder(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const assignToLogistic = async (id, data) => {
  const response = await http.post(urls.delivery_toLogistic(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const collectOrder = async id => {
  const response = await http.post(
    urls.collectOrder(id),
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export const deliveryFromLogestic = async id => {
  const response = await http.post(
    urls.delivery_fromLogistic(id),
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export const downloadDataFromServer = async () => {
  const response = await http.post(
    urls.suborderReport,
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export default function Home1() {
  return <div />
}
