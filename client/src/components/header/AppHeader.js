import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifIl, cifUs, cilContrast, cilGlobeAlt, cilMenu, cilMoon, cilSun } from '@coreui/icons'
import { setLanguage, setSidebarShow } from '../../redux/reducers/appSlice'
import { AppBreadcrumb } from '../index'

const AppHeader = ({ routes, texts, language }) => {
  const direction = language === 'he' ? 'end' : 'start'
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const sidebarShow = useSelector((state) => state.app.sidebarShow)

  const { home, contactUs, aboutUs } = texts.header

  const headerRef = useRef()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     headerRef.current &&
  //       headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
  //   })

  //   return () => {
  //     document.removeEventListener('scroll', () => {})
  //   }
  // }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch(setSidebarShow(!sidebarShow))}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink to="/" as={NavLink}>
              {home}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/contact-us" as={NavLink}>
              {contactUs}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/about-us" as={NavLink}>
              {aboutUs}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              <CIcon icon={cilGlobeAlt} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={language === 'en'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => dispatch(setLanguage('en'))}
              >
                <CIcon className="me-2" icon={cifUs} size="lg" /> {texts.header.language.english}
              </CDropdownItem>
              <CDropdownItem
                active={language === 'he'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => dispatch(setLanguage('he'))}
              >
                <CIcon className="me-2" icon={cifIl} size="lg" /> {texts.header.language.hebrew}
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>

        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> {texts.header.theme.light}
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> {texts.header.theme.dark}
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> {texts.header.theme.auto}
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
        </CHeaderNav>
      </CContainer>
      <CContainer className={`px-4 d-flex justify-content-${direction}`} fluid>
        <AppBreadcrumb routes={routes} language={language} />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
