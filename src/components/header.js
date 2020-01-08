// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/waffiihub-logo.png"

const Header = () => (
  <header>
    <nav className="nav">
      <div className="logo-container">
        <img style={{ height: 70 }} alt="WaffiiHub logo" src={Logo} />
      </div>

      <div>
        
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
