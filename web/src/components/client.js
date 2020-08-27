import { Link } from 'gatsby'
import React from 'react'
import Container from './container'
import ClientList from './client-list'
import styles from './project-preview-grid.module.css'
import BlockContent from './block-text'

function Client (props) {
  const { name, number, services } = props
  return (
    <Container>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
            <h1 className={styles.title}>{name}</h1>
        </div>
        <aside className={styles.metaContent}>
            {services && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Services</h3>
                <ul>
                  {services.map(service => (
                    <li key={service._id}>{service.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
      </div>
    </Container>
  )
}

export default Client