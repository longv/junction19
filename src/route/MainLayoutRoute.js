import React from 'react'
import { Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

const MainLayoutRoute = ({ component: Component, isPrivate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  )
}

export default MainLayoutRoute
