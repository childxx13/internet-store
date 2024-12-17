import React from 'react';
import styles from './DiscountForm.module.css';

function DiscountForm() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>5% off on the first order</h2>
      <div className={styles.content}>
        <img src="/images/discount.png" alt="Discount Banner" className={styles.image} />
        <form className={styles.form} aria-label="Discount Form">
          <div className={styles.inputGroup}>
            <label htmlFor="nameInput" className="sr-only">Name</label>
            <input type="text" id="nameInput" className={styles.input} placeholder="Name" aria-label="Name" />

            <label htmlFor="phoneInput" className="sr-only">Phone number</label>
            <input type="text" id="phoneInput" className={styles.input} placeholder="Phone number" aria-label="Phone number" />

            <label htmlFor="emailInput" className="sr-only">Email</label>
            <input type="email" id="emailInput" className={styles.input} placeholder="Email" aria-label="Email" />
          </div>
          <button type="submit" className={styles.button}>Get a discount</button>
        </form>
      </div>
    </section>
  );
}

export default DiscountForm;