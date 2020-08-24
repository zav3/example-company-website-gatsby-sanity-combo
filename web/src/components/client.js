import { Link } from 'gatsby'
import React from 'react'
import Container from './container'
import ClientList from './client-list'
import styles from './project-preview-grid.module.css'


function Client (props) {
  const { name, services } = props
  return (
    <Container>
      <div className={styles.root}>
        {props.title && (
          <h2 className={styles.headline}>
            {props.browseMoreHref ? (
              <Link to={props.browseMoreHref}>{props.title}</Link>
            ) : (
              props.title
            )}
          </h2>
        )}
      </div>
      <div>
        {name && <ClientList items={name} title='Clients' /> }
        {services && (
          <div className={styles.categories}>
            <h3>Services</h3>
            <ul>
              {services.map(service => (
                <li key={services._id}>{service.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Client