import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'reflexbox';
import {ReactComponent as FemaleRed} from "../svg-assets/female-red.svg";
import {Button as AntButton} from "antd";
import {variables} from "../styles/variables";

class CheckIn extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("user"))
  }

  render() {
    const { user } = this.state;

    if (user) {
      return (
        <ContainerDiv justifyContent="flex-start" alignItems="center">
          <Title>Profile</Title>
          <PodiumWrapper>
            <RankWrapper margin="0 10px">
              <FemaleRed width={100} height={100}/>
              <Name>{user.displayName}</Name>
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
          <Link to="/login" style={{marginTop: '100px', color: '#d83236', fontSize: '18px', fontWeight: 'bold'}}>LOG OUT</Link>
        </ContainerDiv>
      );
    } else {
      return (
        <SignInDiv>
          <h2>Let's sign in to see your profile!</h2>
          <SignInButton>
            <Link
              to={{
                pathname: '/login',
                state: {
                  originUrl: '/check-in'
                }
              }}
            >
              Sign in
            </Link>
          </SignInButton>
        </SignInDiv>
      )
    }
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

const SignInDiv = styled.div`
  padding: 50px 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`

const SignInButton = styled(AntButton)`
  width: 300px;
  margin: 30px auto;
  background-color: ${variables.colors.primary};
  border: none;
  color: white;
  font-weight: bold;
  
  :hover {
    background-color: ${variables.colors.primary};
    color: white;
  }
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
