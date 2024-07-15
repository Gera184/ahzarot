import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = ({ routes, language }) => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="my-0">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem {...(breadcrumb.active ? { active: true } : {})} key={index}>
            {breadcrumb.active ? (
              breadcrumb.name[language]
            ) : (
              <NavLink to={breadcrumb.pathname}>{breadcrumb.name[language]}</NavLink>
            )}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
