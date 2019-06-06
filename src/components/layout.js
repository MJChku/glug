import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import Navbar from "./navbar.js"
import { Box } from "rebass"
import Footer from "../pages/footer"
export default function Layout({ children }) {
  return (
    <React.StrictMode>
    
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar />

          <Box>{children}</Box>

          <Footer />
        </Box>
      </ThemeProvider>
    
    </React.StrictMode>
  )
}
