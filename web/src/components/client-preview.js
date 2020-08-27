import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'

import styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ClientPreview (props) {
  return (
    <Link className={styles.root} to={`/clients/${props.slug.current}`}>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.name}</h3>
      {props.number && (
        <div className={styles.title}>
            {props.number}
        </div>
      )}
    </Link>
  )
}

export default ClientPreview