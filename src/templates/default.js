import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utils/richtext"
import { levels } from "../index.styles"
import { connect } from "react-redux"
import * as ActionTypes from '../store/action';
const PageContent = styled.section`
  background: white;
  padding: 1rem;
  max-width: 34vw;
  overflow-y: scroll;
  animation-name: fadeIn;
  animation-duration: 2s;
  z-index: ${levels.navbar};
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const Default = props => {
  let page = props.pageContext
  console.log("prop", props.pageContext)
  return (
    <Layout>
      <SEO title="Default" />
      <PageContent>
        {documentToReactComponents(page.content.json, richTextOptions)}
      </PageContent>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNavLinks: navLinks =>
      dispatch({
        type: ActionTypes.SET_NAVBAR_LINKS,
        navbarLinks: navLinks,
      }),
    setPages: pages =>
      dispatch({
        type: ActionTypes.SET_PAGES,
        pages: pages,
      }),
    loaded: () =>
      dispatch({
        type: ActionTypes.IS_LOADED,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Default)
