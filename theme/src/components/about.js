import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './about.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      minimalistConfig(id: {eq: "gatsby-theme-minimalist-config"}) {
        headline
        subHeadline
      }
    }
  `)
  
  return (
    <>
      <h1 className={styles.headline}>{data.minimalistConfig.headline}</h1>
      <p className={styles.underline} dangerouslySetInnerHTML={{ __html: data.minimalistConfig.subHeadline }}></p>
    </>
  )
}

