import { getTranslations } from "app/app/translations/translate"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  const { t } = await getTranslations(lang)

  return (
    <main className="flex flex-col items-center justify-center max-h-screen w-full p-4 gap-6">
      <h1 className="text-3xl">{t && t("productsReservation", "title")}</h1>
      <section className="content flex gap-8">
        <form action="post" className="flex flex-col gap-4 w-full max-w-md">
          <label>
            {t && t("productsReservation", "address")} <br />
            <input
              style={{ "padding": "5px" }}
              className="border-1 rounded-2xl"
              type="text"
              name="address"
              placeholder={t && t("productsReservation", "addressPlaceholder")}
              required
            />
          </label>
          <label>
            {t && t("productsReservation", "email")} <br />
            <input
              style={{ "padding": "5px" }}
              className="border-1 rounded-2xl"
              type="email"
              name="email"
              placeholder={t && t("productsReservation", "emailPlaceholder")}
              required
            />
          </label>
          <input
            style={{ "padding": "5px" }}
            type="submit"
            name="productReservationButton"
            id="productReservationButtonForm"
            value={t && t("productsReservation", "submit")}
            className="border rounded-2xl max-w-2xs"
          />
        </form>
        <img
          className="w-2xs"
          src="/assets/othersmock.png"
          alt="Our products image"
        />
      </section>
    </main>
  )
}