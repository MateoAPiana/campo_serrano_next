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
        <h1 className="text-2xl">Service of gastronomy and walks</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse animi labore, corporis, asperiores in quod necessitatibus nobis odio ab itaque repudiandae porro dolore atque, sunt aspernatur dolorum exercitationem molestias aliquam.</p>
        <Link className="content_service__button" href={`/${lang}/reservation`}>Request a reservation</Link>
      </section>
    </main>
  )
}