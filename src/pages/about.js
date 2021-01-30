import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../utils/authors.js'
import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'; 
import AuthorImage from '../images/Victor.jpg';

const AboutPage = () => (
  <Layout className='titles'>
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
            This blog is a small side-project designed as an excellent excuse to finally tackle GraphQL, Gatsby, and Bootstrap through Reactstrap.
            </CardText>
            <CardText>
              <Link to='mailto:victorbalaguera@protonmail.com'>Contact info: victorbalaguera@protonmail.com</Link>
            </CardText>
            <Button className='myButton float-left' color='crimson' href='https://quizzical-lamport-4cf71d.netlify.app/index.html' taget='_blank'>
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
