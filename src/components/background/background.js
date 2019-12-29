import React from "react"
import styled from "styled-components"
import { levels } from "../../index.styles";
const VideoWrapper = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: ${levels.background};
  transform: translate(-50%, -50%);
`

const Background = props => {
    let randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber > 2) {
        randomNumber = 2;
    }
    let urls = [
        "https://marie-leuder.s3.eu-west-2.amazonaws.com/jezmi+mp4.mp4",
        "https://marie-leuder.s3.eu-west-2.amazonaws.com/dave.mp4",
        "https://marie-leuder.s3.eu-west-2.amazonaws.com/Marks+view.mp4"
      ]

      console.log(randomNumber);
    return (
        <VideoWrapper autoPlay muted loop >
            <source src={urls[randomNumber]} type="video/mp4"></source>
        </VideoWrapper>
    )
}

export default Background
