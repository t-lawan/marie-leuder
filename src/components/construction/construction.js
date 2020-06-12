import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { levels, size } from "../../index.styles"
import ConstructionPlaceholder from '../assets/placeholder.mp4'
const ConstructionWrapper = styled.div`
  /* position: fixed; */
  display: ${props => (props.hide ? 'block': 'none')};
  margin: 0;
  padding: 0;
  background: black;
  width: 100%;
  height: 100%;
  z-index: ${levels.modalText};
`

const Text =  styled.div`
  z-index:1020;
  top: 50%;
  left: 20%;
  margin: 0 1rem ;
  position: fixed;
  text-align: center;

  @media (max-width: ${size.laptop}) {
    left: 13%;
  }
  @media (max-width: ${size.mobileXL}) {
    left: 0%;
  }
  
`

const ConstructionVideoWrapper = styled.video`
  z-index: ${levels.modalText};
  position: fixed;
  top: 50%;
  left: 50%;
  /* min-width: 100%;
  min-height: 100%; */
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transform: translate(-50%, -50%);
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`

const Construction = props => {
  return (
    <ConstructionWrapper hide={!props.isReady}>
       <Text>
           <h4> 12.06.2020 11.55 BTS LUEDER 20/20 launch @ www.londonfashionweek.co.uk/lueder</h4>
           <h4> LFW #LFWRESET #POSITIVEFASHION</h4>
       </Text>
      <ConstructionVideoWrapper
        autoPlay
        muted
        loop
        playsInline={true}
        disablePictureInPicture={true}
      >
        <source
          src={ConstructionPlaceholder}
          type="video/mp4"
        ></source>
      </ConstructionVideoWrapper>
    </ConstructionWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isReady: state.isReady,
  }
}

export default connect(mapStateToProps, null)(Construction)
