import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo";
import { Card, CardBody } from 'reactstrap'; 
import { Link, graphql } from 'gatsby'; 
import Img from 'gatsby-image'; 

const NotFoundPage = ({data}) => {
  const fluid = data.imageSharp.fluid;

  return (
    <Layout>
    <SEO title="404: Not found" />
    <Card>
      <CardBody itemAlign='center' className='cardBody'>
        <Img fluid={fluid}>

        </Img>
        <h1>404</h1>
        <div style={{ textAlign: 'center'}}>
          <p>You're not supposed to be here.</p>
          <p>As a matter of fact, you're not.</p>
          <p>Get back where you belong, and forget all about this.</p>
          <p>Until we meet again.</p>
        </div>
        <Link 
          className='myButton'
          to={'/'}>Go home
        </Link>
      </CardBody>
    </Card>
  </Layout>
  )
}

export default NotFoundPage;

export const notFoundQuery = graphql`
  query notFoundQuery {
    imageSharp(fluid: {originalName: {eq: "404.jpg"}}) {
      id
      fluid(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
