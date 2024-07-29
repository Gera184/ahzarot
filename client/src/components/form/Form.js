import React from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CCol, CRow, CContainer } from '@coreui/react'

export const Form = ({ formData, direction }) => {
  const { title, formButton } = formData

  return (
    <CContainer className="my-5 pt-4">
      <CRow className={`justify-content-${direction === 'rtl' ? 'end' : 'start'}`}>
        <CCol md="8" lg="6">
          <h2 className="text-center mb-4">{title}</h2>
          <CForm className="border border-2 border-light rounded p-4 shadow">
            {formData.inputs.map((input, index) => (
              <CFormInput
                key={index}
                className="mb-3 border"
                type={input.type}
                placeholder={input.placeholder}
                required={input.required}
              />
            ))}

            <CButton
              type="submit"
              className="w-100"
              style={{ backgroundColor: '#212631', color: 'white', borderColor: '#212631' }}
            >
              {formButton}
            </CButton>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}
