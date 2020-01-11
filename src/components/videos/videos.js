import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles";

const VideosWrapper = styled.section`
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`
const Videos = props => {
  return (
    <VideosWrapper showInMobile={props.showInMobile}>
      {props.videos.map((video, index) => (
        <p key={index}> 
            {video.title}
         </p>
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
