import React from 'react'
import { NavLink } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import * as icons from '@coreui/icons'

const iconMap = {
  cilBell: icons.cilBell,
  cilCalculator: icons.cilCalculator,
  cilChartPie: icons.cilChartPie,
  cilCursor: icons.cilCursor,
  cilDescription: icons.cilDescription,
  cilDrop: icons.cilDrop,
  cilNotes: icons.cilNotes,
  cilPencil: icons.cilPencil,
  cilPuzzle: icons.cilPuzzle,
  cilSpeedometer: icons.cilSpeedometer,
  cilStar: icons.cilStar,
}

export const AppSidebarNav = ({ items, language }) => {
  const direction = language === 'he' ? 'rtl' : 'ltr'

  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon ? (
          <CIcon icon={iconMap[icon]} customClassName={`nav-icon ${direction}`} />
        ) : (
          indent && (
            <span className={`nav-icon ${direction}`}>
              <span className="nav-icon-bullet"></span>
            </span>
          )
        )}
        {name[language]}
        {badge && (
          <CBadge color={badge.color} className={`${direction === 'rtl' ? 'me-auto' : 'ms-auto'}`}>
            {badge.text[language]}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = ({ component: Component, name, badge, icon, ...rest }, index, indent = false) => (
    <Component key={index}>
      {rest.to || rest.href ? (
        <CNavLink as={NavLink} to={rest.to} {...rest}>
          {navLink(name, icon, badge, indent)}
        </CNavLink>
      ) : (
        navLink(name, icon, badge, indent)
      )}
    </Component>
  )

  const navGroup = ({ component: Component, name, icon, items, to, ...rest }, index) => (
    <Component className={direction} compact key={index} toggler={navLink(name, icon)} {...rest}>
      {items?.map((item, index) =>
        item.items ? navGroup(item, index) : navItem(item, index, true),
      )}
    </Component>
  )

  return (
    <CSidebarNav as={SimpleBar} style={{ direction }}>
      {items?.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </CSidebarNav>
  )
}
