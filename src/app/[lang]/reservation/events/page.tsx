"use client";

import { useEffect, useState } from "react";
import "./styles.css"

import { Calendar, Options } from "vanilla-calendar-pro";
import "vanilla-calendar-pro/styles/index.css";
import { getTranslations } from "app/app/translations/translate";

export default function ReservationFormEvents({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const [t, setT] = useState<(key: string, paramKey?: string | undefined) => string>()
  const [_day, setDay] = useState("")
  const options: Options = {
    onClickDate(self) {
      setDay(self.context.selectedDates as unknown as string)
    },
    selectedTheme: "light",
    dateMin: "today",
    selectionTimeMode: 12
  };

  useEffect(() => {
    (async () => {
      const { lang } = await params
      const { t: tFunction } = await getTranslations(lang)
      setT(() => {
        return tFunction
      })
    })()
    const calendar = new Calendar(".calendar", options);
    calendar.init();
  }, [])

  return (
    <main className="reservation_events">
      <form action="post">
        <div className="calendar_wrapper">
          <div className="calendar"></div>
        </div>
        <div className="inputs_wrapper">
          <label>
            {t && t?.("reservation_events", "email")}<br />
            <input type="email" name="email" id="email_event" autoComplete="email" />
          </label>
          <label>
            {t && t?.("reservation_events", "people")}<br />
            <input type="number" name="guestCount" id="guestCount_event" min={1} max={300} defaultValue={1} />
          </label>
          <label>
            {t && t?.("reservation_events", "details")}<br />
            <textarea name="details" id="details_event" rows={4} placeholder={t && t?.("reservation_events", "detailsPlaceholder")}></textarea>
          </label>
          <input type="submit" name="events_submit" id="events_submit" value={t?.("reservation_events", "submit")} />
        </div>
      </form>
    </main>
  )
}