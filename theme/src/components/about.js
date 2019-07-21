import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './about.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          headline,
          subheadline
        }
      }
    }
  `)
  
  return (
    <>
      <h1 className={styles.headline}>{data.site.siteMetadata.headline}</h1>
      <p className={styles.underline} dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.subheadline }}></p>
    </>
  )
}

