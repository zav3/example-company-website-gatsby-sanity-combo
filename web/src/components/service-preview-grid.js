import { Link } from 'gatsby'
import React from 'react'
import ServicePreview from './servicePreview'

import styles from './project-preview-grid.module.css'
import serviceData from '../../../studio/schemas/serviceData'

function ServicePreviewGrid (props) {
  return (
    <div className={styles.relatedProjects}>
      <ul className={styles.relatedProjectsHeadline}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ServicePreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ServicePreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ServicePreviewGrid