import React from 'react';
import Layout from '../components/layout'; 
import { graphql, Link } from 'gatsby'; 
import SEO from '../components/seo';
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'; 
import Img from 'gatsby-image'; 
import { slugify } from '../utils/utilityFunctions'; 


const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter; 
    const baseUrl = 'https://elegant-bassi-d0fe18.netlify.app/' 
    const image = post.frontmatter.image.childImageSharp.fluid ? post.frontmatter.image.childImageSharp.resize : null

    return (
        <Layout>
            <SEO 
                title={post.title}
                description={post.excerpt}
                image={image}
                author={post.author}
                pathname={this.props.location.pathname}
            />
            <h1 className='titles'>{post.title}</h1>

                    <Card>
                        <Img className='card-image-top' fluid={post.image.childImageSharp.fluid}>

                        </Img>
                        <CardBody className='cardBody'>
                            <CardSubtitle>
                                <span className='post-info'>
                                    {post.date}
                                </span> by{' '}
                                <span className='post-info'>
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
                                                <Badge className='myTags'>{tag}</Badge>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <br/>
                            <Link
                                to={'/'} 
                                className='myButton float-left'>
                                Go back
                            </Link>
                        </CardBody>

                    </Card>
                    <h3 className='share-this-post text-center'>
                        Share this post
                    </h3>
                    <div className='text-center social-share-links'>
                        <ul>
                            <li>
                                <a href={'https://www.twitter.com/share?url=' + 
                                baseUrl + 
                                pageContext.slug +
                                '&text=' +
                                post.title +
                                '&via' +
                                'twitterHandle'}
                                className='twitter' target='_blank'
                                rel='noopener noreferrer'>
                                    <i className="fab fa-twitter fa-2x"/>
                                </a>
                            </li>


                        </ul>
                    </div>

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
                excerpt
                image {
                    childImageSharp{
                        fluid(quality: 100, maxWidth: 960) {
                            ...GatsbyImageSharpFluid
                        }
                        resize(width: 1200) {
                            src
                            height
                          }
                    }
                }

            }

        }

    }
`

export default SinglePost; 