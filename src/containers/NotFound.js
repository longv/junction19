import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <ContainerDiv>
      <h1>404</h1>
      <h1>Page not found</h1>
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`
  text-align: center;
`

export default NotFound
