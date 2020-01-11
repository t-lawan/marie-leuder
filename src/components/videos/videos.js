import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"

const VideosWrapper = styled.section`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
  text-align: center;
`

const Video = styled.video`
  width: 85%;
  padding: 1rem;
  margin: auto;
`
const Videos = props => {
  return (
    <VideosWrapper showInMobile={props.showInMobile}>
      {props.videos.map((video, index) => (
        <Video key={index}>
          <source src={video.url} type="video/mp4" />
        </Video>
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
