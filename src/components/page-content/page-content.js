import React from "react"
import styled from "styled-components"
import { levels } from "../../index.styles";
import { connect } from "react-redux"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utils/richtext";

const PageContentWrapper = styled.section`
  /* padding: 1rem; */
  z-index: ${levels.navbar};
`

const PageText = styled.div`
  margin-top: ${props => props.margin ? "5rem" : "0"};
  /* position: relative; */
`

const PageTitle = styled.h2`
`

const PageTitleContainer = styled.div`
  background: white;
  display: ${props => props.show ? "block" : "none"};
  top: 0;
  position: fixed;
  padding-top: 1rem;
  width: inherit;
`

const PageContent = props => {
    let id = props.id;
    let page = props.pages.find((pg) => {
      return pg.id === id;
    })
    return (
        <PageContentWrapper>
          <PageTitleContainer show={props.withTitle}>
            <PageTitle> {page.title.toUpperCase()}</PageTitle>
          </PageTitleContainer>
          <p hidden={!props.withParagraph}> {page.title.toUpperCase()}</p>
          <PageText margin={props.withTitle}>
            {documentToReactComponents(page.content.json, richTextOptions)}
          </PageText>
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

