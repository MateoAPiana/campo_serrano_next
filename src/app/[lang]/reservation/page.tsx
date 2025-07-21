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
      <h1>{t && t?.("navBar", "Reservation")}</h1>
    </main>
  )
}
