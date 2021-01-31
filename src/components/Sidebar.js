import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap'; 
import { Link, graphql, StaticQuery } from 'gatsby'; 
import Img from 'gatsby-image'; 
import YouTube from 'react-youtube'; 

const opts = {
    height: '100%',
    width: '100%'
}

const Sidebar = () => (
    <div>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    Today's video
                </CardTitle>
                <CardText className='sidebarText'>
                    The first seconds of Mr. Self Destruct (from NIN's <a href='https://open.spotify.com/album/3nJnyDV8fwFpffo0EyHQto?autoplay=true' target='_blank' rel="noreferrer">The Downward Spiral</a>) belong to 1971's <a href='https://www.imdb.com/title/tt0066434/?ref_=nv_sr_srsg_0' target='_blank' rel="noreferrer">THX 1138</a>. The first film by George Lucas. 
                </CardText>
                <YouTube opts={opts}
                    videoId="cOppY-p7gQI"
                />
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    TIL
                </CardTitle>
                <CardText className='sidebarText'>
                Rudolph Valentino became a star after his appearance in The Four Horsemen of the Apocalypse, a 1921 war epic silent film based on the Spanish book Los cuatro jinetes del Apocalipsis written by Vicente Blasco Ibáñez.
                </CardText>
                <YouTube opts={opts}
                    videoId="H2pjqE-qjsc"
                />
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    Recent Posts
                </CardTitle>
                <StaticQuery 
                    query={sidebarQuery} 
                    render={(data) => (
                        <div>
                            {
                                data.allMarkdownRemark.edges.map(({node}) => (
                                    <Card key={node.id}>
                                        <Link to={node.fields.slug}>
                                            <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                                        </Link>
                                        <CardBody className='cardBody'>
                                            <CardTitle className='text-center mb-3'>
                                                <Link to={node.fields.slug}>
                                                    {node.frontmatter.title}
                                                </Link>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        </div>
                )}/>
            </CardBody>
        </Card>
    </div>
)

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
            edges {
              node {
                id
                frontmatter {
                  title
                  image {
                    childImageSharp {
                      fluid(quality: 100, maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                fields {
                    slug
                }
              }
            }
          }
    }
`

export default Sidebar; 