import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from '@core/components/spinner'
import { useAuth } from 'hooks/useAuth'

export const getHomeRoute = (role, hub) => {
  if (role) return '/superadmin'
  if (hub === 0 && !role) return '/admin/users'

  return '/dashboards'
}

function Home() {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user) {
      const homeRoute = getHomeRoute(auth.user.isSuperAdmin, auth.user?.hub_id)

      router.replace(homeRoute)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Home
