import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap'; 
import { Link, graphql, StaticQuery } from 'gatsby'; 
import Img from 'gatsby-image'; 
import YouTube from 'react-youtube'; 
import axios from 'axios'; 


const opts = {
    height: '100%',
    width: '100%'
}



function Sidebar() {
    const [posts, setPosts] = useState([])
    const x = Math.floor((Math.random() * 1642) + 1);

    useEffect(() => {
        axios
            .get('https://type.fit/api/quotes')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    

    return (
        <div>
    
            <Card className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    Today's quote
                </CardTitle>
                {
                    posts.map(
                        post => (
                        <ul>{post.text} <p></p>{post.author}</ul>
                    )).slice(x, x + 1)
                }
            </Card>

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
                The Future Refused To Change. 
                </CardText>
                <YouTube opts={opts}
                    videoId="cMP9PPOoFiw"
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
}

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

/*API FETCH CALL CODE: 

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xojrhqbxFQ7T4FGGyyipF7vw7n2xAGTr') //url here + api key according to nyt api docs
        
        .then(response => {
            // console.log(response);  1. to check if this works, and it works here; 
            // consider that doing this in gatsby, it also pulls static data from graphql and/or pulls out data from a dynamic source and makes it static during the build process; more info in the gatsby doc 

            return response.json()
        }).then(json => {
            //console.log(json)  2. check out what we receive, so we can decide on what we need to render here 
            this.setState({ // 3. setting state; in this case the name is results because it's the name it uses, could be anything 
                fetchedData: json.results,
                loading: false, 
            })
        })
    }
    
    */ 