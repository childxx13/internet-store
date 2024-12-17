import React, {useEffect} from 'react';
import styles from './CategoryList.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/categories/categoriesActions";
import BASE_URL from "../../config";
import {Link} from "react-router-dom";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <p className={styles.loading}>Загрузка категорий...</p>;
  }

  if (error) {
    return <p className={styles.error}>Ошибка загрузки категорий: {error}</p>;
  }

  if (!categories || categories.length === 0) {
    return <p className={styles.noCategories}>Категории не найдены!</p>;
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>All categories</h1>
      <div className={styles.list}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className={styles.categoryLink}
          >
            <div className={styles.category}>
              <img src={BASE_URL + category.image} alt={category.title} className={styles.image} />
              <div className={styles.label}>{category.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;