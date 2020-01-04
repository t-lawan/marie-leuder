import React from "react"
import styled from "styled-components"
import { levels } from "../../index.styles";
import { connect } from "react-redux"
import { shuffle } from "../../utils/shuffle";

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

class Background extends React.Component {
    videos;
    index;
    videoRef;
    constructor(props) {
        super(props);
        this.index = 0;
        this.videos = shuffle(this.props.videos);
        this.videoRef = React.createRef();
    }
    
    componentDidMount() {
        console.log(this.videoRef);
    }

    nextVideo = () => {
        if(this.index === this.videos.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.videoRef.play();
    }

    previousVideo = () => {
        if(this.index === 0) {
            this.index = this.videos.length - 1;
        } else {
            this.index--;
        }

        this.videoRef.play();
    }

    render() {
        return (
            <VideoWrapper onEnded={() => this.nextVideo()} ref={this.videoRef} autoPlay muted loop>
                <source src={this.videos[this.index].url} type="video/mp4"></source>
            </VideoWrapper>
        )
    }
}
const mapStateToProps = state => {
    return {
      videos: state.videos
    }
  }

  export default connect(mapStateToProps, null)(Background)

