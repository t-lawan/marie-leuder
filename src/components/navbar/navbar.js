import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utils/richtext"
import { levels, size } from "../../index.styles"
import CloseIcon from '../assets/close.svg';
// import AniLink from "gatsby-plugin-transition-link/AniLink"

// const NavbarLink = styled(AniLink)``
const NavbarWrapper = styled.div`
  padding: 1rem;
  z-index: ${levels.navbar};
  max-height: 100vh;
  @media (max-width: ${size.tablet}) {
    display: ${props => props.hideInMobile ? 'none' : 'inherit'};
  }
`

const CloseImage = styled.img`
  width: 10%;
`

const NavbarRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  padding-bottom: 1rem;
`

const TopNavbarRow = styled.div`
  /* position: fixed; */
  top: 0;
`

const PageContent = styled.section`
  background: white;
  padding: 1rem;
  width: 34vw;
  height: 85vh;
  overflow-y: scroll;
  animation-name: fadeIn;
  animation-duration: 2s;
  z-index: ${levels.navbar};
  @keyframes fadeIn {
    0% {
      /* opacity: 0; */
      transform: translateY(-100%);
    }
    100% {
      /* opacity: 1; */
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-10%);
    }
  }
`

const PageContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`
const NavbarTitle = styled.h2`
  text-align: center;
  color: white;
  z-index: ${levels.navbarText};
`
class Navbar extends React.Component {
  links
  pages

  componentDidMount() {
    this.hideAllLinks()
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
    this.links = this.props.navbarLinks
    this.pages = this.props.pages

    return (
      <NavbarWrapper hideInMobile={this.props.hideInMobile}>
        <TopNavbarRow>
          <NavbarRow>
            {this.links.map((link, index) => (
              <NavbarTitle
                key={index}
                onClick={() => this.togglePageContent(link.id)}
              >
                {" "}
                {link.title.toUpperCase()}{" "}
              </NavbarTitle>
            ))}
          </NavbarRow>
        </TopNavbarRow>

        <NavbarRow>
          {this.links.map((link, index) => (
            <div key={index}>
              <PageContent
                
                hidden={this.state ? !this.state[link.id] : true}
              >
                <PageContentHeader onClick={() => this.togglePageContent(link.id)}>
                  <h2> {link.title} </h2>
                  <CloseImage src={CloseIcon} alt="x" />
                </PageContentHeader>
                {documentToReactComponents(
                  this.pages.find(page => {
                    return page.id === link.page_id
                  }).content.json,
                  richTextOptions
                )}
              </PageContent>
            </div>
          ))}
        </NavbarRow>
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

export default connect(mapStateToProps, null)(Navbar)
