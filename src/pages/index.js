import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "./Home/top"
import Middle from "./Home/middle"
import Bottom from "./Home/bottom"
import { Box } from "rebass"
import styled from "styled-components"

const TT = styled(Text)({
  fontFamily: "Montserrat",
  fontWeight: "bold",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",
  fontSize: "1.6em",
})
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TT justifyContent="center" textAlign="center" fontWeight="500">
            <strong> This the secret place where I write my stories...</strong>
    </TT>
  
  </Layout>
)

export default IndexPage
