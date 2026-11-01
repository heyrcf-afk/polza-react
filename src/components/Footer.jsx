export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container footer__grid">
        <div className="footer__col">
          <h4 className="footer__logo">Польза здоровью</h4>
          <p className="footer__copy">
            © 2026, Польза здоровью. Производство сыродавленных растительных масел
          </p>
        </div>

        <div className="footer__col">
          <h5>Каталог</h5>
          <ul>
            {/* Все ссылки ведут на секцию каталога, чтобы не было прыжка наверх */}
            <li><a href="#catalog">Масла</a></li>
            <li><a href="#catalog">Наборы</a></li>
            <li><a href="#catalog">Жмыхи</a></li>
            <li><a href="#catalog">Мука</a></li>
            <li><a href="#catalog">Урбечи и пасты</a></li>
            <li><a href="#catalog">Другие полезности</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Для клиентов</h5>
          <ul>
            {/* Пока ведем на главную секцию (Hero) или к контактам */}
            <li><a href="#hero">О нас</a></li>
            <li><a href="#contacts">Контакты</a></li>
            <li><a href="#hero">Сотрудничество</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Контакты</h5>
          <p>Тел. <a href="tel:+74954404440">+7 (495) 440-44-40</a></p>
          <p>Адрес: г. Москва, Преображенская площадь</p>
          <p>email: <a href="mailto:PolzaZdorovu@mail.ru">PolzaZdorovu@mail.ru</a></p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            Индивидуальный предприниматель Борисенко Мария Юрьевна, ИНН 4569825476921.
            Адрес: г. Москва Преображенская площадь
          </p>
        </div>
      </div>
    </footer>
  );
}