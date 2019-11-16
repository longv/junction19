import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
// import posed from 'react-pose';
import {ReactComponent as Logo} from "../svg-assets/loading.svg";

class CheckIn extends React.Component {
    state = {
        isCheckingIn: false
    };

    render() {
        const { isCheckingIn } = this.state;
        return (
            <ContainerDiv justifyContent="center" alignItems="center">
                {
                    !isCheckingIn &&
                    <AnimatedButton justifyContent="center" alignItems="center" onClick={this.checkIn}>
                        Check in
                    </AnimatedButton>
                }
                {
                    isCheckingIn &&
                    <Logo/>
                }
            </ContainerDiv>
        );
    }

    checkIn = () => {
        this.setState({isCheckingIn: true})
    }
}

const ContainerDiv = styled(Flex)`
  height: 100vh;
`;

const Circle = styled(Flex)`
    padding: 10px;
    margin: 20px;
    display: inline-block;
    background-color: #AFEDD9;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;
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