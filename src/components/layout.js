/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"; 
import Footer from './Footer'; 
import "../styles/index.scss"; 
import { Container } from 'reactstrap'; 

const Layout = ({ children, pageTitle}) => (
  <StaticQuery 
    query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}

  render={data => (
    <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>

      <Header siteTitle={data.site.siteMetadata.title} />

      <Container
        className='container'
        id='content'
        >
        <h1>{pageTitle}</h1>
        {children}
      </Container>
      
      <Footer></Footer>
    </>
  )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
