import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { Home } from '../../views/pages/home/Home'

const AppContent = ({ routes, texts, language }) => {
  const direction = language === 'he' ? 'rtl' : 'ltr'

  return (
    <CContainer fluid className={`p-0 content_wrapper_${direction}`}>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<Home homeData={texts} direction={direction} />}
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
