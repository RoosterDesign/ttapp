import React, { FC } from 'react';
import styles from './ClientDetail.module.scss';

interface ClientDetailProps {}

const ClientDetail: FC<ClientDetailProps> = () => (
  <div className={styles.ClientDetail} data-testid="ClientDetail">
    ClientDetail Component
  </div>
);

export default ClientDetail;
