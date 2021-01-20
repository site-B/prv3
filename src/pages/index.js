import React from "react"
import { Link } from "gatsby";
import { graphql, StaticQuery } from 'gatsby'; 

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Post from '../components/Post'; 
import Sidebar from '../components/Sidebar'; 
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
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  path={node.frontmatter.path}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                  /> 
                ))
              }
            </div>
          )
        }}
        />
      </Col>
      <Col md='4'>
        <Sidebar>

        </Sidebar>
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
          tags
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
