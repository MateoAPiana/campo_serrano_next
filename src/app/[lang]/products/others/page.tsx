import Products from "app/app/components/Products"
import { getTranslations } from "app/app/translations/translate"

export default async function Others({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const { t } = await getTranslations(lang)
  return (
    <Products product="Others products" img="/assets/othersmock.png" t={t} >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque
        ratione inventore repellat eos tempora cumque repellendus, beatae libero
        eum dolore laudantium alias hic harum odit omnis. Eligendi, exercitationem
        quasi!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque
        ratione inventore repellat eos tempora cumque repellendus, beatae libero
        eum dolore laudantium alias hic harum odit omnis. Eligendi, exercitationem
        quasi!
      </p>
    </Products>
  )
}
