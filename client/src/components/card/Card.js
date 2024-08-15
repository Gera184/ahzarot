import React from 'react'
import { Link } from 'react-router-dom'

import { CCard, CCardBody, CCardFooter, CButton, CImage } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { iconMap } from '../../utils/IconsMapper'

export const Card = ({ title, to, buttonTitle, icon, imgeSrc = null, direction = 'rtl' }) => {
  if (imgeSrc)
    return (
      <CCard className={`process_card_wrapper ${direction}`}>
        <CCardBody>
          <CImage src={imgeSrc} />
        </CCardBody>
      </CCard>
    )

  return (
    <CCard className="card_wrapper">
      <CCardBody className="d-flex flex-column justify-content-center align-items-center">
        <CIcon icon={iconMap[icon]} size="4xl" />
        <h5 className="mt-3">{title}</h5>
      </CCardBody>
      <CCardFooter className="d-flex justify-content-center">
        <Link to={to}>
          <CButton className="card_btn">{buttonTitle}</CButton>
        </Link>
      </CCardFooter>
    </CCard>
  )
}
