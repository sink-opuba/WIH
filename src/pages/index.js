import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyle from "../styles/index.module.scss"
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={IndexStyle.container}>
      <section className={IndexStyle.mainSection}>
        <h1 className={IndexStyle.headerText}>
          Enabling Innovative Entrepreneurs <br /> in the Niger Delta
        </h1>
      </section>
      <section className={IndexStyle.contactDetails}>
        <h2 className={IndexStyle.contactHeader}>Get in Touch</h2>
        <div className={IndexStyle.contactSocial}>
          <ul className={IndexStyle.socialIconList}>
            <li>
              <a style={{ color: "#1DA1F2" }} href="#twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a style={{ color: "#3A5895" }} href="#twitter" href="#facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a style={{ color: "#CC0068" }} href="#instagram">
                <FaInstagram />{" "}
              </a>
            </li>

            <li>
              <a style={{ color: "#ffffff" }} href="#linkedIn">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <div className={IndexStyle.contactInfo}>
          <ul>
            <li>
              <span>
                <MdEmail />
              </span>
              <a href="mailto:info@warriinnovationhub.com">
                info@warriinnovationhub.com
              </a>
            </li>
            <li>
              <span>
                <MdPhone />
              </span>
              <a href="tel:+2349016344696">+234-901-634-4696</a>
            </li>

            <li>
              <span>
                <MdLocationOn />
              </span>
              3rd floor, Isoken Plaza,
              <br />
              Enerhen Junction, Warri, Nigeria.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
