import React from "react"
import styled from "styled-components"
import MP4Video from "../../assets/Marie Lueder Web Sketch.mp4"
const VideoWrapper = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translate(-50%, -50%);
`
const Background = props => {

    return (
        <VideoWrapper autoPlay muted loop >
            <source src={MP4Video} type="video/mp4"></source>
        </VideoWrapper>
    )
}

export default Background
