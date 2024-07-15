import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { Home } from '../../views/home/Home'

const AppContent = ({ routes, texts }) => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<Home texts={texts} />}
              />
            )
          })}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
