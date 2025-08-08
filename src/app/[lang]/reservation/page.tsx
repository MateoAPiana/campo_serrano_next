import Link from "next/link";
import "./styles.css"

import { getTranslations } from "app/app/translations/translate";

export default async function Reservation({
  params,
}: {
  params: Promise<{ lang: string }>
}) {

  const { lang } = await params
  const { t } = await getTranslations(lang)


  return (
    <main className="reservation_page">
      <h1 className="reservation_page__title">{t && t?.("navBar", "Reservation")}</h1>
      <div className="reservation__container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus reprehenderit quibusdam. Sint quos dolorem quibusdam? Minus eligendi, inventore, quas consequatur, vel modi qui earum quam suscipit deleniti sit laudantium.
      </div>
      <div className="links_wrapper">
        <Link href={`/${lang}/reservation/gastronomy`} className="reservation__item reservation__gastronomy">{t && t?.("reservation", "title")}</Link>
        <Link href={`/${lang}/reservation/events`} className="reservation__item reservation__events">{t && t?.("reservation_events", "title")}</Link>
      </div>
    </main>
  )
}
