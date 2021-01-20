import React from "react"
import { Link } from "gatsby";
import { graphql, StaticQuery } from 'gatsby'; 

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Post from '../components/post'; 
import { Row, Col } from 'reactstrap'; 

const IndexPage = () => (
  <Layout>
    <SEO title="procedural" />
    <h1>procedural v3 index page </h1>
    <p>index page</p>

    <Row>
      <Col md='8'>
        <StaticQuery 
        query={indexQuery}
        render={data => {
          return (
            <div>
              {
                data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post 
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  path={node.frontmatter.path}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  /> 
                ))
              }
            </div>
          )
        }}
        />
      </Col>
      <Col md='4'>
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'grey'
          }}>
            SIDEBAR HERE 
        </div>
      </Col>
    </Row>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          author
          path
          image {
            childImageSharp {
              fluid(quality: 85, maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
