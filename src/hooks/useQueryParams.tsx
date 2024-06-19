import { useSearchParams } from 'react-router-dom'

function useQueryParams() {
  const [URLSearchParams] = useSearchParams()
  return Object.fromEntries([...URLSearchParams])
}

export default useQueryParams
