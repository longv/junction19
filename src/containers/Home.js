import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
import { Input } from 'antd';
import _ from 'lodash';
import { ParkCard } from '../components'

class Home extends React.Component {

  render() {
    const nearbyParkData = [
      {
        name: 'Nuuksio National Park',
        location: 'Espoo, Finland',
        visitorStatus: 'Very busy'
      },
      {
        name: 'Valkmusa',
        location: 'Kymenlaakso, Finland',
        visitorStatus: 'Moderate'
      }
    ]

    const recommendParkData = [
      {
        name: 'Pallas-Yllästunturi',
        location: 'Lapland, Finland',
        visitorStatus: 'Low'
      }
    ]

    return (
      <ContainerDiv flexDirection="column">
        <SearchBox
          placeholder="Search"
          onSearch={value => console.log(value)}
        />

        <p>Nearby</p>

        {_.map(nearbyParkData, (park, i) => {
          return (
            <ParkCard park={park} key={i}/>
          )
        })}

        <p>Recommendation</p>

        {_.map(recommendParkData, (park, i) => {
          return (
            <ParkCard park={park} key={i}/>
          )
        })}

      </ContainerDiv>
    )
  }
}

const ContainerDiv = styled(Flex)`
  padding: 32px;
`

const SearchBox = styled(Input.Search)`
  margin-bottom: 32px;
  
  .ant-input {
    background-color: #EDEDED;
    border-radius: 8px;
    border: none;
  }
  
  .ant-input::placeholder {
    color: #121212;
  }
`

export default Home;
