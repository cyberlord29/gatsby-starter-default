import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import SeoCms from '../SEO/SeoFromCms.json'

export const SEO = ({title, description, keywords, image, url, author}) => {

    const metaDescription = description || SeoCms.description;
    const metaTitle = title || SeoCms.title;
    const metaAuthor = author || SeoCms.author;
    const metaUrl = url || SeoCms.url;
    const metaKeywords = keywords || SeoCms.keywords;
    console.log(metaTitle, metaDescription, metaAuthor, metaUrl, metaKeywords);

    return <Helmet 
        title = {title}
        meta = {[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
    ].concat(
        metaKeywords && metaKeywords.length > 0 ?
        {
            name: `keywords`,
            content: metaKeywords.join(',')
        }
        :
        []
    )}
  />
}