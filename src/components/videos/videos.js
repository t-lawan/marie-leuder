import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import Video from "./video";

const VideosWrapper = styled.section`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
  text-align: center;
`

const Videos = props => {
  return (
    <VideosWrapper showInMobile={props.showInMobile}>
      {props.videos.map((video, index) => (
        <Video video={video} key={index} />
      ))}
    </VideosWrapper>
  )
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps, null)(Videos)
