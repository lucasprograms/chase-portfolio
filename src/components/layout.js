/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ children, headerBackgroundColor, headerColorInverted }) => {
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
    <div className="overflow-auto">
      <div className="container-fluid 2xl:container mx-auto 2xl:px-5">
        <Header
          email={data.site.siteMetadata?.email || `chase.mccain3@gmail.com`}
          backgroundColor={headerBackgroundColor || '#FFFFFF'}
          colorInverted={headerColorInverted}
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
  headerBackgroundColor: PropTypes.string,
  headerColorInverted: PropTypes.bool,
}

export default Layout
