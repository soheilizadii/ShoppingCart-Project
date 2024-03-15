import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import PageNotFound from './pages/404';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
      <CartProvider>
          <ProductProvider>
                     <Layout>
                        <Routes>
                          <Route index element={<Navigate to='/products'  replace/>}  />
                          <Route path='/products' element={<ProductsPage/>}  />
                          <Route path='/products/:id' element={<ProductDetailsPage/>}  />
                          <Route path='/checkout' element={<CheckoutPage/>} />
                          <Route path='*' element={<PageNotFound/>} />
                        </Routes>
                    </Layout>
          </ProductProvider>
      </CartProvider>

    </div>
  );
}

export default App;
