import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../../index.styles"
import State from "../state/state";

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
