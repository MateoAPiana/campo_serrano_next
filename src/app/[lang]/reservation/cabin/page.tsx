"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import "./styles.css"

import { Calendar, Options } from "vanilla-calendar-pro";
import "vanilla-calendar-pro/styles/index.css";
import { getTranslations } from "app/app/translations/translate";
import { sendEmailEvents } from "app/utils/email";

import { redirect } from "next/navigation";

export default function ReservationFormEvents({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const [t, setT] = useState<(key: string, paramKey?: string | undefined) => string>()
  const [day, setDay] = useState("")
  const options: Options = {
    onClickDate(self) {
      setDay(self.context.selectedDates as unknown as string)
    },
    selectedTheme: "light",
    dateMin: "today",
    type: 'multiple',
    displayMonthsCount: 2,
    selectionDatesMode: 'multiple-ranged',
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

  const handleSubmit: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const guestCount = formData.get("guestCount") as string
    const details = formData.get("details") as string
    const since = formData.get("since") as string
    const until = formData.get("until") as string

    (async () => {
      if (!email) throw new Error("The email is required");
      const { lang } = await params
      const res = await sendEmailEvents(email, {
        reservationDate: day[0],
        guestCount: parseInt(guestCount),
        details,
        since,
        until
      });
      if (res.ok) {
        redirect(`/${lang}`)
      }
    })();
  }

  return (
    <main className="reservation_cabin">
      <form action="post" onSubmit={handleSubmit}>
        <section className="calendar_wrapper">
          <div className="calendar"></div>
        </section>
        <section className="inputs_wrapper">
          <label>
            {t && t?.("reservation_cabin", "email")}<br />
            <input
              type="email"
              name="email"
              id="email_event"
              autoComplete="email"
            />
          </label>
          <label>
            {t && t?.("reservation_cabin", "people")}<br />
            <input
              type="number"
              name="guestCount"
              id="guestCount_event"
              min={1}
              max={5}
              defaultValue={1}
              onKeyDown={(e) => e.preventDefault()}
            />
          </label>
          <input
            type="submit"
            name="events_submit"
            id="events_submit"
            value={t?.("reservation_cabin", "submit") || "Submit"}
          />
        </section>
      </form>
    </main>
  )
}