import { useMemo, useEffect, useRef } from 'react';
import { catalogCategories } from '../data/data.js';

export default function Catalog({ searchQuery }) {
  // Ссылка на секцию каталога для автоскролла
  const sectionRef = useRef(null);
  const debounceTimer = useRef(null);

  // Мемоизация отфильтрованного списка:
  // пересчитываем только когда меняется searchQuery
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query === '') return catalogCategories;
    return catalogCategories.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Эффект: автоскролл к каталогу при изменении запроса (с дебаунсом)
  useEffect(() => {
    // Не скроллим при первом рендере (пустой запрос)
    if (searchQuery.trim() === '') return;

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 400);

    return () => clearTimeout(debounceTimer.current);
  }, [searchQuery]);

  return (
    <section className="catalog" id="catalog" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Каталог товаров</h2>
        {filteredCategories.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-muted)', padding: '40px 0' }}>
            По вашему запросу ничего не найдено 😔
          </p>
        ) : (
          <div className="grid-categories">
            {filteredCategories.map((category) => (
              <article className="category-card" key={category.id}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-card__img"
                  loading="lazy"
                />
                <h3 className="category-card__title">{category.title}</h3>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}