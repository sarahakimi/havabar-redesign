import http from '../../services/http'
import urls from '../../configs/requestEndpoints'

export const getPricing = async () => {
  const response = await http.post(urls.pricing, '', {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const getRegional = async id => {
  const response = await http.get(urls.singleRegional(id), '', {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const deleteRegional = async id => {
  const response = await http.delete(urls.singleRegional(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const addCollect = async data => {
  const response = await http.post(urls.addCollect, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editCollect = async (id, data) => {
  const response = await http.put(urls.singleCollectPrice(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const removeCollect = async id => {
  const response = await http.delete(urls.singleCollectPrice(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const addDistribution = async data => {
  const response = await http.post(urls.addDistribution, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editDistribution = async (id, data) => {
  const response = await http.put(urls.singleDistributionPrice(id), data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const removeDistribution = async id => {
  const response = await http.delete(urls.singleDistributionPrice(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editVolume = async data => {
  const response = await http.post(urls.volumePrice, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editpackagingPrice = async data => {
  const response = await http.post(urls.packagingPrice, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editotherPrice = async data => {
  const response = await http.post(urls.otherPrice, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const editorderNumber = async data => {
  const response = await http.post(urls.orderNumber, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export default function Home1() {
  return <div />
}
