import React from 'react';
import styled from "styled-components";
import {Flex} from "reflexbox";
import { Button } from 'antd';
import firebase from '../Firebase'

class Login extends React.Component {

  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result)
      // const token = result.credential.accessToken;
      // const user = result.user;
    }).catch(function(error) {
      console.log(error.message)
    });
  }

  render() {
    return (
      <ContainerDiv flexDirection="column" justifyContent="center" alignItems="center">
        <h1>Welcome, Flying Squirrel here!</h1>
        <Button onClick={this.handleSignIn}>Sign in with Google</Button>
      </ContainerDiv>
    )
  }
}

const ContainerDiv = styled(Flex)`
  height: 100vh;
`

export default Login;
