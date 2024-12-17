import React from 'react';
import styles from './ProductCard.module.css';
import BASE_URL from "../../config";
import {useNavigate} from "react-router-dom";

export const ProductCard = ({id, image, title, price, discont_price, onAddToCart}) => {
  const navigate = useNavigate();
  const salePercentage = Math.round(discont_price * 100 / price);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    onAddToCart({ id, image, title, price, discont_price });
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick} role="button">
      <img
        loading="lazy"
        src={BASE_URL + image}
        alt={title}
        className={styles.productImage}
      />
      <div className={styles.productContent}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.priceContainer}>
          <div className={styles.currentPrice}>${price}</div>
          {salePercentage > 0 && <div className={styles.salePrice}>${discont_price}</div>}
        </div>
      </div>
      {salePercentage > 0 && (
        <>
          <div className={styles.saleTag}>-{100 - salePercentage}%</div>
          <button
            className={styles.addToCartButton}
            onClick={handleAddToCartClick}
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
};