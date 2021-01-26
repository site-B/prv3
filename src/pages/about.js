import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../utils/authors.js'
import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'; 
import AuthorImage from '../images/Victor.jpg';
import { slugify } from '../utils/utilityFunctions'; 

const AboutPage = () => (
  <Layout>
    <SEO title="about + contact" />
    <h1 className='titles'>about + contact</h1>
    <Row className='mb-4'>
      <div className= 'col-md-3'>
        <img src={AuthorImage} style={{ maxWidth: '100%'}} alt="author's pic">

        </img>
      </div>
      <div className='col-md-8'>
        <Card style={{ minHeight: '100%', color: 'crimson'}}>
          <CardBody className='cardBody'>
            <CardTitle className='titles'>
              {authors[0].name}
            </CardTitle>
            <br></br>
            <CardText>
              {authors[0].bio}
            </CardText>
            <CardText>
              This is a placeholder. In the final project the "team page" will be erased. 
            </CardText>
            <CardText>
              <Link to='mailto:victorbalaguera@protonmail.com'>Contact info: victorbalaguera@protonmail.com</Link>
            </CardText>
            <Button className='myButton float-left' color='crimson' href={`/author/${slugify(authors[0].name)}`}>
              View his works.
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <br></br>
    <Link 
          className='myButton'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default AboutPage
