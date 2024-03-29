import React from "react"
import styled from "styled-components"
import { levels, size } from "../../index.styles"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/action"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { shuffle } from "../../utils/shuffle"
// import Img from 'gatsby-image';
const VideoWrapper = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: ${levels.background};
  transform: translate(-50%, -50%);
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
  /* animation-name: fadeIn;
  animation-duration: 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-50%, -100%);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%, -50%);
    } 
  } */
`

const BackgroundWrapper = styled.div`
  margin: 0;
  padding: 0;
  @media (max-width: ${size.tablet}) {
    background: black;
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`

const NavigationButton = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  font-size: 2rem !important;
  color: white;
  z-index: ${levels.navbar};
`

const VideoNavigation = styled.div`
  z-index: ${levels.navbar};
  min-width: 100%;
  min-height: 100%;
  background: transparent;
  /* width: auto;
  height: auto; */
  color: white;
  display: flex;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  padding: 0 1rem;
  /* @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  } */
`

// const BackgroundImg = styled(Img)`
//   min-width: 100%;
//   min-height: 100%;
//   display: none;
//   z-index: ${levels.background};
//   position: fixed !important;

//   @media (max-width: ${size.tablet}) {

//     display: ${props => (props.showInMobile ? "inherit" : "none")};
//   }
// `

class Background extends React.Component {
  videos
  index
  videoRef
  visibleTransitionTime = 5000
  isPlaying = false
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random() * this.props.videos.length) 
    this.videos = this.props.videos;
    this.setState({
      index: randomNumber
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.onUserInteracted !== this.props.onUserInteracted) {
      this.videoRef.current.play();
    }
  }

  nextVideo = () => {
    this.props.slideLeft()
    if (this.state.index === this.videos.length - 1) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })

      setTimeout(() => {
        this.props.setIsVisibleToTrue()
      }, this.visibleTransitionTime)

      this.videoRef.current.load()
    }
  }

  previousVideo = () => {
    this.props.slideRight()
    if (this.state.index === 0) {
      this.setState({
        index: this.videos.length - 1,
      })
    } else {
      this.setState({
        index: this.state.index - 1,
      })
    }

    setTimeout(() => {
      this.props.setIsVisibleToTrue()
    }, this.visibleTransitionTime)

    this.videoRef.current.load()
  }



  render() {
    return (
      <BackgroundWrapper onClick={() => this.props.hideModal()}>
        {/* <BackgroundImg showInMobile={true} fluid={this.props.background_images[0].fluid} /> */}
        {this.videos ? <VideoWrapper
          onEnded={() => this.nextVideo()}
          ref={this.videoRef}
          autoPlay
          loop
          playsInline={true}
          disablePictureInPicture={true}
        >
          <source
            src={this.videos[this.state.index].url}
            type="video/mp4"
          ></source>
        </VideoWrapper> : null}
      </BackgroundWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    videos: state.videos,
    experience_transition: state.experience_transition,
    background_images: state.background_images,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentVideo: currentVideo =>
      dispatch({
        type: ActionTypes.SET_CURRENT_VIDEO,
        currentVideo: currentVideo,
      }),
    slideLeft: () => dispatch({ type: ActionTypes.SLIDE_LEFT_TRANSITION }),
    slideRight: () => dispatch({ type: ActionTypes.SLIDE_RIGHT_TRANSITION }),
    setIsVisibleToTrue: () =>
      dispatch({ type: ActionTypes.SET_IS_VISIBLE_TO_TRUE }),
    hideModal: () =>
      dispatch({
        type: ActionTypes.HIDE_MODAL,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)
