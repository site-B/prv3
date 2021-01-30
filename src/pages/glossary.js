import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'; 
import YouTube from 'react-youtube'; 

import Layout from "../components/layout"
import SEO from "../components/seo"

const opts = {
  height: '500px',
  width: '100%'
}

const GlossaryPage = () => (
  <Layout>
    <SEO title="about" />
    <h1 className='titles'>Glossary</h1>
    <p className='subtitles'>The glossary compiles everything that needs an explanation.</p>
    <br></br>
    <Card style={{ minHeight: '100%', color: 'crimson'}}>
          <CardBody className='cardBody'>
            <CardTitle className='glossaryEntry'>
              <Link to={'/same-as-it-ever-was'}>
                Same as it ever was.
              </Link>
            </CardTitle>
            <br></br>
            <CardText className='glossaryText'>
            Johnathan Demme's 1983 Stop Making Sense is not only one of the greatest movies ever made, but it is the origin of arguably <a href='https://open.spotify.com/album/4FR8Z6TvIsC56NLyNomNRE' target='_blank'> the best Talking Heads album</a>.  Ever.
            </CardText>
            <YouTube opts={opts}
                    videoId="TGofoH9RDEA"
                />
          </CardBody>
        </Card>
    <Link 
          className='myButton'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default GlossaryPage