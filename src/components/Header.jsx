import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Header({ searchQuery, setSearchQuery }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__top">
        <div className="container header__inner">
          <a className="header__logo" href="#hero">
            <span className="header__logo-icon">✨</span> Польза здоровью
          </a>
          <a className="header__phone" href="tel:+74954404440">Тел. +7 (495) 440-44-40</a>
          <form
            className="header__search"
            id="search-form"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              id="search-input"
              name="q"
              placeholder="Поиск по каталогу..."
              aria-label="Поиск по сайту"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <button className="header__cart" type="button" aria-label="Корзина">
            🛒 <span className="header__cart-count" data-cart-count>{totalItems}</span>
          </button>
          <button
            className="header__burger"
            type="button"
            aria-label="Меню"
            aria-expanded={isMenuOpen}
            aria-controls="nav"
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className="header__bottom">
        <nav className={`nav container ${isMenuOpen ? 'nav--open' : ''}`} id="nav" aria-label="Основная навигация">
          <ul className="nav__list">
            <li><a href="#catalog" onClick={() => setIsMenuOpen(false)}>Каталог товаров</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>О нас</a></li>
            <li><a href="#certificates" onClick={() => setIsMenuOpen(false)}>Сертификаты</a></li>
            <li><a href="#contacts" onClick={() => setIsMenuOpen(false)}>Контакты</a></li>
            <li><a href="#delivery" onClick={() => setIsMenuOpen(false)}>Доставка и оплата</a></li>
            <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Отзывы</a></li>
            <li><a href="#articles" onClick={() => setIsMenuOpen(false)}>Статьи</a></li>
            <li><a href="#news" onClick={() => setIsMenuOpen(false)}>Новости</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}