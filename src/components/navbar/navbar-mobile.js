import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size, levels } from "../../index.styles"
import * as ActionTypes from "../../store/action"
import Logo from "../assets/LUEDER-LOGO-WHITE.svg"
import Burger from "@animated-burgers/burger-slip"
import "@animated-burgers/burger-slip/dist/styles.css"
import "./navbar-mobile.css"
import NavbarMobileText from "./navbar-mobile-text";
const NavbarMobileWrapper = styled.div`
  display: none;
  padding: 1rem;

  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
`

const NavbarMobileLogo = styled.img`
  max-width: 40%;
`

const NavbarHeaderMobile = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: ${levels.navbar};
`

class NavbarMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <NavbarMobileWrapper showInMobile={this.props.showInMobile}>
        <NavbarHeaderMobile>
          <NavbarMobileLogo src={Logo} />
          <Burger
            onClick={() => this.props.showModal(<NavbarMobileText />, '')}
            isOpen={this.props.show_modal}
            direction="right"
          />
        </NavbarHeaderMobile>
      </NavbarMobileWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    show_modal: state.show_modal,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    showModal: (component, title) =>
      dispatch({
        type: ActionTypes.SHOW_MODAL,
        component: component,
        title: title
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile)
