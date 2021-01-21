import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout pageTitle='Team Page'>
    <SEO title="team" />
    <p>ditto</p>
    <Link 
          className='myReadMoreButtons'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default TeamPage
