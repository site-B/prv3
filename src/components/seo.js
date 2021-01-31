
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import constructUrl from '../utils/constructUrl'; 

function SEO({ description, lang, imageUrl, imageAlt, meta, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fixed(height: 260, width: 260) {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  const defaultTitle = data.site.siteMetadata?.title

  const defaultImageUrl = constructUrl(data.site.siteMetadata.siteUrl, data.ogImageDefault?.childImageSharp?.fixed?.src)

  const ogImageUrl = imageUrl || defaultImageUrl; 

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: imageUrl ? `summary_large_image` : `summary`,
        },
        {
          name: `twitter:image:alt`,
          content: imageAlt || "https://elegant-bassi-d0fe18.netlify.app/logo.png",
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  image: null, 
  author: ``,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  author: PropTypes.string, 
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string, 
  title: PropTypes.string.isRequired,
}

export default SEO