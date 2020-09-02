import React from 'react'
import Container from './container'
import styles from './project-preview-grid.module.css'

function Service (props) {
  const { serviceType, serviceDate, salesAmount, equipment, lastService1, cardSent1, nextServiceDue1, description1, lastService2,
            cardSent2, nextServiceDue2, description2, ac, ro, description3 } = props
  return (
    <Container>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
            <h1 className={styles.title}>{serviceType}</h1>
            {serviceDate && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Service Date</h3>
                <ul>
                  {serviceDate}
                </ul>
              </div>
            )}
            {salesAmount && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Sales Amount</h3>
                <ul>
                  {salesAmount}
                </ul>
              </div>
            )}
            {equipment && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Equipment Used</h3>
                <ul>
                  {equipment}
                </ul>
              </div>
            )}
            
        </div>
        <aside className={styles.metaContent}>
        {lastService1 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Last Service</h3>
                <ul>
                  {lastService1}
                </ul>
              </div>
            )}
            {cardSent1 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Date Card Payment Sent</h3>
                <ul>
                  {cardSent1}
                </ul>
              </div>
            )}
            {nextServiceDue1 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Next Service Due</h3>
                <ul>
                  {nextServiceDue1}
                </ul>
              </div>
            )}
            {description1 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Notes for next service</h3>
                <ul>
                  {description1}
                </ul>
              </div>
            )}
            {lastService2 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Last Service (2)</h3>
                <ul>
                  {lastService2}
                </ul>
              </div>
            )}
            {cardSent2 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Date Card Payment Sent</h3>
                <ul>
                  {cardSent2}
                </ul>
              </div>
            )}
            {nextServiceDue2 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Next Service Due (2)</h3>
                <ul>
                  {nextServiceDue2}
                </ul>
              </div>
            )}
            {description2 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Notes for next service (2)</h3>
                <ul>
                  {description2}
                </ul>
              </div>
            )}
            {ac && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>A/C</h3>
                <ul>
                  {ac}
                </ul>
              </div>
            )}
            {ro && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>R/O</h3>
                <ul>
                  {ro}
                </ul>
              </div>
            )}
            {description3 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Notes for A/C and R/O</h3>
                <ul>
                  {description3}
                </ul>
              </div>
            )}
            
          </aside>
      </div>
    </Container>
  )
}

export default Service