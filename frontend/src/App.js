import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import {useDispatch} from "react-redux";
import {loadCart} from "./redux/cart/cartActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      // Загружаем корзину из localStorage в состояние Redux
      dispatch(loadCart(storedCart));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Header/>

      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/products/:category" element={<ProductsPage />}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/all-sales" element={<SalesPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
