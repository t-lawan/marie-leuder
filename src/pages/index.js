import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout";
import Jumbotron from "../components/jumbotron/jumbotron";
import Videos from "../components/videos/videos";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron hideInMobile />
    <Videos showInMobile />
  </Layout>
)

export default IndexPage
