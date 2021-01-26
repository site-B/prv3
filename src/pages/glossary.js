import React from "react"
import { Link } from "gatsby"

import { Card, CardText, CardBody, CardTitle } from 'reactstrap'; 
import ReactPlayer from "react-player"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GlossaryPage = () => (
  <Layout>
    <SEO title="about" />
    <h1 className='titles'>Glossary</h1>
    <p className='subtitles'>The glossary compiles everything that needs an explanation.</p>
    <div>
    <Card style={{ minHeight: '100%', color: 'crimson'}}>
          <CardBody className='cardBody'>
            <CardTitle className='glossaryEntry'>
            Same as it ever was. 
            </CardTitle>
            <CardText style={{ color: 'white' }}>
              Johnathan Demme's 1983 Stop Making Sense is not only one of the greatest movies ever made, but it is the origin of arguably <a href='https://open.spotify.com/album/4FR8Z6TvIsC56NLyNomNRE' target='_blank'>the best Talking Heads' album</a>. 
            </CardText>
            <div>
              <ReactPlayer width='100%' controls='true'
                url="https://www.youtube.com/watch?v=TGofoH9RDEA"
              />
            </div>
          </CardBody>
        </Card>
    </div>
    <br></br>
    <Link 
          className='myButton'
          to={'/'}>Go home
    </Link>
  </Layout>
)

export default GlossaryPage