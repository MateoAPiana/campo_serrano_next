"use client"
import { usePathname } from "next/navigation"
import "./navBar.css"
import { getTranslations } from "../translations/translate"
import { useEffect, useState } from "react"

export function NavBar() {
  const pathname = usePathname()
  const lang = pathname.split("/")[1]

  const [t, setT] = useState<Function>()

  useEffect(() => {
    (async () => {
      const { t: tFunction } = await getTranslations(lang)
      setT(() => {
        return tFunction
      })
    })()
  }, [])

  return (
    <nav className="navBar">
      <img src="/assets/icon.png" alt="" />
      <ul className="nav-list">
        <li className="nav-item"><a href={`/${lang}/`}>{t && t("navBar", 0)}</a></li>
        <li className="nav-item"><a href={`/${lang}/products/services`}>{t && t("navBar", 1)}</a></li>
        <li className="nav-item"><a href={`/${lang}/products/party`}>{t && t("navBar", 2)}</a></li>
        <li className="nav-item"><a href={`/${lang}/products/others`}>{t && t("navBar", 3)}</a></li>
        <li className="nav-item"><a href={`/${lang}/reservation`}>{t && t("navBar", 4)}</a></li>
        <li className="nav-item"><a href={`/${lang}/#contact`}>{t && t("navBar", 5)}</a></li>
      </ul>
    </nav>
  )
}

