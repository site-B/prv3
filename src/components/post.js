// post cards for previsualization at index
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'; 
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'; 
import { slugify } from '../utils/utilityFunctions'; 

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return (
        <Card>
            <Link to={slug}>
                <Img className='card-image-top' fluid={fluid}>

                </Img>
            </Link>
            <CardBody>
                <CardTitle>
                  <Link to={slug}>
                    {title}  
                  </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className='text-info'>
                        {date}
                    </span> by {' '}
                    <span className='text-info'>
                        {author}
                    </span>
                </CardSubtitle>
                <CardText>
                    {body}
                </CardText>
                <ul className='post-tags'>
                    {
                        tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge style={{backgroundColor: "black"}}
                                    className='text-uppercase'>
                                        {tag}
                                    </Badge>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Link
                    to={slug} 
                    className='btn btn-outline-primary float-right'>
                    Read more
                </Link>
            </CardBody>
        </Card>
    )
}

export default Post; 