import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = ({ texts }) => {
  const { footer } = texts
  const { email, phone } = footer

  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">{email.text}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">{phone.text}</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
