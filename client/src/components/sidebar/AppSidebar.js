import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { AppSidebarNav } from './AppSidebarNav'
import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'
import { setSidebarShow, setSidebarUnfoldable } from '../../redux/reducers/appSlice'

const AppSidebar = ({ navigation, language }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.app.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.app.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => dispatch(setSidebarShow(visible))}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(setSidebarShow(!sidebarShow))}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} language={language} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler onClick={() => dispatch(setSidebarUnfoldable(!unfoldable))} />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
