import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'

export const Title = ({
  title = '',
  addShadow = false,
  size = 'display-1',
  color = 'text-dark',
  subtitle,
}) => {
  const shadow = addShadow ? 'shadow-lg' : ''

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#6c757d',
    marginTop: '0.5rem',
  }

  return (
    <CContainer className="text-center">
      <CRow>
        <CCol>
          <h1 className={`${size} ${shadow} ${color}`}>{title}</h1>
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Title
