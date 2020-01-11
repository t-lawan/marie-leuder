import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size, levels } from "../../index.styles"
import * as ActionTypes from "../../store/action"
import Logo from '../assets/LUEDER-LOGO-BLACK.svg';
const NavbarMobileWrapper = styled.div`
  display: none;
  padding: 1em;

  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const NavbarMobileLogo = styled.img`
    max-width: 30%;
`

const NavLinksContainer = styled.nav`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: ${levels.navbar};

`

class NavbarMobile extends React.Component {
  render() {
    return (
      <NavbarMobileWrapper showInMobile={this.props.showInMobile}>
        <NavLinksContainer>
          <NavbarMobileLogo src={Logo} />
          <p> Hamburger </p>
        </NavLinksContainer>
      </NavbarMobileWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentVideo: currentVideo =>
      dispatch({
        type: ActionTypes.SET_CURRENT_VIDEO,
        currentVideo: currentVideo,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile)
