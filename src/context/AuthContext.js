import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import authConfig from 'configs/auth'
import http from 'services/http'
import toast from 'react-hot-toast'
import urls from 'configs/requestEndpoints'

const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

function AuthProvider({ children }) {
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)

  const router = useRouter()
  useEffect(() => {
    if (!isInitialized) {
      if (window.localStorage.getItem(authConfig.storageTokenKeyName)) {
        setIsInitialized(true)
        setUser(JSON.parse(window.localStorage.getItem('userData')))
      } else {
        localStorage.removeItem('userData')
        localStorage.removeItem(authConfig.storageTokenKeyName)
        setUser(null)
        setLoading(false)
        setIsInitialized(false)
        const { returnUrl } = router.query
        const redirectURL = returnUrl && returnUrl !== '/login' ? returnUrl : '/login'
        const { pathname } = window.location
        console.log(pathname)
        if (pathname !== '/track-order/' && pathname !== '/login/' && pathname !== '/forgot-password/')
          router.replace(redirectURL)
        setLoading(false)
      }
    }
    if (isInitialized && user) {
      http
        .get(
          'hub/',
          {},
          {
            Authorization: `Bearer ${window.localStorage.getItem(authConfig.storageTokenKeyName)}`
          }
        )
        .then(() => {
          const { pathname } = window.location
          if (pathname === '/track-order/' || pathname === '/login/' || pathname === '/forgot-password/')
            router.replace('/')
          else router.replace(pathname)

          setLoading(false)
        })
        .catch(async err => {
          if (err?.response?.data?.messageCode === 401) {
            await localStorage.removeItem('userData')
            toast.error(err?.response?.data?.message)
            await localStorage.removeItem(authConfig.storageTokenKeyName)
            setUser(null)
            setLoading(false)
            setIsInitialized(false)
            router.replace('/login')
            setLoading(false)
          } else {
            const { returnUrl } = router.query
            const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
            router.replace(redirectURL)
            setLoading(false)
          }
        })
    }
  }, [user])

  const handleLogin = (params, errorCallback, toastid) => {
    http
      .post(authConfig.loginEndpoint, params)
      .then(async res => {
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.token)
        toast.dismiss(toastid)
        const adminId = res.data.role === 'super-admin'
        setIsInitialized(true)
        const { returnUrl } = router.query
        setUser({ ...res.data, isSuperAdmin: adminId })
        await window.localStorage.setItem(
          'userData',
          JSON.stringify({
            ...res.data,
            isSuperAdmin: adminId
          })
        )
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    if (user.isSuperAdmin) {
      setUser(null)
      setIsInitialized(false)
      window.localStorage.removeItem('userData')
      window.localStorage.removeItem(authConfig.storageTokenKeyName)
      router.push('/login')

      return Promise.resolve()
    }

    // eslint-disable-next-line consistent-return
    return http
      .post(
        urls.logout,
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem(authConfig.storageTokenKeyName)}`
        }
      )
      .then(() => {
        setUser(null)
        setIsInitialized(false)
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
        router.push('/login')
      })
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
