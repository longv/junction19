import React from 'react'
import {assignVisitorStatusColor} from "../utils/colorUtils";
import styled from "styled-components";

const VisitorStatus = (props) => {
  const { text } = props
  return (
    <VisitorStatusText
      color={assignVisitorStatusColor(text)}
    >
      {text}
    </VisitorStatusText>
  )
}

const VisitorStatusText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.color};
`

export default VisitorStatus
