import { productsWalks } from "app/services/productsWalks";
import "./DescriptionNav.css";

export function DescriptionNav() {
  return (
    <>
      <nav className="nav">
        <h2 className="nav__title">Walks</h2>
        <ul className="nav__list">
          {
            productsWalks.map((walk, index) => (
              <li>
                <a
                  className="nav__item"
                  href={`/products/service/walks/descriptions/${walk}`}
                >
                  {walk}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
