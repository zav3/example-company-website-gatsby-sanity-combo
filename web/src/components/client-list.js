import styles from './role-list.module.css'
import React from 'react'

function ClientList ({items, name}) {
    return (
        <div>
            <h2 className={styles.headline}>{name}</h2>
            <ul className={styles.list}>
                {items.map(item => (
                    <li key={item._key} className={styles.listItem}>
                        <div>
                            <strong>{(item.client && item.client.name) || <em>Missing</em>}</strong>
                        </div>
                        {item.roles && (
                            <div>
                                {item.roles.map((role, idx) => {
                                    switch (true) {
                                        case idx === 0:
                                            return <span key={role}>{ucfirst(role)}</span>
                                        case idx === item.roles.length - 1:
                                            return <span key={role}> & {role}</span>
                                        default:
                                            return <span key={role}>, {role}</span>
                                    }
                                })}
                            </div>
                        )} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClientList