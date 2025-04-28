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
        <li className="nav-item"><a href={`/${lang}/`}>{t && t("navBar", "Home")}</a></li>
        <li className="nav-item"><a href={`/${lang}/products/services`}>{t && t("navBar", "Gastronomy")}</a></li>
        <li className="nav-item"><a href={`/${lang}/products/events`}>{t && t("navBar", "Events")}</a></li>
        <li className="nav-item"><a href={`/${lang}/products/others`}>{t && t("navBar", "Others products")}</a></li>
        <li className="nav-item"><a href={`/${lang}/reservation`}>{t && t("navBar", "Reservation")}</a></li>
        <li className="nav-item"><a href={`/${lang}/#contact`}>{t && t("navBar", "Contact")}</a></li>
        <li className="nav-item"><a href={`/${lang === "en" ? "es" : "en"}${pathname.slice(3)}`}>{lang === "en" ? "ES" : "EN"}</a></li>
      </ul>
    </nav>
  )
}

