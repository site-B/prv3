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
/*     const [quotes, setQuotes] = useState([])
    const x = Math.floor((Math.random() * 1642) + 1);

    useEffect(() => {
        axios
            .get('https://type.fit/api/quotes')
            .then(res => {
                console.log(res)
                setQuotes(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []) */
    

    return (
        <div>
    
{/*             <Card>
                <CardBody className='cardBody'>
                    <CardTitle className='sidebarTitle text-center mb-3'>
                        Today's quote
                    </CardTitle>
                    {
                        quotes.map(
                            quote => (
                            <CardText className='sidebarText'><p className='quotes'>
                            {quote.text}
                            </p> 
                            <p>{quote.author}</p></CardText>
                        )).slice(x, x + 1)
                    }
                </CardBody>
            </Card> */}

        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    Today's video
                </CardTitle>
                <CardText className='sidebarText'>
                    This would make for an interesting text
                </CardText>
                <YouTube opts={opts}
                    videoId="VC2_SL4EX1s"
                />
            </CardBody>
        </Card>
        <Card>
            <CardBody className='cardBody'>
                <CardTitle className='sidebarTitle text-center mb-3'>
                    TIL
                </CardTitle>
                <CardText className='sidebarText'>
                The Mozambique Drill (AKA the Failure Drill, or Failure to Stop drill) is a close-quarters shooting technique where the shooters fires twice into the targert's torso and head. In that order. The technique was somewhat popularized by the films Collateral and Heat. Both directed by Michael Mann.  
                </CardText>
                <YouTube opts={opts}
                    videoId="O8QrWm3Acc0"
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