import http from 'services/http'
import urls from 'configs/requestEndpoints'

const keys = {
  asc: 1,
  desc: 0
}

export const fetchData = async (sortModel, filters) => {
  const sortBy = sortModel.sort_by.split(' ')
  sortBy[1] = keys[sortBy[1]]

  const response = await http.post(urls.manifestPage(sortModel.page, Number(sortBy.join(''))), filters, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const downloadDataFromServer = async () => {
  const response = await http.post(
    urls.manifestReport,
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export const deleteUser = async id => {
  const response = await http.delete(urls.singleManifest(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const fetchManifest = async id => {
  const response = await http.get(
    urls.singleManifest(id),
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export const fetchNoManifest = async () => {
  const response = await http.get(
    urls.noManifest,
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    }
  )

  return response
}

export const registerUser = async data => {
  const response = await http.post(urls.addManifest, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export default function Home1() {
  return <div />
}
