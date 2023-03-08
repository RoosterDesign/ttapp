// import React, { FC } from 'react';
import styles from './ClientList.module.scss';
import clients from '../../data/clients.json'

// interface ClientListProps { }

// const ClientList: FC<ClientListProps> = () => {
  const ClientList = () => {

  return (
    <div className={styles.ClientList} data-testid="ClientList">

      <ul>
        { clients.map( (client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>

      </div>
    )

  };

export default ClientList;
