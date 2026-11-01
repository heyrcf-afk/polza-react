/**
 * data.js — имитация базы данных.
 * Пути к картинкам обёрнуты в new URL(..., import.meta.url).href — 
 * это официальный подход Vite, который отслеживает файлы, 
 * хеширует их имена при сборке и подставляет корректные пути.
 */

// Данные для блока "Каталог товаров"
export const catalogCategories = [
  { id: 'oils',   title: 'Масла',              image: new URL('../assets/images/oil(5).jpeg', import.meta.url).href },
  { id: 'sets',   title: 'Наборы',             image: new URL('../assets/images/sets.jpg',    import.meta.url).href },
  { id: 'cakes',  title: 'Жмыхи',              image: new URL('../assets/images/oilcakes.jpg', import.meta.url).href },
  { id: 'flour',  title: 'Мука',               image: new URL('../assets/images/flour.jpg',   import.meta.url).href },
  { id: 'pastes', title: 'Урбечи и пасты',     image: new URL('../assets/images/pastes.jpg',  import.meta.url).href },
  { id: 'other',  title: 'Другие полезности',  image: new URL('../assets/images/other(1).jpg', import.meta.url).href },
];

// Данные для блока "Популярные товары"
export const popularProducts = [
  { id: 1, title: 'Сыродaвленное масло Расторопши 250 мл',    price: 1800, image: new URL('../assets/images/oil(5).jpeg', import.meta.url).href },
  { id: 2, title: 'Сыродaвленное масло Подсолнечное 250 мл',  price: 600,  image: new URL('../assets/images/oil(2).jpg',  import.meta.url).href },
  { id: 3, title: 'Сыродaвленное масло Тыквенное 250 мл',     price: 1900, image: new URL('../assets/images/oil(3).jpg',  import.meta.url).href },
];

// Данные для блока "Наши преимущества"
export const advantagesData = [
  {
    title: 'Мука.',
    text: 'Является 100% цельнозерновой мукой и производится на полностью деревянной мельнице с каменными жерновами. Это исключает взаимодействие продукта с металлом.',
    image: new URL('../assets/images/flour(2).jpg', import.meta.url).href,
    reverse: false,
  },
  {
    title: 'Масло.',
    text: 'Это концентрат того семени или ореха, из которого его отжимают. Это касается и муки, и всего остального. Поэтому наше сырье исключительно премиум качества от добросовестных фермеров, использующих органический подход.',
    image: new URL('../assets/images/oil(4).jpg', import.meta.url).href,
    reverse: true,
  },
  {
    title: 'Наша продукция.',
    text: 'Вся наша продукция 100% ручной труд, в который мы вкладываем частичку нашей души. Нам важно нести нашим делом свет, доброту и любовь. И мы очень рады, что наши клиенты чувствуют это в нашей продукции.',
    image: new URL('../assets/images/other(2).jpg', import.meta.url).href,
    reverse: false,
  },
];