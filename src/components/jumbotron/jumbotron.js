import React from "react"
import WhiteLogo from "../assets/LUEDER-LOGO-WHITE.svg"
import styled from "styled-components"
import { levels, size } from "../../index.styles"
const JumbotronWrapper = styled.section`
  z-index: ${levels.jumbotron};
  position: fixed;
  width: auto;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  top: 40%;
  margin: auto;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`
const JumbotronImage = styled.img`
  max-width: 40%;
  display: block;
  margin: 0 auto;
  text-align: center;
`
const Jumbotron = props => {
  return (
    <JumbotronWrapper hideInMobile={props.hideInMobile}>
      <JumbotronImage src={WhiteLogo} />
    </JumbotronWrapper>
  )
}

export default Jumbotron
