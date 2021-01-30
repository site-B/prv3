import React from 'react';
import Layout from '../components/layout'; 
import { graphql, Link } from 'gatsby'; 
import SEO from '../components/seo';
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'; 
import Img from 'gatsby-image'; 
import { slugify } from '../utils/utilityFunctions'; 
/* import authors from '../utils/authors';  */
/* import { DiscussionEmbed } from 'disqus-react'; PENDING */

const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter; 
    /* const author = authors.find(x => x.name === post.author).imageUrl;  */
    const baseUrl = 'https://www.gatsbytutorial.co.uk/' // PLACEHOLDER

/*     const disqusShortname = 'https-gatsbytutorial-co-uk';
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    } PENDING */

    return (
        <Layout>
            <SEO title={post.title}/>
            <h1 className='postTitles'>{post.title}</h1>

                    <Card>
                        <Img className='card-image-top' fluid={post.image.childImageSharp.fluid}>

                        </Img>
                        <CardBody className='cardBody'>
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