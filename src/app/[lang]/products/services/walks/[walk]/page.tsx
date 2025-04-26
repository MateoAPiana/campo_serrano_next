import { getTranslations } from "app/app/translations/translate";
import { Description } from "./Description";
import "./styles.css"

export default async function WalksPage({ params }: { params: Promise<{ walk: string, lang: string }> }) {
  const { walk, lang } = await params;
  const { t } = await getTranslations(lang)
  return (
    <Description title={walk} src={`/assets/service/${walk}.png`} alt={`Image of ${walk}`} t={t} />
  )
}
