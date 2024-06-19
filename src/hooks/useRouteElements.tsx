import { useRoutes } from 'react-router-dom'
import Test from '~/pages/Test'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <Test />
    }
  ])

  return routeElements
}

export default useRouteElements
