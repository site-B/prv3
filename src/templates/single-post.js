import React from 'react';
import Layout from '../components/layout'; 
import Sidebar from '../components/Sidebar'; 
import { graphql, Link } from 'gatsby'; 
import SEO from '../components/seo';
import { Badge, Row, Col, Card, CardBody, CardSubtitle } from 'reactstrap'; 
import Img from 'gatsby-image'; 
import { slugify } from '../utils/utilityFunctions'; 

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter; 

    return (
        <Layout>
            <SEO title={post.title}/>
            <h1>{post.title}</h1>

                    <Card>
                        <Img className='card-image-top' fluid={post.image.childImageSharp.fluid}>

                        </Img>
                        <CardBody>
                            <CardSubtitle>
                                <span className='text-info'>
                                    {post.date}
                                </span> by{' '}
                                <span className='text-info'>
                                    {post.author}
                                </span>
                            </CardSubtitle>
                            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>

                            </div>
                            <ul className='post-tags'>
                                {
                                    post.tags.map(tag => (
                                        <li key={tag}>
                                            <Link to={`/tag/${slugify(tag)}`}>
                                                <Badge style={{backgroundColor: "black"}}>{tag}</Badge>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </CardBody>
                    </Card>

        </Layout>
    )

}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                author
                date
                tags
                image {
                    childImageSharp{
                        fluid(quality: 100, maxWidth: 960) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }

            }
        }

    }
`

export default SinglePost; 