import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './links.module.css'
import * as IconSets from '../utils/icons'

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

  const renderIcon = (iconName) => {
    const fallbackIcon = IconSets['Fi']['FiAlertTriangle']
    const iconSetId = iconName.substring(0, 2)

    // check if IconSet exists
    if (!/Fa|Io|Md|Ti|Go|Fi|Gi|Wi|Di/.test(iconSetId)) {
      return React.createElement(fallbackIcon, {})
    }

    // check if iconName exists in selected iconSet
    if (!iconName in IconSets[`${iconSetId}`]) {
      return React.createElement(fallbackIcon, {})
    }

    const icons = IconSets[`${iconSetId}`]
    return React.createElement(icons[iconName], {})
  }

  return (
    <div className={styles.links}>
      {
        data.minimalistConfig.socialList.map((social, index) => (
          <a href={social.url} rel="noopener noreferrer" target="_blank" aria-label={social.ariaLabel} key={index}>
            {renderIcon(social.icon)}
          </a>
        ))
      }
    </div>
  )
}
