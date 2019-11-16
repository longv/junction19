import React from 'react';
import styled from "styled-components";
import {Flex} from "reflexbox";
import { Button } from 'antd';
import firebase from '../Firebase';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    if (this.state.loggedIn) {
      return (
          <Redirect to={this.props.location.state.originUrl}/>
      )
    } else {
      return (
          <ContainerDiv flexDirection="column" justifyContent="center" alignItems="center">
            <h1>Welcome, Flying Squirrel here!</h1>
            <Button onClick={this.handleSignIn}>Sign in with Google</Button>
          </ContainerDiv>
      )
    }
  }

  handleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
          localStorage.setItem("user", JSON.stringify(result.user));
          this.setState({
              loggedIn: true
          })
      }).catch((error) => {
          console.log(error)
      });
  };
}

const ContainerDiv = styled(Flex)`
  height: 100vh;
`

export default Login;
