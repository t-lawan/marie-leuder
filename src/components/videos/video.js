import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const PlayButton = styled.button`
  color: red;
  font-size: 1rem;
  position: absolute;
  margin: 0 auto;
  margin: 20% 35%;
  /* visibility: hidden; */
  display: block;
  /* top: 50%; */
`

const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  position: absolute;
  margin: 0 auto;
  margin: 22.5% 40%;
  visibility: ${props => props.show ? 'visible' : 'hidden'}
`

const VideoContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`

const VideoPlayer = styled.video`
  width: 90%;
  padding: 0;
  padding-bottom: 0.5rem;
  margin: 0 auto;
  z-index: -2;
  /* position: absolute; */
`
class Video extends React.Component {
  videoRef
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      currentTime: 0,
      length: 0,
    }
    this.videoRef = React.createRef()
  }

  setVideoInfo = () => {
    let video = this.videoRef.current
    this.setState({
      currentTime: video.currentTime,
      length: video.duration,
    })
  }

  play = () => {
    this.videoRef.current.play()
    this.setState({
      isPlaying: true,
    })
  }

  pause = () => {
    this.videoRef.current.pause()
    this.setState({
      isPlaying: false,
    })
  }

  updateProgress = () => {
    let video = this.videoRef.current
    this.setState({
      currentTime: video.currentTime,
    })
  }

  reset = () => {
    if (this.videoRef.current.currentTime === this.state.length) {
      this.videoRef.current.currentTime = 0
    }
  }

  componentDidMount() {
    console.log(this.videoRef.current)
  }

  render() {
    return (
      <VideoContainer
        onClick={() => (this.state.isPlaying ? this.pause() : this.play())}
      >
        <ButtonIcon
          onClick={() => (this.state.isPlaying ? this.pause() : this.play())}
          color="white"
          icon={faPlay}
          show={this.state.isPlaying ? 0 : 1}
        />
        <VideoPlayer
          onTimeUpdate={() => this.updateProgress()}
          onLoadedMetadata={() => this.setVideoInfo()}
          ref={this.videoRef}
        >
          <source src={this.props.video.url} type="video/mp4" />
        </VideoPlayer>
      </VideoContainer>
    )
  }
}

export default Video
