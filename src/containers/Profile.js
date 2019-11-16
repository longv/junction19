import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'reflexbox';
import {ReactComponent as FemaleRed} from "../svg-assets/female-red.svg";

class CheckIn extends React.Component {
    render() {
        return (
            <ContainerDiv justifyContent="flex-start" alignItems="center">
             <Title>Profile</Title>
             <PodiumWrapper>
              <RankWrapper margin="0 10px">
                <FemaleRed width={100} height={100} />
                <Name>Heippo Nguyen</Name>
                <Location>Helsinki, Finland</Location>
              </RankWrapper>
             </PodiumWrapper>
             <ScoreRankWrapper>
               <ScoreRank>
                <Primary>1260</Primary>
                <Subtext>Score</Subtext>
               </ScoreRank>
               <ScoreRank>
                <Primary>199th</Primary>
                <Subtext>Rank</Subtext>
               </ScoreRank>
             </ScoreRankWrapper>
             <Link style={{ marginTop: '100px', color: '#d83236', fontSize: '18px', fontWeight: 'bold' }}>LOG OUT</Link>
            </ContainerDiv>
        );
    }
}

const ContainerDiv = styled(Flex)`
  flex-direction: column;
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 20px 0;
`

const PodiumWrapper = styled(Flex)`
  flex-direction: row;
`

const RankWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ScoreRankWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 40px;
`

const ScoreRank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Primary = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Subtext = styled.div`
  font-size: 15px;
`

const Location = styled.div`
  font-size: 12px;
  margin-top: .5em;
  color: grey;
`

const Name = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
`

export default CheckIn;