import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { levels } from "../../index.styles"
import PropTypes from "prop-types"
import * as ActionTypes from "../../store/action"
import Burger from "@animated-burgers/burger-slip"
import "@animated-burgers/burger-slip/dist/styles.css"
import "../navbar/navbar-mobile.css"
const ModalWrapper = styled.div`
  display: ${props => (props.show ? "inherit" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${levels.modal};
  background: rgb(242, 242, 242);
`

const ModalHeader = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row-reverse;
  justify-content: space-between;
`

const ModalBody = styled.div`

  padding: 1rem;

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
      <ModalWrapper show={this.props.show_modal && this.props.showInMobile}>
        <ModalHeader>
          <Burger
            onClick={() => this.props.hideModal()}
            isOpen={this.props.show_modal}
            direction="right"
          />
        </ModalHeader>
        <ModalBody>
          {this.props.component ? this.props.component : ''}
        </ModalBody>
      </ModalWrapper>
    )
  }
}

Modal.propTypes = {
  element: PropTypes.element,
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
    component: state.modal_component
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
