import http from '../../services/http'
import urls from '../../configs/requestEndpoints'

export const fetchData = async () => {
  const response = await http.get(
    urls.dashboard,
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
