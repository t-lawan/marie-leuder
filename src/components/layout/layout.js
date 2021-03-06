import React, { useState } from "react"
import styled from "styled-components"
import { GlobalStyle, size } from "../../index.styles"
import State from "../state/state"
import Navbar from "../navbar/navbar"
import Background from "../background/background"
import NavbarMobile from "../navbar/navbar-mobile"
import Modal from "../modal/modal"
import { Animated } from "react-animated-css"
import { connect } from "react-redux"
import Construction from "../construction/construction"

const LayoutWrapper = styled.div`
  /* padding: 1em; */
`
const Main = styled.main`
  padding: 1em;
  @media (max-width: ${size.tablet}) {
    padding: 0.3em;
  }
`
const Layout = props => {
  let [userInteracted, setUserInteracted] = useState(false);
  let onMouseDown = () => {
    if(!userInteracted) {
      setUserInteracted(true);
    }
  }
  return (
    <LayoutWrapper onMouseDown={() => onMouseDown()}>
      <Animated
        animationIn={props.experience_transition.animationIn}
        animationOut={props.experience_transition.animationOut}
        isVisible={props.experience_transition.isVisible}
        animateOnMount={false}
        animationInDuration={1000}
        animationOutDuration={200}
      >
        <GlobalStyle />
        <State />
        <Construction />
        {props.isReady ? (
          <>
            <Background onUserInteracted={userInteracted} hideInMobile />
            <Navbar hideInMobile />
            <Modal showInMobile />
            <NavbarMobile showInMobile />
            <Main>{props.children}</Main>
          </>
        ) : null}
      </Animated>
    </LayoutWrapper>
  )
}

const mapStateToProps = state => {
  return {
    experience_transition: state.experience_transition,
    isReady: state.isReady,
  }
}

export default connect(mapStateToProps, null)(Layout)
