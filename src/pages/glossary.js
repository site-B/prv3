import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'; 
import authors from '../utils/authors'; 

import Layout from "../components/layout"
import SEO from "../components/seo"

const GlossaryPage = () => (
  <Layout>
    <SEO title="about" />
    <h1 className='titles'>Glossary</h1>
    <p className='subtitles'>The glossary compiles everything that needs an explanation.</p>
    <br></br>
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
    <Link 
          className='myButton'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default GlossaryPage