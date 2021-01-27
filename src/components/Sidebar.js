import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap'; 
import { Link, graphql, StaticQuery } from 'gatsby'; 
import Img from 'gatsby-image'; 
import ReactPlayer from "react-player"

const Sidebar = () => (
    <div>

        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    Today's video
                </CardTitle>
                <CardTitle className='sidebarText'>
                    Someone made the wise, wise decision of mixing Surveillance Camera Man with Postal 2. Note: I do not condone this kind of fun fuckery. 
                </CardTitle>
                <ReactPlayer width='100%' controls='true'
                url="https://youtu.be/lDq4ELQPrVA"
              />
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    TIL
                </CardTitle>
                <CardTitle className='sidebarText'>
                    Rudolph Valentino became a star after his appearance in The Four Horsemen of the Apocalypse, a 1921 war epic silent film based on the Spanish book Los cuatro jinetes del Apocalipsis written by Vicente Blasco Ibáñez. 
                </CardTitle>
                <ReactPlayer width='100%' controls='true'
                url="https://www.youtube.com/watch?v=H2pjqE-qjsc"
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
                                            <CardTitle>
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