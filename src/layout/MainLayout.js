import React from 'react'
import styled from 'styled-components'
import { NavigationBar } from '../components'
import { withRouter } from 'react-router-dom'
import {Flex} from "reflexbox";

const Layout = (props) => {
  return (
    <PageContainer>
      <NavigationBar />
      <Flex justifyContent="center" alignItems="center">
        {props.children}
      </Flex>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
`


const MainLayout = withRouter(Layout)

export default MainLayout
