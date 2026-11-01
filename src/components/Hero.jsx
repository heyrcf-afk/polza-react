export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg"></div>
      <div className="container hero__content">
        <h1 className="hero__title">Натуральные продукты для здоровой жизни</h1>
        <p className="hero__subtitle">
          Польза здоровью — интернет-магазин сыродавленных масел и полезных продуктов
        </p>
        <p className="hero__desc">
          Создаем натуральные продукты, сохраняя максимум пользы природы для вас и вашей семьи.
        </p>

        <div className="hero__features">
          <div className="hero-feature">
            <span className="hero-feature__icon">🌿</span>
            <div>
              <strong>100% натурально</strong>
              <p>Без добавок и консервантов</p>
            </div>
          </div>
          <div className="hero-feature">
            <span className="hero-feature__icon">💧</span>
            <div>
              <strong>Холодный отжим</strong>
              <p>В бочонке сохраняется польза</p>
            </div>
          </div>
          <div className="hero-feature">
            <span className="hero-feature__icon">🛡️</span>
            <div>
              <strong>Контроль качества</strong>
              <p>На всех этапах производства</p>
            </div>
          </div>
        </div>

        <a href="#catalog" className="btn btn--white hero__btn">Перейти в каталог</a>
      </div>
    </section>
  );
}