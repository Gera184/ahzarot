import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const convertAndUpdateNavItems = (data) => {
  return data.map((item) => {
    switch (item.component) {
      case 'CNavItem':
        return {
          ...item,
          component: CNavItem,
        }
      case 'CNavGroup':
        return {
          ...item,
          component: CNavGroup,
          items: item.items.map((subItem) => ({
            ...subItem,
            component: CNavItem,
          })),
        }
      case 'CNavTitle':
        return {
          ...item,
          component: CNavTitle,
        }
      default:
        return item
    }
  })
}

export { convertAndUpdateNavItems }
