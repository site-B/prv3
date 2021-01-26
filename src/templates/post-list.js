//
import React from 'react';
import Layout from '../components/layout';
import Post from '../components/post';
import { graphql } from 'gatsby';
import { Row, Col } from 'reactstrap'; 
import Sidebar from '../components/Sidebar'; 
import PaginationLinks from '../components/PaginationLinks'; 

const postList = (props) => {
    const posts = props.data.allMarkdownRemark.edges
    const { currentPage, numberOfPages } = props.pageContext 

    return (
        <Layout pageTitle>
        <h1 className='titles'>{`page ${currentPage}`}</h1>
            <Row>
                <Col>
                {posts.map(({node}) => (
                    <Post
                        key={node.id}
                        slug={node.fields.slug}
                        title={node.frontmatter.title}
                        author={node.frontmatter.author}
                        date={node.frontmatter.date}
                        body={node.excerpt}
                        excerpt={node.frontmatter.excerpt}
                        tags={node.frontmatter.tags}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                ))}
                <PaginationLinks 
                currentPage={currentPage} 
                numberOfPages={numberOfPages} 
                    
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

export const postListQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip 
        ) {
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
                                fluid(maxWidth: 650, quality: 90) {
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

export default postList