import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import data from 'data.json'
import { colors } from '@hackclub/design-system'

const { name, title, description, img, url } = data

export default props => (
  <Fragment>
    <Helmet
      defaultTitle={title}
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:domain', content: url },
        { name: 'twitter:image:src', content: img },
        { name: 'twitter:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: img },
        { property: 'og:image:height', content: 512 },
        { property: 'og:image:width', content: 512 },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: name },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url }
      ]}
    >
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content={colors.primary} />
      <html lang="en" />
    </Helmet>
    {props.children()}
  </Fragment>
)
