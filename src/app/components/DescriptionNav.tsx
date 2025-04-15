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
              <li key={index}>
                <a
                  className="nav__item"
                  href={`/products/services/walks/${walk}`}
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
