import "./home.css";

export default function Home() {
  return (
    <main className="main_home">
      <div className="video__wrapper">
        <video id="videoHome" loop src="/assets/videomock.mp4"></video>
      </div>
      <a href="#about" className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
        </svg>
      </a>
      <section className="about" id="about">
        <div className="fringe"></div>
        <div className="content_about">
          <h2>About us</h2>
          <p className="textHome">
            Welcome to Punto Serrano. <br />
            Discover the perfect blend of breathtaking sights and exquisite flavors.
            Join us on a unique journey where stunning landscapes meet culinary delights.
            Our guided tour offers an unforgettable experience, complete with delicious
            local dishes and warm hospitality. Book your adventure today and treat your
            senses to something truly special!
          </p>
        </div>
      </section>
      <section className="products">
        <div className="box__product product_gastronomic">
          <a href="/products/services">Walks and gastronomy</a>
        </div>
        <div className="box__product product_party">
          <a href="/products/party">Party rental</a>
        </div>
        <div className="box__product product_others">
          <a href="/products/others">Our products</a>
        </div>
      </section>
    </main>
  )
}
