import React from 'react'
import Container from './container'
import styles from './project-preview-grid.module.css'

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
        </div>
        <aside className={styles.metaContent}>
            {services && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Services</h3>
                <ul>
                  {services.map(service => (
                    <li key={service._id}>{service.serviceType}</li>
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