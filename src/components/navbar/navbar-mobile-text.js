import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/action"

const Link = styled.p`
    padding: 0.5rem;
    :hover {
        cursor: pointer;
    }
`
class NavbarMobileText extends React.Component {

    selectPage = (pageId) => {
        console.log('page', pageId);
        this.props.hideModal();
    }
    render() {
        return (
            <>
                {this.props.navbarLinks.map((link ) => (
                    <Link key={link.id} onClick={() => this.selectPage(link.page_id)}> {link.title.toUpperCase()} </Link>
                ))}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      videos: state.videos,
      show_modal: state.show_modal,
      navbarLinks: state.navbarLinks
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        showModal: (component) =>
          dispatch({
            type: ActionTypes.SHOW_MODAL,
            component: component
          }),
        hideModal: () => 
          dispatch({
              type: ActionTypes.HIDE_MODAL
          })
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobileText)
  