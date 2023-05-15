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
  const search = sortModel?.search !== '' ? sortModel.search : {}

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
  const response = await http.put(urls.singleOrder(id), data, {
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

export const downloadOrder = async id => {
  const response = await http.get(
    urls.downloadPdf(id),
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,

      // responseType: 'blob',
      content_type: 'application/pdf'
    },
    { responseType: 'arraybuffer' }
  )

  return response
}

export default function Home1() {
  return <div />
}
