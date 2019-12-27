import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import * as ActionTypes from "../../store/action"
const State = props => {
    console.log(5, props);
  if (!props.isLoaded) {
    const data = useStaticQuery(
      graphql`
        {
          allContentfulNavigationLink {
            edges {
              node {
                contentful_id
                title
                externalLink
                page {
                  contentful_id
                }
              }
            }
          }
          allContentfulPage {
            edges {
              node {
                contentful_id
                title
                content {
                  json
                }
                template
              }
            }
          }
        }
      `
    )

    console.log(1, data);
  }


  return <></>
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
export default connect(mapStateToProps, mapDispatchToProps)(State)
