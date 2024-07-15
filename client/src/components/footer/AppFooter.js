import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = ({ texts }) => {
  const { footer } = texts

  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">{footer.email}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">{footer.phone}</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
