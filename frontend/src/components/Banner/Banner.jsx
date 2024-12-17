import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return <img src="/images/banner.png" alt="Promotional Banner" className={styles.bannerImage} />;
}

export default Banner;