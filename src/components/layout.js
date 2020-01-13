/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import "../styles/global.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className={layoutStyles.container}>
        <Navigation />
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
