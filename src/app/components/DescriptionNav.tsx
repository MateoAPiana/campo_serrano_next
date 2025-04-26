import { productsWalks } from "app/services/productsWalks";
import "./DescriptionNav.css";

export function DescriptionNav({ t }: { t: (key: string, paramKey?: string) => string }) {
  return (
    <>
      <nav className="nav">
        <h2 className="nav__title">{t("gastronomy_services", "0")}</h2>
        <ul className="nav__list">
          {
            productsWalks.map((walk, index) => (
              <li key={index}>
                <a
                  className="nav__item"
                  href={`/products/services/walks/${walk}`}
                >
                  {t("walks_services", walk)}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
