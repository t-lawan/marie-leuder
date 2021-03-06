import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import * as ActionTypes from "../../store/action"
import { Convert } from "../../utils/convert"
import moment from "moment"
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
                order
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
        allContentfulBackgroundGif {
          edges {
            node {
              contentful_id
              image {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
                title
              }
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              contentful_id
              title
              showTitle
              slug
              content {
                json
              }
              template
              order
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
    allContentfulBackgroundGif,
  } = data

  let navLinks = Convert.toModelArray(
    allContentfulNavigationLink,
    Convert.toNavLinkModel
  )

  let backgroundImages = Convert.toModelArray(
    allContentfulBackgroundGif,
    Convert.toBackgroundImageModel
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

  // Check if current datetime is greater than set date time

  let setDate = moment("2020-06-12T12:00:00+01:00")
  const isReady = moment().isSameOrAfter(setDate)
  if (isReady) {
    props.isReady()
  }
  props.setBackgroundImages(backgroundImages)
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
    setBackgroundImages: backgroundImages =>
      dispatch({
        type: ActionTypes.SET_BACKGROUND_IMAGES,
        background_images: backgroundImages,
      }),
    loaded: () =>
      dispatch({
        type: ActionTypes.IS_LOADED,
      }),
    isReady: () =>
      dispatch({
        type: ActionTypes.IS_READY,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(State)
