import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout pageTitle='tags'>
    <SEO title="about" />
    <p>tags page</p>
    <Link 
          className='myReadMoreButtons'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default TagsPage
