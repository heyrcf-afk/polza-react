import { useState } from 'react';
import { popularProducts } from '../data/data.js';
import { useCart } from '../context/CartContext.jsx';

export default function Products() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (productId) => {
    addToCart(productId);
    setAddedId(productId);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Популярные товары</h2>
        <div className="grid-products">
          {popularProducts.map((product) => {
            const isAdded = addedId === product.id;
            return (
              <article className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-card__img"
                  loading="lazy"
                />
                <div className="product-card__body">
                  <h3 className="product-card__title">{product.title}</h3>
                  <div className="product-card__footer">
                    <span className="product-card__price">{product.price} ₽</span>
                    <button
                      className="btn btn--primary"
                      onClick={() => handleAdd(product.id)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Добавлено!' : 'В корзину'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}