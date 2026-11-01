import { useState } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Catalog from './components/Catalog.jsx';
import Products from './components/Products.jsx';
import Advantages from './components/Advantages.jsx';
import Video from './components/Video.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Состояние поиска "живет" здесь — на самом верху
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <div className="page">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Hero />
        <Catalog searchQuery={searchQuery} />
        <Products />
        <Advantages />
        <Video />
        <Footer />
      </div>
    </CartProvider>
  );
}