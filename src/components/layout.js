/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          email
          linkedin
        }
      }
    }
  `)

  return (
    <div className="container mx-auto" style={{ maxWidth: '1280px' }}>
      <div className="m-5">
        <Header
          email={data.site.siteMetadata?.email || `chase.mccain3@gmail.com`}
        />
        <main>{children}</main>
        <Footer
          email={data.site.siteMetadata?.email || `chase.mccain3@gmail.com`}
          author={data.site.siteMetadata?.author || `Chase McCain`}
          linkedInUrl={data.site.siteMetadata?.linkedin}
        />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
