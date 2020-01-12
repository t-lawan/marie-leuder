import React from "react"
import styled from "styled-components"
import { levels } from "../../index.styles";
import { connect } from "react-redux"

const PageContentWrapper = styled.section`
  background: white;
  padding: 1rem;
  width: 34vw;
  height: 85vh;
  overflow-y: scroll;
  animation-name: fadeIn;
  animation-duration: 2s;
  z-index: ${levels.navbar};
  @keyframes fadeIn {
    0% {
      /* opacity: 0; */
      transform: translateY(-100%);
    }
    100% {
      /* opacity: 1; */
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-10%);
    }
  }
`

const PageContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const PageContent = props => {
    return (
        <PageContentWrapper>

        </PageContentWrapper>
    )
}
const mapStateToProps = state => {
    return {
      navbarLinks: state.navbarLinks,
      pages: state.pages,
    }
  }
  
export default connect(mapStateToProps, null)(PageContent)

