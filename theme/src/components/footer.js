import React from 'react'
import { Link } from 'gatsby';
import styles from './footer.module.css'

export default () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      <li><Link to="/terms/">Terms</Link></li>
      <li><span>|</span></li>
      <li><Link to="/privacy/">Privacy</Link></li>
    </ul>
  </nav>
)