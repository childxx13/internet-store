import React from 'react';
import styles from './MainPage.module.css';
import Banner from "../../components/Banner/Banner";
import CategoryShortList from "../../components/CategoryShortList/CategoryShortList";
import DiscountForm from "../../components/DiscountForm/DiscountForm";
import Sales from "../../components/Sales/Sales";

function MainPage() {
  return (
    <div className={styles.mainContainer}>
      <Banner />
      <CategoryShortList />
      <DiscountForm />
      <Sales />
    </div>
  );
}

export default MainPage;