import React from 'react';
import { Card, CardTitle, CardBody, Form, FormGroup, Input, Button } from 'reactstrap'; 
import { Link, graphql, StaticQuery } from 'gatsby'; 
import Img from 'gatsby-image'; 

const Sidebar = () => (
    <div>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center mb-3'>
                    Newsletter
                </CardTitle>
                <Form className='text-center'>
                    <FormGroup>
                        <Input type='email' name='email' placeholder='Your email here'/>
                    </FormGroup>
                    <Button className='btn btn-outline-success text-uppercase'>
                        It's yours, my friend
                    </Button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center mb-3'>
                    Today's video
                </CardTitle>
                <img src='https://via.placeholder.com/320x200' alt='placeholder image' style={{ width: "100%"}}></img>
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center mb-3'>
                    TIL
                </CardTitle>
                <img src='https://via.placeholder.com/320x200' alt='placeholder image 2' style={{ width: "100%"}}></img>
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center mb-3'>
                    Today on this day
                </CardTitle>
                <img src='https://via.placeholder.com/320x200' alt='placeholder image 3' style={{ width: "100%"}}></img>
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center mb-3'>
                    Twitter feed? 
                </CardTitle>
                <img src='https://via.placeholder.com/320x200' alt='placeholder image 4' style={{ width: "100%"}}></img>
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center mb-3'>
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