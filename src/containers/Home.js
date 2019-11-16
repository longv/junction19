import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { Flex } from 'reflexbox';

function Home() {
  return (
    <ContainerDiv justifyContent="center" alignItems="center">
      <Button>testing button</Button>
    </ContainerDiv>
  );
}

const ContainerDiv = styled(Flex)`
  background-color: lightblue;
  height: 100vh;
`

export default Home;
