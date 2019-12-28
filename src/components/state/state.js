import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import * as ActionTypes from "../../store/action"
import { Convert } from "../../utils/convert";
const State = props => {
//   if (!props.isLoaded) {
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
    let {allContentfulNavigationLink, allContentfulPage} = data;

    let navLinks = Convert.toModelArray(allContentfulNavigationLink, Convert.toNavLinkModel);
    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel);
    props.setNavLinks(navLinks);
    props.setPages(pages);
    props.loaded();
//   }


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
