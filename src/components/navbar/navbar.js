import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utils/richtext"
import { levels } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavbarLink = styled(AniLink)``
const NavbarWrapper = styled.div`
  padding: 1rem;
  z-index: ${levels.navbar};
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
const NavbarTitle = styled.p`
  text-align: center;
  color: pink;
  z-index: ${levels.navbarText};
`
class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  links
  pages

  componentDidMount() {
    this.hideAllLinks()
  }

  hideAllLinks = () => {
    this.links.forEach(link => {
      // console.log(link)
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
      <NavbarWrapper>
        <TopNavbarRow>
          <NavbarRow>
            {this.links.map((link, index) => (
              <NavbarTitle
                key={index}
                onClick={() => this.togglePageContent(link.id)}
              >
                {" "}
                {link.title}{" "}
              </NavbarTitle>
            ))}
          </NavbarRow>
        </TopNavbarRow>

        <NavbarRow>
          {this.links.map((link, index) => (
            <div key={index}>
              <PageContent
                onClick={() => this.togglePageContent(link.id)}
                hidden={this.state ? !this.state[link.id] : true}
              >
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
