import "./walks.css";
import { productsWalks } from "./productsWalks";


export default function Walks() {
  return (
    <main className="walksPage">
      {
        productsWalks.map((p, index) => {
          return (
            <a
              key={index}
              href={`/products/services/walks/${p}`}
              style={{ "backgroundImage": `url('/service/${p}.png')` }}
              className="walks__item"
            >
              <h2>{p}</h2>
            </a>
          );
        })
      }
    </main>
  )
}
