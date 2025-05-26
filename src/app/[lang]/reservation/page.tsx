"use client";

import "./styles.css"

import "vanilla-calendar-pro/styles/index.css";
import { ReservationForm } from "app/app/components/ReservationForm";
import { getTranslations } from "app/app/translations/translate";
import { useEffect, useState } from "react";

export default function Reservation({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const [t, setT] = useState<(key: string, paramKey?: string | undefined) => string>()

  useEffect(() => {
    (async () => {
      const { lang } = await params
      const { t: tFunction } = await getTranslations(lang)
      setT(() => {
        return tFunction
      })
    })()
  }, [])


  const walks_services = [
    "crops",
    "rabbits",
    "vine",
    "circumference",
    "birds",
    "sheep",
  ]

  return (
    <main className="reservation_page">
      <h1>Reservation</h1>
      <ReservationForm t={t} walks_services={walks_services} />
    </main>
  )
}
