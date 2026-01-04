import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Filters from './components/Filters/Filters';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="app">
          <header className="app-header">
            <h1>Mini E-Commerce Shop</h1>
          </header>
          <main className="app-main">
            <Filters />
            <ProductList />
          </main>
          <Cart />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
