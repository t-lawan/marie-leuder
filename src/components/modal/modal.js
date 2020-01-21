import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { levels, size } from "../../index.styles"
import PropTypes from "prop-types"
import * as ActionTypes from "../../store/action"
import { HamburgerElasticReverse } from "react-animated-burgers"

const ModalWrapper = styled.div`
  display: ${props => (props.show ? "grid" : "none")};
  top: 0;
  width: 50vw;
  left: ${props => (props.left ? 0 : "50%")};
  height: 100vh;
  grid-template-rows: [row1-start] 15%;
  grid-template-columns: 1fr;
  padding: 0 1.3rem;
  @media (max-width: ${size.tablet}) {
    width: 100vw;
    left: 0;
  }
  position: fixed;
  z-index: ${levels.modal};
  background: white;
  overflow-y: scroll;
  grid-template-areas:
    "header header"
    "main main";
`

const Hamburger = styled(HamburgerElasticReverse)`
  padding: 0.1rem;
`
const ModalHeaderWrapper = styled.div`
  padding: 1rem;
  display: ${props => (props.show ? "inherit" : "none")};
  position: fixed;
`
const ModalHeader = styled.div`
  align-content: flex-start;
  display: flex;
  flex-grow: 1;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  display: ${props => (props.show ? "flex" : "none")};
`

const ModalBody = styled.div`
  padding: 1rem;
  padding-top: ${props => (props.noOfColumns === 1 ? "0" : "2rem")};
  display: grid;
  width: ${props => (props.noOfColumns === 1 ? "80%" : "100%")};
  grid-template-columns: ${props =>
    props.noOfColumns === 1 ? "1fr" : "5fr 4fr 1fr"};
  grid-column-gap: 1rem;
  align-items: flex-start;
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
        noOfColumns={this.props.noOfColumns}
      >
        {/* <ModalHeaderWrapper show={this.props.noOfColumns === 1}> */}
          <ModalHeader show={this.props.noOfColumns === 1}>
            <ModalTitle>{this.props.title.toUpperCase()} </ModalTitle>
            <Hamburger
              onClick={() => this.props.hideModal()}
              isActive={this.props.show_modal}
              barColor="black"
            />
          </ModalHeader>
        {/* </ModalHeaderWrapper> */}

        <ModalBody noOfColumns={this.props.noOfColumns}>
          {this.props.component ? this.props.component : ""}
          {this.props.noOfColumns > 1 ? (
            <Hamburger
              hidden={this.props.noOfColumns < 2}
              onClick={() => this.props.hideModal()}
              isActive={this.props.show_modal}
              barColor="black"
            />
          ) : null}
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
    left: state.modal_position_left,
    noOfColumns: state.modal_number_of_columns,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
