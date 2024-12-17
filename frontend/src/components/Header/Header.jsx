import React from 'react';
import styles from './Header.module.css';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleMainClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.logoBadge}
        onClick={handleMainClick}
        role="button"
      >
        <img src="/images/logo.svg" alt="Main Logo" className={styles.logo}/>
      </div>
      <nav className={styles.navLinks} aria-label="Main Navigation">
        <a href="/">Main Page</a>
        <a href="/categories">Categories</a>
        <a href="/products">All products</a>
        <a href="/all-sales">All sales</a>
      </nav>
      <div
        className={styles.cartBadge}
        onClick={handleCartClick}
        role="button"
        aria-label={`Shopping cart with ${cartCount} items`}
      >
        <img
          src="/images/cart.svg"
          alt=""
          className={styles.cartIcon}
        />
        {cartCount > 0 && (<span className={styles.badgeCount}>{cartCount}</span>)}
      </div>
    </header>
  );
}

export default Header;