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
        
      )}
    </ThemeContext.Consumer>
  )
}
