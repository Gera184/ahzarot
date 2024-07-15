import React from 'react'
import { CSpinner } from '@coreui/react'

export const Loading = () => {
  return (
    <div className="pt-3 text-center">
      <CSpinner color="primary" variant="grow" />
    </div>
  )
}
