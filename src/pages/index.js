import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactDetail from "../components/contactDetail"
import IndexStyle from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={IndexStyle.container}>
      <section className={IndexStyle.mainSection}>
        <h1 className={IndexStyle.headerText}>
          Enabling <br />
          Innovative <br />
          Entrepreneurs <br /> in the Niger Delta
        </h1>
      </section>
      <ContactDetail />
    </div>
  </Layout>
)

export default IndexPage
