import { useQuery } from 'react-query'
import API from '../api/API'

const useDataFetching = () => {
  const {
    data: routesData,
    isLoading: isRoutesLoading,
    isError: isRoutesError,
    error: routesError,
  } = useQuery('routes', async () => {
    const routesResponse = await API.request({
      method: 'GET',
      url: API.routes,
    })
    return routesResponse.data
  })

  const {
    data: navsData,
    isLoading: isNavsLoading,
    isError: isNavsError,
    error: navsError,
  } = useQuery('navs', async () => {
    const navsResponse = await API.request({
      method: 'GET',
      url: API.navs,
    })
    return navsResponse.data
  })

  const {
    data: textsData,
    isLoading: isTextsLoading,
    isError: isTextsError,
    error: textsError,
  } = useQuery('texts', async () => {
    const textsResponse = await API.request({
      method: 'GET',
      url: API.texts,
    })
    return textsResponse.data
  })

  const routesErrorMessage = isRoutesError
    ? (routesError && routesError.message) || 'Error fetching routes'
    : null

  const navsErrorMessage = isNavsError
    ? (navsError && navsError.message) || 'Error fetching navs'
    : null

  const textsErrorMessage = isTextsError
    ? (textsError && textsError.message) || 'Error fetching texts'
    : null

  const isLoading = isRoutesLoading || isNavsLoading || isTextsLoading
  const isError = isRoutesError || isNavsError || isTextsError

  return {
    isError,
    errorMessage: isError ? routesErrorMessage || navsErrorMessage || textsErrorMessage : null,
    isLoading,
    routesData,
    navsData,
    textsData,
  }
}

export default useDataFetching
