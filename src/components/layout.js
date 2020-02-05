import React from "react"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import ThemeContext from "../context/ThemeContext"
import Global from "./globalStyle"
import "../fonts/font.css"

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
       <div color="#000">
        <Navbar />
            <Box
              marginTop="90px"
              minHeight="100%"
              marginBottom="60px"
              className="main-container"
              color="#000"
            >
              {children}
            </Box>
            <Footer className="footer"></Footer>
       </div>
        
      )}
    </ThemeContext.Consumer>
  )
}
