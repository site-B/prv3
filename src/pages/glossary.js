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
    <p className='subtitles text-center'>The glossary compiles everything that needs an explanation.</p>
    <Card style={{ minHeight: '100%', color: 'crimson'}}>
        <CardBody className='cardBody'>
          <CardTitle className='glossaryEntry'>
            <Link to={'/same-as-it-ever-was'}>
              Same as it ever was.
            </Link>
          </CardTitle>
          <CardText className='glossaryText'>
          Johnathan Demme's 1983 Stop Making Sense is not only one of the greatest movies ever made, but it is the origin of arguably <a href='https://open.spotify.com/album/4FR8Z6TvIsC56NLyNomNRE' target='_blank' rel="noreferrer"> the best Talking Heads album</a>.  Ever.
          </CardText>
          <YouTube opts={opts}
                  videoId="TGofoH9RDEA"
              />
        </CardBody>
      </Card>

      <h1 className='titles'>Today's video</h1>
      <p className='subtitles text-center'>Title says it all</p>
      <Card style={{ minHeight: '100%', color: 'crimson'}}>
        <CardBody className='cardBody'>
          <CardTitle className='glossaryEntry'>
            Would you like to sign my petition? 
          </CardTitle>
          <CardText className='glossaryText'>
          Someone made the wise, wise decision of mixing Surveillance Camera Man with Postal 2. Note: I do not condone this kind of fun fuckery.
          </CardText>
          <YouTube opts={opts}
                  videoId="lDq4ELQPrVA"
              />
        </CardBody>
      </Card>

      <h1 className='titles'>TIL</h1>
      <p className='subtitles text-center'>Compilation of anything worth learning</p>
      <Card style={{ minHeight: '100%', color: 'crimson'}}>
        <CardBody className='cardBody'>
          <CardTitle className='glossaryEntry'>
            About Rudolph Valentino and Vicente Blasco Ibáñez
          </CardTitle>
          <CardText className='glossaryText'>
          Rudolph Valentino became a star after his appearance in The Four Horsemen of the Apocalypse, a 1921 war epic silent film based on the Spanish book Los cuatro jinetes del Apocalipsis written by Vicente Blasco Ibáñez.
          </CardText>
          <YouTube opts={opts}
                  videoId="H2pjqE-qjsc"
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