import React from 'react';
import styles from './NotFoundPage.module.css';
import NotFound from "../../components/NotFound/NotFound";

function NotFoundPage() {
  return (
    <div className={styles.mainContainer}>
      <NotFound />
    </div>
  );
}

export default NotFoundPage;