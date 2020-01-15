import React from "react"
import styled from "styled-components"
import { GlobalStyle, size } from "../../index.styles"
import State from "../state/state";
import Navbar from "../navbar/navbar";
import Background from "../background/background";
import NavbarMobile from "../navbar/navbar-mobile";
import Modal from "../modal/modal";
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
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      <Background hideInMobile/>
      <Navbar hideInMobile/>
      <Modal showInMobile />
      <NavbarMobile showInMobile/>
      <Main>
        {props.children}
      </Main>
    </LayoutWrapper>
  )
}


export default Layout
