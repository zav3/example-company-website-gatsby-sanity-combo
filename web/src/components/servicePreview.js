import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'

import styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ServicePreview (props) {
  return (
    <Link className={styles.root} to={`/service/${props.serviceDate}/`}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.serviceType}</h3>
    </Link>
  )
}

export default ServicePreview