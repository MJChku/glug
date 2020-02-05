import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "./Home/top"
import Middle from "./Home/middle"
import Bottom from "./Home/bottom"
import { Box } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <Text justifyContent="center" textAlign="center" fontWeight="500">
            <strong> This the secret place where I write my stories...</strong>
    </Text>
  
  </Layout>
)

export default IndexPage
