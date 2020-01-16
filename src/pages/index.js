import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout";
import Jumbotron from "../components/jumbotron/jumbotron";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron hideInMobile />
  </Layout>
)

export default IndexPage
