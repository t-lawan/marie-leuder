import React from "react"
import styled from "styled-components"
import { levels } from "../../index.styles"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/action"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
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

const BackgroundWrapper = styled.div`
  margin: 0;
  padding: 0;
`

const NavigationButton = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`

const VideoNavigation = styled.div`
  z-index: ${levels.navbar};
  min-width: 100%;
  min-height: 100%;
  padding: 1rem;
  /* width: auto;
  height: auto; */
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 50%;
`

class Background extends React.Component {
  videos
  index
  videoRef
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
    }
    this.videos = this.props.videos
  }

  componentDidMount() {
    this.videoRef = React.createRef()

  }

  nextVideo = () => {
    if (this.state.index === this.videos.length - 1) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })

      this.videoRef.current.load()
    }
  }

  previousVideo = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.videos.length - 1,
      })
    } else {
      this.setState({
        index: this.state.index - 1,
      })
    }
    this.videoRef.current.load()
  }

  render() {
    return (
      <BackgroundWrapper>
        <VideoWrapper
          onEnded={() => this.nextVideo()}
          ref={this.videoRef}
          autoPlay
          muted
          loop
        >
          <source
            src={this.videos[this.state.index].url}
            type="video/mp4"
          ></source>
        </VideoWrapper>
        <VideoNavigation>
          <NavigationButton
            icon={faChevronLeft}
            onClick={() => this.previousVideo()}
          />
          <NavigationButton
            icon={faChevronRight}
            onClick={() => this.nextVideo()}
          />
        </VideoNavigation>
      </BackgroundWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentVideo: currentVideo =>
      dispatch({
        type: ActionTypes.SET_CURRENT_VIDEO,
        currentVideo: currentVideo,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Background)
