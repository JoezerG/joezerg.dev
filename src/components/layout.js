import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import { GlobalStyles } from "../theme/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
