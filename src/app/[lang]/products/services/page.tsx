import { getTranslations } from "app/app/translations/translate";
import "./styles.css"
import { ServiceCard } from "app/app/components/ServiceCard";
import Link from "next/link";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const { t } = await getTranslations(lang)
  return (
    <main>
      <section className="ServiceCards__wrapper">
        <ServiceCard title={t("gastronomy_services", "0")} service="walks" />
        <ServiceCard title={t("gastronomy_services", "1")} service="gastronomy" />
      </section>
      <section className="content_service">
        <h1 className="text-2xl">{t && t("service_page", "title")}</h1>
        <p>{t && t("service_page", "text")}</p>
        <Link className="content_service__button" href={`/${lang}/reservation`}>{t && t("service_page", "button")}</Link>
      </section>
    </main>
  )
}