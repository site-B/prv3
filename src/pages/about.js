import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle='about us'>
    <SEO title="about" />
    <p>about page</p>

    <h1>+ contact</h1>
    <p>contact info</p>
    <Link 
          className='myReadMoreButtons'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default AboutPage
