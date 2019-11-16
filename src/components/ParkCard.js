import React from 'react'
import {Flex} from "reflexbox";
import {assignVisitorStatusColor} from "../utils/colorUtils";
import styled from "styled-components";
import {Card} from "antd";

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
          <VisitorStatusText
            color={assignVisitorStatusColor(park.visitorStatus)}
          >
            {park.visitorStatus}
          </VisitorStatusText>
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
`

const VisitorStatusText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.color};
`

const StyledCard = styled(Card)`
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
