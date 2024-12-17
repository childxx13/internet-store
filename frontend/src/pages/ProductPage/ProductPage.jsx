import React, {useEffect} from 'react';
import styles from './ProductPage.module.css';
import ProductList from "../../components/ProductList/ProductList";
import {QuantitySelector} from "../../components/QuantitySelector/QuantitySelector";
import {ProductGallery} from "../../components/ProductGallery/ProductGallery";
import {fetchProduct} from "../../redux/products/productsActions";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ProductPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.item);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  const salePercentage = Math.round(product.discont_price * 100 / product.price);
  return (
    <div className={styles.productPage}>
      <div className={styles.mainContent}>
        <div className={styles.productSection}>
          {product && (<ProductGallery images={[product.image]}/>)}
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>Secateurs</h1>
            <div className={styles.priceContainer}>
              <div className={styles.prices}>
                {salePercentage > 0 && (<span className={styles.currentPrice}>${product.discont_price}</span>)}
                <span className={styles.originalPrice}>${product.price}</span>
              </div>
              {salePercentage > 0 && (<span className={styles.saleTag}>-{100 - salePercentage}%</span>)}
            </div>
            <div className={styles.addToCartSection}>
              <QuantitySelector/>
              <button className={styles.addToCartButton}>Add to cart</button>
            </div>
            <div className={styles.productDescription}>
              <h2 className={styles.descriptionTitle}>Description</h2>
              <p className={styles.descriptionText}>
                This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade
                for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft
                grip, in a bright terracotta colour for maximum visibility in the garden. It won't be easy to leave
                this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use,
                reducing hand strain for the user.
                This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in
                gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing
                defects.
                Supplied with replacement blade and spare spring. You may also be interested in our pack of two
                replacement springs.
              </p>
              <button className={styles.readMoreButton}>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
