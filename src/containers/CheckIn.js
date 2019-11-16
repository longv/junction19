import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
import posed from 'react-pose';
import {ReactComponent as Logo} from "../svg-assets/loading.svg";
import {Link} from "react-router-dom";

class CheckIn extends React.Component {
    state = {
      isCheckingIn: false,
      checked: false,
      nearbyCounter: null,
      points: null,
        user: JSON.parse(localStorage.getItem("user"))
    };

    render() {
        const { isCheckingIn, nearbyCounter, points, checked, user } = this.state;
        return (
            <ContainerDiv justifyContent="center" alignItems="center">
                {
                    user && !isCheckingIn && !nearbyCounter && !checked && (
                      <AnimatedButton justifyContent="center" alignItems="center" onClick={this.checkIn}>
                          Check in
                      </AnimatedButton>
                    )
                }
                {
                    user && nearbyCounter && !checked && (
                        <NearbyDiv>
                          <p>{nearbyCounter} is found.</p>
                          <p>Check in and score {points} points?</p>
                          <Button onClick={this.confirmCheckIn}>Check in</Button>
                        </NearbyDiv>
                    )
                }
                {
                  user && checked && (
                    <NearbyDiv>
                      <p>Kattila</p>
                      <Subtext>Nuuksio National Park</Subtext>
                      <p>Yayy, you're now checked in!</p>
                      <Score>+30</Score>
                      <p>Your new score: 1260</p>
                    </NearbyDiv>
                  )
                }
                {
                    user && isCheckingIn &&
                    <Logo />
                }
                {
                    !user &&
                    <SignInDiv>
                        <div>Let's sign in to get you to the board!</div>
                        <Button>
                            <Link to={{
                                pathname: '/login',
                                state: {
                                    originUrl: '/check-in'
                                }
                            }}>Sign in</Link>
                        </Button>
                    </SignInDiv>
                }
            </ContainerDiv>
        );
    }

    confirmCheckIn = () => {
      this.setState({
        checked: true
      })
    }

    checkIn = () => {
        this.setState({ isCheckingIn: true }, () => {
            setTimeout(() => {
                this.setState({
                    isCheckingIn: false,
                    nearbyCounter: 'Kattila',
                    points: 30
                })
            }, 3000)
        })
    }
}

const ContainerDiv = styled(Flex)`
  height: 90vh;
`;

const SignInDiv = styled(Flex)`
  flex-direction: column;
  padding-top: 50px;
`

const NearbyDiv = styled(Flex)`
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Circle = styled(Flex)`
  padding: 20px;
  margin: 20px;
  display: inline-block;
  background-color: #AFEDD9;
  border-radius: 50%;
  font-size: 24px;
  width: 200px;
  height: 200px;
`;

const Score = styled.div`
  color: #AFEDD9;
  font-size: 48px;
  font-weight: bold;
  margin: 20px 0;
`

const Subtext = styled.div`
  font-size: 14px;
  color: grey;
  margin-bottom: 30px;
`

const Button = styled.div`
  padding: 20px;
  font-size: 15px;
  margin-top: 60px;
  background-color: #AFEDD9;
`
const AnimatedButton = posed(Circle)({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});

export default CheckIn;