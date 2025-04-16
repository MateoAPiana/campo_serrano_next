import { getTranslations } from "../translations/translate";
import "./home.css";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  const { t } = await getTranslations(lang)

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
          <h2>{t("about")}</h2>
          <p className="textHome">
            {t("welcome") || "error"} <br />
            {t("welcome_message") || "error"}
          </p>
        </div>
      </section>
      <section className="products">
        <div className="box__product product_gastronomic">
          <a href="/products/services">{t("services")[0]}</a>
        </div>
        <div className="box__product product_party">
          <a href="/products/party">{t("services")[1]}</a>
        </div>
        <div className="box__product product_others">
          <a href="/products/others">{t("services")[2]}</a>
        </div>
      </section>
    </main>
  )
}
