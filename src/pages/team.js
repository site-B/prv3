/* import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../utils/authors.js'
import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'; 
import AuthorImage from '../images/Victor.jpg';
import AuthorPlaceholder from '../images/AuthorPlaceholder.jpg';
import { slugify } from '../utils/utilityFunctions'; 

const TeamPage = () => (
  <Layout>
    <SEO title="team page" keywords={[`procedural`, `gatsby`, `blog`]}/>
    <h1 className='titles'>Team Page</h1>
    <Row className='mb-4'>
      <div className= 'col-md-3'>
        <img src={AuthorImage} style={{ maxWidth: '100%'}} alt="author's pic">

        </img>
      </div>
      <div className='col-md-8'>
        <Card style={{ minHeight: '100%', color: 'crimson'}}>
          <CardBody className='cardBody'>
            <CardTitle>
              {authors[0].name}
            </CardTitle>
            <CardText>
              {authors[0].bio}
            </CardText>
            <Button className='myButton float-left' color='crimson' href={`/author/${slugify(authors[0].name)}`}>
              View his works.
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className='mb-4'>
      <div className= 'col-md-3'>
        <img src={AuthorPlaceholder} style={{ maxWidth: '100%'}} alt="author's pic">

        </img>
      </div>
      <div className='col-md-8'>
        <Card style={{ minHeight: '100%', color: 'crimson'}}>
          <CardBody className='cardBody'>
            <CardTitle>
              {authors[1].name}
            </CardTitle>
            <CardText>
              {authors[1].bio}
            </CardText>
            <Button className='myButton float-left' color='crimson' href={`/author/${slugify(authors[1].name)}`}>
              View her works.
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Link 
          className='myButton'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default TeamPage
 */