import { Link } from "gatsby"
import React from "react"
import { Text, Box } from "rebass"
import styled from "styled-components"
import ThemeContext from "../context/ThemeContext"

const NavBar = styled.div`
  display: flex;
  position: fixed;
  position: -webkit-fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  height: 80px;
  align-items: center;
  background-color: white;
  box-shadow: 0 5px 30px rgba(127, 0, 255, 0.15);
`

const Links = styled(Link)({
  color: "#fa7acd",
  textDecoration: "none",
  padding: "0.5em",
})

const Logo = styled(Text)({
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "1.6em",
})

const MenuItems = styled(Text)({
  fontFamily: "Montserrat",
  fontWeight: "600",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  margin: "auto",
  alignItems: "center",
  alignSelf: "center",
})

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <NavBar>
        <Text fontWeight="bold" p={4}>
          <Links to="/">
            <Logo>MJCooper</Logo>
          </Links>
        </Text>
        <Box mx="auto" />
        <MenuItems p={[6, 2, 2]}>
          <Links variant="nav" to="/blog" activeClassName="borderMarker">
            <Text fontSize={[3, 4, 4]}>Little Story</Text>
          </Links>
        </MenuItems>
      </NavBar>
    )}
  </ThemeContext.Consumer>
)

export default Header
