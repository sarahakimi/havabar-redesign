import http from 'services/http'
import urls from 'configs/requestEndpoints'

export const createOrder = async data => {
  const response = await http.post(urls.tasvieEndpoin, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export default function Home1() {
  return <div />
}
