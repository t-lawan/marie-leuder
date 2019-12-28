import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../../index.styles"
import State from "../state/state";
import Navbar from "../navbar/navbar";
import Background from "../background/background";

const LayoutWrapper = styled.div`
  padding: 1em;
`
const Main = styled.main`
  padding: 1em;
`
const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      <Background />
      <Navbar />
      <Main>
        {props.children}
      </Main>
    </LayoutWrapper>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// }

export default Layout
