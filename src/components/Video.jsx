// Подключаем картинку через new URL — как в data.js
const posterImage = new URL('../assets/images/video background.jpg', import.meta.url).href;

export default function Video() {
  // Заглушка: при клике показываем alert. Позже можно заменить на открытие видео.
  const handlePlayClick = () => {
    alert('Здесь будет видео. Заглушка для защиты проекта.');
  };

  return (
    <section className="video-section" id="video">
      <div className="container">
        <div className="video-wrapper">
          <div className="video-poster">
            <img
              src={posterImage}
              alt="Процесс отжима масла"
              className="video-poster__img"
            />
            <button
              className="video-play-btn"
              id="play-video-btn"
              type="button"
              aria-label="Воспроизвести видео"
              onClick={handlePlayClick}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div className="video-text">
            <h3>Как мы отжимаем наше масло</h3>
            <p>
              Долго и кропотливо мы отбираем семена и орехи для масла. Так как оно
              является концентратом всех свойств, которыми обладает семя, сырье
              должно быть максимально свежим, отборным, необработанным и
              выращенным органическим способом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}