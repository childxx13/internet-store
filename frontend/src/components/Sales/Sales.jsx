import React from 'react';
import styles from './Sales.module.css';
import {useNavigate} from "react-router-dom";

function Sales() {
  const navigate = useNavigate(); // Хук для навигации

  const handleNavigation = () => {
    navigate('/all-sales'); // Переход на адрес "/categories"
  };
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>
        <div className={styles.btnGroup}>
          <div className={styles.divider} />
          <button className={styles.navigation} onClick={handleNavigation}>All sales</button>
        </div>
      </div>
      <div className={styles.list}>
        {[
          {
            src: '/images/sale1.png', alt: 'Decorative forged bridge', title: 'Decorative forged bridge',
            price: '$500', original: '$1000', discount: '-50%'
          },
          {
            src: '/images/sale2.png', alt: 'Flower basket', title: 'Flower basket',
            price: '$100', original: '$150', discount: '-34%'
          },
          {
            src: '/images/sale3.png', alt: 'Aquarium lock', title: 'Aquarium lock',
            price: '$150', original: '$200', discount: '-25%'
          },
          {
            src: '/images/sale4.png', alt: 'Secateurs', title: 'Secateurs',
            price: '$199', original: '$240', discount: '-17%'
          }
        ].map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.src} alt={item.alt} className={styles.image} />
            <div className={styles.text}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{item.price}</span>
                <span className={styles.originalPrice}>{item.original}</span>
              </div>
            </div>
            <div className={styles.discount}>{item.discount}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sales;