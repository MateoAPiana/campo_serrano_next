"use client"

import "./styles.css"

import { sendEmail } from "../../utils/email.js";

import "vanilla-calendar-pro/styles/index.css";
import { Calendar, type Options } from "vanilla-calendar-pro";
import { MouseEventHandler, useEffect, useState } from "react";

export default function Reservation() {
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")

  const options: Options = {
    onClickDate(self) {
      setDay(self.context.selectedDates as unknown as string)
    },
    onChangeTime(self) {
      setTime(self.context.selectedHours + " : " + self.context.selectedMinutes as unknown as string)
    },
    selectedTheme: "light",
    selectionTimeMode: 12,
    dateMin: "today",
  };

  useEffect(() => {
    const calendar = new Calendar(".calendar", options);

    calendar.init();
  }, [])

  const handleSubmit: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    console.log({ target: formData.get("email") });
    (async () => {
      if (!email) throw new Error("The email is required");
      const res = await sendEmail(email, day[0] + " " + time);
      if (res.ok) { }
    })();
  };

  return (
    <main className="reservation_page">
      <h1>Reservation</h1>
      <form action="post" onSubmit={handleSubmit}>
        <label>Your email:
          <input type="email" name="email" id="email_form" required />
        </label>
        <div className="calendar"></div>
        <input type="submit" name="submit_form" id="submit_form" value="Submit" />
      </form>
    </main>
  )
}
