import { getTranslations } from "app/app/translations/translate";
import "./styles.css"
import { ServiceCard } from "app/app/components/ServiceCard";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const { t } = await getTranslations(lang)
  return (
    <main>
      <ServiceCard title={t("gastronomy_services", "0")} service="walks" />
      <ServiceCard title={t("gastronomy_services", "1")} service="gastronomy" />
    </main>
  )
}