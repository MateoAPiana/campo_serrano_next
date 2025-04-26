import { DescriptionNav } from "app/app/components/DescriptionNav";
import "./Description.css"
import Image from "next/image";

export function Description({ title, src, alt, t }: { title: string, src: string, alt: string, t: (key: string, paramKey?: string) => string }) {
  return (
    <>
      <main className="DescriptionClient">
        <h1 className="DescriptionClient__title">{t("walks_services", title)}</h1>
        <Image
          src={src}
          alt={alt}
          width={640}
          height={426}
          className="Description__image"
        />
      </main>
      <DescriptionNav t={t} />
    </>
  )
}
