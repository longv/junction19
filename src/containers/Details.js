import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import { Icon, Collapse } from 'antd';
import { VisitorStatus, Chart } from '../components'
import { variables } from '../styles/variables'



class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 'Sunday, November 16th 2019',
      level: 'Very busy',
      weather: {
        temp: '-2°C',
        rain: '10%',
        wind: '7km/h'
      },
      tracks: [
        {
          name: 'Haukkalampi',
          visitorStatus: variables.levels.veryBusy,
          forecast: [
            { 
              day: 'Today',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Mon',
              level: variables.levels.low
            },
            { 
              day: 'Tue',
              level: variables.levels.veryLow
            },
            { 
              day: 'Wed',
              level: variables.levels.moderate
            },
            { 
              day: 'Thu',
              level: variables.levels.veryLow
            },
            { 
              day: 'Fri',
              level: variables.levels.busy
            },
            { 
              day: 'Sat',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Sun',
              level: variables.levels.busy
            }
          ]
        },
        {
          name: 'Högbacka',
          visitorStatus: variables.levels.low,
          forecast: [
            { 
              day: 'Today',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Mon',
              level: variables.levels.low
            },
            { 
              day: 'Tue',
              level: variables.levels.veryLow
            },
            { 
              day: 'Wed',
              level: variables.levels.moderate
            },
            { 
              day: 'Thu',
              level: variables.levels.veryLow
            },
            { 
              day: 'Fri',
              level: variables.levels.busy
            },
            { 
              day: 'Sat',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Sun',
              level: variables.levels.busy
            }
          ]
        },
        {
          name: 'Kattila',
          visitorStatus: variables.levels.busy,
          forecast: [
            { 
              day: 'Today',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Mon',
              level: variables.levels.low
            },
            { 
              day: 'Tue',
              level: variables.levels.veryLow
            },
            { 
              day: 'Wed',
              level: variables.levels.moderate
            },
            { 
              day: 'Thu',
              level: variables.levels.veryLow
            },
            { 
              day: 'Fri',
              level: variables.levels.busy
            },
            { 
              day: 'Sat',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Sun',
              level: variables.levels.busy
            }
          ]
        },
        {
          name: 'Siikaniemi',
          visitorStatus: variables.levels.moderate,
          forecast: [
            { 
              day: 'Today',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Mon',
              level: variables.levels.low
            },
            { 
              day: 'Tue',
              level: variables.levels.veryLow
            },
            { 
              day: 'Wed',
              level: variables.levels.moderate
            },
            { 
              day: 'Thu',
              level: variables.levels.veryLow
            },
            { 
              day: 'Fri',
              level: variables.levels.busy
            },
            { 
              day: 'Sat',
              level: variables.levels.veryBusy
            },
            { 
              day: 'Sun',
              level: variables.levels.busy
            }
          ]
        },
      ]
    }
  }

  getStatus = (visitorStatus) => {
    return <VisitorStatus text={visitorStatus} />
  }

  render() {
    const text = 'text'
    const { date, level, weather, tracks } = this.state
    const { Panel } = Collapse
    return (
      <Container>
        <Box width={1}>
          <ParkText>Nuuksio National Park</ParkText>
        </Box>
        <Box width={1}>
          <DateText>{date}</DateText>
        </Box>
        <Box width={1}>
          <LevelText>{level}</LevelText>
        </Box>
        <Box width={1}>
          <Icon type="cloud" style={{fontSize: '4.5em', marginTop: '.5em'}}/>
        </Box>
        <Box py={3} width={1/3}>
          <DataText>{weather.temp}</DataText>
          <LabelText>Temperature</LabelText>
        </Box>
        <Box py={3} width={1/3}>
          <DataText>{weather.rain}</DataText>
          <LabelText>Rain</LabelText>
        </Box>
        <Box py={3} width={1/3}>
          <DataText>{weather.wind}</DataText>
          <LabelText>Wind</LabelText>
        </Box>
        <Box width={1} style={{textAlign: 'left', paddingBottom: '40px'}}>
          <Collapse defaultActiveKey={['1']} bordered={false} accordion>
            {tracks.map((track, i) => (
              <Panel header={track.name} style={customPanelStyle} key={i+1} extra={this.getStatus(track.visitorStatus)}>
                <Chart data={track.forecast} />
              </Panel>
            ))}
          </Collapse>
        </Box>
      </Container>
      
    );
  }
}

const customPanelStyle = {
  borderBottom: 'none',
  fontWeight: 500
}

const Container = styled(Flex)`
  flex-wrap: wrap;
  color: #121212;
  text-align: center;
`

const DateText = styled.p`
  font-size: 1.3em;
  margin-top: 1.5em;
`
const LevelText = styled.p`
  font-size: 2.7em;
  font-weight: 700;
  margin-bottom: .3em;
`

const ParkText = styled.p`
  font-size: 1.7em;
  margin-top: 1.5em;
`

const DataText = styled.p`
  font-size: 1.7em;
  margin-bottom: .3em;
  font-weight: 500;
`

const LabelText = styled.p`

`

export default Details;