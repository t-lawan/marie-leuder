import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { levels, size } from "../../index.styles"
import PropTypes from "prop-types"
import * as ActionTypes from "../../store/action"
import { HamburgerElasticReverse } from "react-animated-burgers"

const ModalWrapper = styled.div`
  display: ${props => (props.show ? "inherit" : "none")};
  top: 0;
  width: 50vw;
  left: ${props => (props.left ? 0 : '50%')};
  height: 100vh;
  @media (max-width: ${size.tablet}) {
    width: 100vw;
    left: 0;
  }
  position: fixed;
  z-index: ${levels.modal};
  background: white;
  overflow-y: scroll;
`

const ModalHeader = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
`

const ModalBody = styled.div`
  padding: 1rem;
  padding-top: 0;
`

const ModalTitle = styled.h2`
  padding: 1rem;
  padding-left: 0;
`
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: this.props.show_modal,
    }
  }

  render() {
    return (
      <ModalWrapper
        show={this.props.show_modal}
        left={this.props.left}
      >
        <ModalHeader>
          <ModalTitle>{this.props.title.toUpperCase()} </ModalTitle>
          <HamburgerElasticReverse
            onClick={() => this.props.hideModal()}
            isActive={this.props.show_modal}
            barColor="black"
          />
        </ModalHeader>
        <ModalBody>
          {this.props.component ? this.props.component : ""}
        </ModalBody>
      </ModalWrapper>
    )
  }
}

Modal.propTypes = {
  element: PropTypes.element,
  title: PropTypes.string,
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () =>
      dispatch({
        type: ActionTypes.HIDE_MODAL,
      }),
  }
}

const mapStateToProps = state => {
  return {
    navbarLinks: state.navbarLinks,
    pages: state.pages,
    show_modal: state.show_modal,
    component: state.modal_component,
    title: state.modal_title,
    left: state.modal_position_left
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
