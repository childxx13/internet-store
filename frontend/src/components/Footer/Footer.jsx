import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <div className={styles.contactSection}>
        <div className={styles.contactBlock}>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Phone</div>
            <div className={styles.contactValue}>+7 (499) 350-66-04</div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Socials</div>
            <div className={styles.socialIcons}>
              <img src="/images/instagram.svg" alt="Social Icon 1" className={styles.socialIcon} />
              <img src="/images/phone.svg" alt="Social Icon 2" className={styles.socialIcon} />
            </div>
          </div>
        </div>
        <div className={styles.contactBlock}>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Address</div>
            <div className={styles.contactValue}>
              Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Working Hours</div>
            <div className={styles.contactValue}>24 hours a day</div>
          </div>
        </div>
      </div>
      <img
        src="/images/map.png"
        alt="Footer Decorative Image"
        className={styles.footerImage}
      />
    </footer>
  );
}

export default Footer;