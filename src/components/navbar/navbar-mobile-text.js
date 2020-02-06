import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/action"
import PageContent from "../page-content/page-content";

const Link = styled.h2`
    padding: 0.5rem;
    :hover {
        cursor: pointer;
    }
`

const NavLinksContainer = styled.div`

`
class NavbarMobileText extends React.Component {
    selectPage = (pageId) => {
        let page = this.props.pages.find((pg) => {
            return pg.id === pageId;
        })
        // this.props.hideModal();
        setTimeout(() => {
            this.props.showModal(<PageContent withParagraph={false} withTitle={false} id={pageId} />, [page.title])
        }, 5)
    }
    render() {
        return (
            <NavLinksContainer>
                {this.props.navbarLinks.map((link ) => (
                    <Link key={link.id} onClick={() => this.selectPage(link.page_id)}> {link.title.toUpperCase()} </Link>
                ))}
            </NavLinksContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
      videos: state.videos,
      show_modal: state.show_modal,
      navbarLinks: state.mobileNavbarLinks,
      pages: state.pages
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        showModal: (component, title) =>
          dispatch({
            type: ActionTypes.SHOW_MODAL,
            component: component,
            title: title,
            left: true,
            noOfColumns: 1
          }),
        hideModal: () => 
          dispatch({
              type: ActionTypes.HIDE_MODAL
          })
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobileText)
  