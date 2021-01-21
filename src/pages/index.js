import React from "react"
import { graphql, StaticQuery } from 'gatsby'; 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/Post'; 
import Sidebar from '../components/Sidebar'; 
import { Row, Col } from 'reactstrap'; 

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={[`procedural`, `gatsby`]}/>
    <h1 className='titles'>procedural</h1>

    <Row>
      <Col>
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
                  slug={node.fields.slug}
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

  </Layout>
)

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}
    limit: 5
    ) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          author
          tags
          image {
            childImageSharp {
              fluid(quality: 85, maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
