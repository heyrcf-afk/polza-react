import { createContext, useContext, useState, useEffect } from 'react';

// Ключ для localStorage
const STORAGE_KEY = 'pz_cart';

// Создаем контекст. Значение по умолчанию — null, чтобы легко отследить,
// если компонент случайно используется вне провайдера.
const CartContext = createContext(null);

// Хук-обертка для удобного доступа к контексту
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart должен использоваться внутри <CartProvider>');
  return ctx;
}

// Провайдер, который будет оборачивать приложение
export function CartProvider({ children }) {
  // Инициализация состояния из localStorage (ленивая инициализация)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Синхронизация с localStorage при каждом изменении корзины
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Добавление товара
  const addToCart = (productId) => {
    const id = String(productId);
    setCart((prev) => {
      const existing = prev.find((item) => String(item.id) === id);
      if (existing) {
        return prev.map((item) =>
          String(item.id) === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  // Общее количество товаров (для счётчика в шапке)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}