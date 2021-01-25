import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GlossaryPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>Glossary</h1>
    <p>glossary page</p>
    <br></br>
    <Link 
          className='myButton'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default GlossaryPage