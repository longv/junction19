import React from 'react';
import styled from 'styled-components';
import {Box, Flex} from 'reflexbox';
import { Input } from 'antd';
import _ from 'lodash';
import { ParkCard } from '../components'
import { variables } from  '../styles/variables'
import {
  Link
} from "react-router-dom";

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nearbyParkData: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/parks')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          nearbyParkData: data
        })
      })
  }

  render() {
    const nearbyParkData = [
      {
        name: 'Nuuksio National Park',
        location: 'Espoo, Finland',
        visitorStatus: variables.levels.veryBusy
      },
      {
        name: 'Valkmusa',
        location: 'Kymenlaakso, Finland',
        visitorStatus: variables.levels.moderate
      }
    ]

    const recommendParkData = [
      {
        name: 'Pallas-Yllästunturi',
        location: 'Lapland, Finland',
        visitorStatus: variables.levels.low
      }
    ]

    return (
      <ContainerDiv flexDirection="column">
        <SearchBox
          placeholder="Search"
          onSearch={value => console.log(value)}
        />

        <p>Nearby</p>
        <Flex flexWrap="wrap" mb={4}>
          {_.map(nearbyParkData, (park, i) => {
            return (
              <Box width={[1, 1/3]} mr={[0,2]} key={i}>
                <Link to="/details">
                  <ParkCard park={park} />
                </Link>
              </Box>
            )
          })}
        </Flex>

        <p>Recommendation</p>
        <Flex flexWrap="wrap">
          {_.map(recommendParkData, (park, i) => {
            return (
              <Box width={[1, 1/3]} mr={[0,2]} key={i}>
                <ParkCard park={park} />
              </Box>
            )
          })}
        </Flex>

      </ContainerDiv>
    )
  }
}

const ContainerDiv = styled(Flex)`
  padding: 32px;
  width: 100%;
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
