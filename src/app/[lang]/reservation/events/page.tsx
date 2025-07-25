"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import "./styles.css"

import { Calendar, Options } from "vanilla-calendar-pro";
import "vanilla-calendar-pro/styles/index.css";
import { getTranslations } from "app/app/translations/translate";
import { sendEmailEvents } from "app/utils/email";

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
      const res = await sendEmailEvents(email, {
        reservationDate: day[0],
        guestCount: parseInt(guestCount),
        details,
        since,
        until
      });
      if (res.ok) { }
    })();
  }

  return (
    <main className="reservation_events">
      <form action="post" onSubmit={handleSubmit}>
        <section className="calendar_wrapper">
          <div className="calendar"></div>
          <div className="time_selection">
            <label>
              {t && t?.("reservation_events", "since")}<br />
              <input type="text" name="since" id="time_event_since" defaultValue={"12:30"} required />
            </label>
            <label>
              {t && t?.("reservation_events", "until")}<br />
              <input type="text" name="until" id="time_event_until" defaultValue={"16:30"} required />
            </label>
          </div>

        </section>
        <section className="inputs_wrapper">
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
          <input
            type="submit"
            name="events_submit"
            id="events_submit"
            value={t?.("reservation_events", "submit") || "Submit"}
          />
        </section>
      </form>
    </main>
  )
}