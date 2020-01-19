import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import * as ActionTypes from "../../store/action"
import { Convert } from "../../utils/convert"
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
              order
              pages {
                contentful_id
              }
              page {
                contentful_id
                slug
              }
            }
          }
        }
        allContentfulMobileNavigationLink {
          edges {
            node {
              page {
                contentful_id
              }
              contentful_id
              title
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              contentful_id
              title
              slug
              content {
                json
              }
              template
            }
          }
        }
        allContentfulBackgroundVideo {
          edges {
            node {
              contentful_id
              url
              title
            }
          }
        }
      }
    `
  )
  let {
    allContentfulNavigationLink,
    allContentfulPage,
    allContentfulBackgroundVideo,
    allContentfulMobileNavigationLink,
  } = data

  let navLinks = Convert.toModelArray(
    allContentfulNavigationLink,
    Convert.toNavLinkModel
  )

  navLinks.reverse()

  let mobileNavLinks = Convert.toModelArray(
    allContentfulMobileNavigationLink,
    Convert.toNavLinkMobileModel
  )

  let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)

  let videos = Convert.toModelArray(
    allContentfulBackgroundVideo,
    Convert.toVideoModel
  )
  props.setNavLinks(navLinks)
  props.setMobileNavLinks(mobileNavLinks)
  props.setPages(pages)
  props.setVideos(videos)
  props.loaded()
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
    setMobileNavLinks: mobileNavbarLinks =>
      dispatch({
        type: ActionTypes.SET_MOBILE_NAVBAR_LINKS,
        mobileNavbarLinks: mobileNavbarLinks,
      }),
    setPages: pages =>
      dispatch({
        type: ActionTypes.SET_PAGES,
        pages: pages,
      }),
    setVideos: videos =>
      dispatch({
        type: ActionTypes.SET_VIDEOS,
        videos: videos,
      }),
    loaded: () =>
      dispatch({
        type: ActionTypes.IS_LOADED,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(State)
