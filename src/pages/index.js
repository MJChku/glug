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
    <p>
      This the secret place where I write my stories...
    </p>
  </Layout>
)

export default IndexPage
