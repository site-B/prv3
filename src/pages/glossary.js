import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const GlossaryPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>Glossary</h1>
    <p>index page</p>
    <Link 
          className='myReadMoreButtons'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default GlossaryPage