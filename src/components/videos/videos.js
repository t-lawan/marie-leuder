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

const PlayButton = styled.button`
  color: red;
  font-size: 1rem;
  position: absolute;
  margin: 0 auto;
  display: block;
  /* top: 50%; */
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Video = styled.video`
  width: 90%;
  padding: 1rem;
  margin: auto;
  z-index: -2;
  /* position: absolute; */

`
const Videos = props => {
  return (
    <VideosWrapper showInMobile={props.showInMobile}>
      {props.videos.map((video, index) => (
        <VideoContainer key={index}>
          <PlayButton> Play </PlayButton>
          <Video >
            <source src={video.url} type="video/mp4" />
          </Video>
        </VideoContainer>
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
