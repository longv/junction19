import React from 'react'
import styled from 'styled-components'
import { NavigationBar } from '../components'
import { withRouter } from 'react-router-dom'

const Layout = (props) => {
  return (
    <PageContainer>
      <NavigationBar />
      {props.children}
    </PageContainer>
  )
}

const PageContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
`

const MainLayout = withRouter(Layout)

export default MainLayout
