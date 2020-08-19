import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'

import styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ClientPreview (props) {
  return (
    <Link className={styles.root} to={`/client/${props.name}`}>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props.name && (
        <div className={styles.title}>
            {props.name}
        </div>
      )}
    </Link>
  )
}

export default ClientPreview