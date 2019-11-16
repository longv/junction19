import React from 'react'
import {Flex} from "reflexbox";
import styled from "styled-components";
import {Card} from "antd";
import { VisitorStatus } from './index'

const ParkCard = (props) => {
  const { park } = props
  return (
    <StyledCard>
      <Flex height="100%"  justifyContent="space-between">
        <Flex flexDirection="column" justifyContent="flex-end">
          <ParkNameText>{park.name}</ParkNameText>
          <ParkLocationText>{park.location}</ParkLocationText>
        </Flex>
        <Flex flexDirection="column" justifyContent="flex-end">
          <VisitorStatus text={park.visitorStatus} />
        </Flex>
      </Flex>
    </StyledCard>
  )
}

const ParkLocationText = styled.p`
  margin: 0;
  font-size: 12px;
`

const ParkNameText = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`

const StyledCard = styled(Card)`
  cursor: pointer;
  border: none;
  background-color: #EDEDED;
  margin: 10px 0;
  border-radius: 8px;
  height: 120px;
  .ant-card-body {
    padding: 16px;
    height: 100%;
  }
`

export default ParkCard
