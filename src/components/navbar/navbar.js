import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { levels, size } from "../../index.styles"
import * as ActionTypes from '../../store/action';
import PageContent from "../page-content/page-content";

// const NavbarLink = styled(AniLink)``
const NavbarWrapper = styled.div`
  padding: 1rem;
  z-index: ${levels.navbar};
  max-height: 100vh;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`

const NavbarRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: auto;
  padding-bottom: 1rem;
`
const TopNavbarRow = styled.div`
  /* position: fixed; */
  top: 0;
`

const NavbarTitle = styled.h2`
  color: white;
  z-index: ${levels.navbarText};
  :hover {
    font-style: italic;
  }
`

const NavbarTitleContainer = styled.div`
  text-align: left;
  padding: 1rem;
  width: 50%;
`
class Navbar extends React.Component {
  links
  pages

  componentDidMount() {
    this.hideAllLinks()
  }

  generatePages(pageIds) {
    return (
      <>
        {pageIds.map((id, index) => (
          <PageContent withTitle={true} key={index} id={id} />
        ))}
      </>
    )
  }

  hideAllLinks = () => {
    this.links.forEach(link => {
      this.setState({
        [link.id]: false,
      })
    })
  }

  togglePageContent = link_id => {
    this.hideAllLinks()
    this.setState({
      [link_id]: !this.state[link_id],
    })
  }
  render() {
    this.links = this.props.navbarLinks.sort((a, b) => {
      return a.order - b.order
    })
    this.pages = this.props.pages

    return (
      <NavbarWrapper hideInMobile={this.props.hideInMobile}>
        <TopNavbarRow>
          <NavbarRow>
            {this.links.map((link, index) => (
              <NavbarTitleContainer key={index}>
                <NavbarTitle onClick={() => this.props.showModal(this.generatePages(link.page_ids) , link.title, index === 0 ? true : false, link.page_ids.length)}>
                  {" "}
                  {link.title.toUpperCase()}{" "}
                </NavbarTitle>
              </NavbarTitleContainer>
            ))}
          </NavbarRow>
        </TopNavbarRow>
      </NavbarWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    navbarLinks: state.navbarLinks,
    pages: state.pages,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      showModal: (component, title, left, noOfColumns) =>
        dispatch({
          type: ActionTypes.SHOW_MODAL,
          component: component,
          title: title,
          left: left,
          noOfColumns: noOfColumns
        }),
      hideModal: () => 
        dispatch({
            type: ActionTypes.HIDE_MODAL
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
