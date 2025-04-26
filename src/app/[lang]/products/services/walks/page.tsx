import "./walks.css";
import { productsWalks } from "./productsWalks";
import { getTranslations } from "app/app/translations/translate";


export default async function Walks({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const { t } = await getTranslations(lang)
  return (
    <main className="walksPage">
      {
        productsWalks.map((p, index) => {
          return (
            <a
              key={index}
              href={`/products/services/walks/${p}`}
              style={{ "backgroundImage": `url('/assets/service/${p}.png')` }}
              className="walks__item"
            >
              <h2>{t("walks_services", p)}</h2>
            </a>
          );
        })
      }
    </main>
  )
}
