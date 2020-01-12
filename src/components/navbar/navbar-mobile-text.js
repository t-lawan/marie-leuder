import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/action"
import PageContent from "../page-content/page-content";

const Link = styled.p`
    padding: 0.5rem;
    :hover {
        cursor: pointer;
    }
`
class NavbarMobileText extends React.Component {

    selectPage = (pageId) => {
        console.log('page', pageId);
        let page = this.props.pages.find((pg) => {
            return pg.id === pageId;
        })
        // this.props.hideModal();
        setTimeout(() => {
            this.props.showModal(<PageContent id={pageId} />, page.title)
        }, 5)
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
      navbarLinks: state.navbarLinks,
      pages: state.pages
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        showModal: (component, title) =>
          dispatch({
            type: ActionTypes.SHOW_MODAL,
            component: component,
            title: title
          }),
        hideModal: () => 
          dispatch({
              type: ActionTypes.HIDE_MODAL
          })
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobileText)
  