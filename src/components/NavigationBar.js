import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { variables } from '../styles/variables'
import MediaQuery from 'react-responsive'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`

const navItems = [
  {
    key: 'home',
    text: 'Home',
    url: '/',
    icon: <StyledIcon type="home" />
  },
  {
    key: 'checkin',
    text: 'Check in',
    url: '/check-in',
    icon: <StyledIcon type="environment" />
  },
  {
    key: 'leaderboard',
    text: 'Leaderboard',
    url: '/leaderboard',
    icon: <StyledIcon type="user" />
  }
]

export class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };


  renderDesktopNavbar = () => {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        {_.map(navItems, (item) => {
          return (
            <Menu.Item key={item.key}>
              <Link to={item.url}>
                {item.icon}
                {item.text}
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }

  renderMobileNavbar = () => {
    return (
      <MobileContainerDiv>
        <StyledMenu defaultSelectedKeys={['home']} mode="horizontal">
          {_.map(navItems, item => {
            return (
              <StyledMenuItem key={item.key}>
                {item.icon}
                <Link to={item.url} />
              </StyledMenuItem>
            )
          })}
        </StyledMenu>
      </MobileContainerDiv>
    )
  }

  render() {
    return (
      <MediaQuery query={variables.media.md}>
        {(matches) => {
          if (matches) {
            return (
              this.renderDesktopNavbar()
            )
          }
          return (
            this.renderMobileNavbar()
          )
        }}
      </MediaQuery>
    )
  }
}

const MobileContainerDiv = styled.div` 
  background: white;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  box-shadow: 0px -3px 8px rgba(238, 238, 238, 0.35);
`

const StyledMenu = styled(Menu)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledMenuItem = styled(Menu.Item)`
  flex-grow: 1;
  text-align: center;
`

export default NavigationBar
