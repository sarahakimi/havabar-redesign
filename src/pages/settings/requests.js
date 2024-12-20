import http from '../../services/http'
import urls from '../../configs/requestEndpoints'

export const fetchData = async sortModel => {
  const response = await http.get(urls.myHub, sortModel, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const fetchLogo = async sortModel => {
  const response = await http.get(urls.getLogo, sortModel, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const applyLogo = async data => {
  const response = await http.post(urls.getLogo, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editHub = async (id, data) => {
  const response = await http.put(urls.singleHub(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export default function Home1() {
  return <div />
}
