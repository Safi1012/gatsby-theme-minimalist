import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as IconFiSet from 'react-icons/fi'
import styles from './links.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      minimalistConfig(id: {eq: "gatsby-theme-minimalist-config"}) {
        socialList {
          icon
          iconSet
          url
          ariaLabel
        }
      }
    }
  `)

  return (
    <div className={styles.links}>
      {
        data.minimalistConfig.socialList.map((social, index) => (
          <a href={social.url} rel="noopener noreferrer" target="_blank" aria-label={social.ariaLabel} key={index}>
            {React.createElement(IconFiSet[social.icon], {})}
          </a>
        ))
      }
    </div>
  )
}
