import { advantagesData } from '../data/data.js';

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <h2 className="section-title">Наши преимущества</h2>
        <div className="advantages-list">
          {advantagesData.map((item, index) => (
            <div
              className={`advantage ${item.reverse ? 'advantage--reverse' : ''}`}
              key={index}
            >
              <div className="advantage__image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="advantage__image"
                  loading="lazy"
                />
              </div>
              <div className="advantage__content">
                <h3 className="advantage__title">{item.title}</h3>
                <p className="advantage__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}