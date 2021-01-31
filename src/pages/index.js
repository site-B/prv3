import React from "react"
import { graphql, StaticQuery } from 'gatsby'; 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/post'; 
import Sidebar from '../components/Sidebar'; 
import { Row, Col } from 'reactstrap'; 
import PaginationLinks from '../components/PaginationLinks'; 

const IndexPage = () => {

  const postsPerPage = 5; 
  let numberOfPages 

  return (
    <Layout>
    <SEO title="procedural" keywords={[`procedural`, `gatsby`]}/>
    <h1 className='titles'>procedural</h1>

    <Row>
      <Col>
        <StaticQuery 
        query={indexQuery}
        render={data => {

          numberOfPages = Math.ceil(
          data.allMarkdownRemark.totalCount / postsPerPage
          ); 

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
                  excerpt={node.frontmatter.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                  /> 
                ))
              }
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
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
}

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}
    limit: 5
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          author
          tags
          excerpt
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


/*ORIGINAL CODE: 

import React from "react"
import { graphql, StaticQuery } from 'gatsby'; 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/post'; 
import Sidebar from '../components/Sidebar'; 
import { Row, Col } from 'reactstrap'; 
import PaginationLinks from '../components/PaginationLinks'; 

const IndexPage = () => {

  const postsPerPage = 5; 
  let numberOfPages 

  return (
    <Layout>
    <SEO title="home" keywords={[`procedural`, `gatsby`]}/>
    <h1 className='titles'>procedural</h1>

    <Row>
      <Col>
        <StaticQuery 
        query={indexQuery}
        render={data => {

          numberOfPages = Math.ceil(
          data.allMarkdownRemark.totalCount / postsPerPage
          ); 

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
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
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
}

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}
    limit: 5
    ) {
    totalCount
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
*/