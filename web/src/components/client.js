import React from 'react'
import Container from './container'
import styles from './project-preview-grid.module.css'
import { Link } from 'gatsby'
import { cn } from '../lib/helpers'
import { responsiveTitle3 } from './typography.module.css'
import ServicePreview from './servicePreview'


function Client (props) {
  const { lastName, firstName, phoneNumber1, phoneNumber2, email, address, subdivision, city, zipcode, services } = props
  return (
    <Container>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
            <h1 className={styles.title}>{firstName + ' ' + lastName}</h1>
            {phoneNumber1 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Phone #1</h3>
                <ul>
                  {phoneNumber1}
                </ul>
              </div>
            )}
            {phoneNumber2 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Phone #2</h3>
                <ul>
                  {phoneNumber2}
                </ul>
              </div>
            )}
            {email && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Email</h3>
                <ul>
                  {email}
                </ul>
              </div>
            )}
            {address && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Address</h3>
                <ul>
                  {address}
                </ul>
              </div>
            )}
            {subdivision && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Subdivision</h3>
                <ul>
                  {subdivision}
                </ul>
              </div>
            )}
            {city && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>City</h3>
                <ul>
                  {city}
                </ul>
              </div>
            )}
            {zipcode && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Zipcode</h3>
                <ul>
                  {zipcode}
                </ul>
              </div>
            )}
        </div>
        <aside className={styles.metaContent}>
            {services && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Services</h3>
                <ul>
                  {services.map(node => (
                      <li key={node.id}>
                        <ServicePreview {...node} />
                      </li>
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