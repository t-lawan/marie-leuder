import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextOptions } from "../../utils/richtext";
import { levels } from "../../index.styles";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavbarLink = styled(AniLink)`

`
const NavbarWrapper = styled.div`
  padding: 1rem;
  z-index: ${levels.navbar};
`

const NavbarRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`

const PageContent = styled.section`
  background: white;
  padding: 1rem;
  max-width: 34vw;
  overflow-y: scroll;
  animation-name: fadeIn;
  animation-duration: 2s;
  z-index: ${levels.navbar};
  @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-10%);
    } 
    100% {
        opacity: 1;
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
`
class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  links
  pages
  

  componentDidMount() {
    this.hideAllLinks();
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
    this.hideAllLinks();
    this.setState({ 
      [link_id]: !this.state[link_id],
    })
  }
  render() {
    this.links = this.props.navbarLinks
    this.pages = this.props.pages

    return (
      <NavbarWrapper>
        <NavbarRow>
          {this.links.map((link, index) => (
            <div key={index}>
              {/* <NavbarLink to={`/${link.slug}`}>
              {link.title}{" "}

              </NavbarLink> */}
              <NavbarTitle onClick={() => this.togglePageContent(link.id)}>
                {" "}
                {link.title}{" "}
              </NavbarTitle>
            </div>
          ))}
        </NavbarRow>

        <NavbarRow>
          {this.links.map((link, index) => (
            <div key={index}>
              <PageContent onClick={() => this.togglePageContent(link.id)} hidden={this.state ? !this.state[link.id] : true}>
                {
                  documentToReactComponents(this.pages.find(page => {
                    return page.id === link.page_id
                  }).content.json, richTextOptions)
                }
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
