/* import React from 'react'; 
import { Link } from "gatsby"
import Layout from '../components/layout';
import Post from '../components/post';
import { graphql } from 'gatsby'; 
import authors from '../utils/authors';

const authorPosts = ({ data, pageContext }) => {
    const { totalCount } = data.allMarkdownRemark; 
    const author = authors.find(x => x.name === pageContext.authorName); 
    const pageHeader = `Number of posts from ${pageContext.authorName}: ${totalCount}`; 

    return (
        <Layout 
        pageTitle={pageHeader}
        postAuthor={author}
        >
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                    key={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    tags={node.frontmatter.tags}

            ))}
            <Link 
                className='myButton'
                to={'/'}>Go home
            </Link>
        </Layout>
    )

}

export const authorQuery = graphql`
    query($authorName: String!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC}
            filter: { frontmatter: { author: { eq: $authorName}}}
        ) {
            totalCount
            edges {
                node {
                    id 
                    frontmatter { 
                        title 
                        date
                        tags
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

export default authorPosts;  */