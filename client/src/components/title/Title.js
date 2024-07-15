import React from 'react'
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardTitle, CCardBody } from '@coreui/react'

export const Title = ({ titleData }) => {
  const { title } = titleData

  return (
    <CContainer className="text-center">
      <CRow>
        <CCol>
          <h1 className="display-1 shadow-lg">{title}</h1>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Title
