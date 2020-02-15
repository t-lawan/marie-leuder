import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { levels, size } from "../../index.styles"
import PropTypes from "prop-types"
import * as ActionTypes from "../../store/action"
import { HamburgerBoring } from "react-animated-burgers"

const ModalWrapper = styled.div`
  display: ${props => (props.show ? "grid" : "none")};
  top: 0;
  width: 50vw;
  left: ${props => (props.left ? "0%" : "50%")};
  height: 100vh;
  grid-template-rows: [row1-start] 10%;
  grid-template-columns: 1fr;
  padding: 0 1.2rem;
  @media (max-width: ${size.tablet}) {
    width: 100vw;
    left: 0;
  }
  /* padding-left: 1rem; */
  overflow-x: hidden;
  position: fixed;
  z-index: ${levels.modal};
  background: white;
  overflow-y: scroll;
  grid-template-areas: "header header" "main main";
  /* transform: translateY(-100%); */
  animation: transform 400ms ease-in;

`

const Hamburger = styled(HamburgerBoring)`
  padding: 0.1rem;
  justify-self: end;
  /* top: 0; */
  /* position: fixed; */
`

const ModalHeader = styled.div`
  align-content: flex-start;
  display: flex;
  flex-grow: 1;
  padding: 1rem 2rem;
  padding-bottom: 0rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  grid-area: header;
  display: ${props => (props.show ? "flex" : "none")};
  /* position: sticky; */
  background: white;
  top: 0;
  z-index: ${levels.modalText};
`
const FixedHeader = styled.div`
  position: fixed;
  /* width: 50%; */
  width: inherit;
  background: white;
  z-index: ${levels.modalText};
  left: ${props => props.left ?  '0%' :  ''};
  right: ${props => props.left ?  '' :  '0%'};
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`
const ModalBody = styled.div`
  padding: 1rem;
  padding-top: ${props => (props.noOfColumns === 1 ? "1rem" : "2rem")};
  display: grid;
  width: ${props => (props.noOfColumns === 1 ? "50%" : "100%")};
  grid-template-columns: ${props =>
    props.noOfColumns === 1 ? "1fr" : "5fr 5fr 0.5fr"};
  /* margin-top: 5rem; */

  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
  grid-column-gap: 1.7rem;
  align-items: flex-start;
  justify-items: flex-start;
`

const ModalTitleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.noOfColumns === 1 ? "1fr" : "9fr 9fr"};
`

const ModalTitle = styled.h2`
  padding: 1rem;
  padding-left: 0;
`
class Modal extends React.Component {
  modalRef;
  constructor(props) {
    super(props)
    this.modalRef = React.createRef();
    this.state = {
      show: this.props.show_modal,
    }
  }

  componentDidUpdate(prevProps) {
    // if(this.props.show_modal !== prevProps.show_modal) {
    //   if(this.props.show_modal) {
    //     console.log('OPEN');
    //     this.modalRef.current.classList.remove('slide-out');
    //     this.modalRef.current.classList.add('slide-in');


    //   } else {
    //     console.log('CLOSE');
    //     this.modalRef.current.classList.remove('slide-in');
    //     this.modalRef.current.classList.add('slide-out');
    //   }
    // }
  }

  render() {
    return (
      <ModalWrapper
        show={this.props.show_modal}
        left={this.props.left}
        noOfColumns={this.props.noOfColumns}
        ref={this.modalRef}
        // className={this.props.show_modal ? 'slide-in' : 'slide-out'}
      >
        {/* <ModalHeaderWrapper show={this.props.noOfColumns === 1}> */}
        <FixedHeader left={this.props.left}>
          <ModalHeader show={true}>
            <ModalTitleContainer noOfColumns={this.props.title.length}>
              {this.props.title.map((tit, index) => (
                <ModalTitle key={index}>{tit.toUpperCase()} </ModalTitle>
              ))}
            </ModalTitleContainer>
            <Hamburger
              onClick={() => this.props.hideModal()}
              isActive={this.props.show_modal}
              barColor="black"
              buttonWidth={25}
            />
          </ModalHeader>
        </FixedHeader>

        {/* </ModalHeaderWrapper> */}

        <ModalBody noOfColumns={this.props.noOfColumns}>
          {this.props.component ? this.props.component : ""}
          {/* {this.props.noOfColumns > 1 ? (
            <Hamburger
              hidden={this.props.noOfColumns < 2}
              onClick={() => this.props.hideModal()}
              isActive={this.props.show_modal}
              barColor="black"
              buttonWidth={30}
            />
          ) : null} */}
        </ModalBody>
      </ModalWrapper>
    )
  }
}

Modal.propTypes = {
  element: PropTypes.element,
  // title: PropTypes.string,
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
