import React from "react"
import styled from "styled-components"
import { connect } from "react-redux";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavItem = styled(AniLink)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`
const NavbarWrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`
const NavbarTitle = styled.p`
  margin-bottom: 2em;
`
const Navbar = props => {
    const links = props.navbarLinks;


  return (
    <NavbarWrapper>
        {links.map((link, index) => (
            <NavItem swipe direction="up" to={'/'} key={index}> Link </NavItem>
        ))}
    </NavbarWrapper>
  )
}
const mapStateToProps = state => {
    return {
      navbarLinks: state.navbarLinks,
    }
  }

export default connect(mapStateToProps, null)(Navbar)

