"use client"

import "./styles.css"

import { sendEmail } from "../../../utils/email.js";

import "vanilla-calendar-pro/styles/index.css";
import { Calendar, type Options } from "vanilla-calendar-pro";
import { MouseEventHandler, useEffect, useState } from "react";

export default function Reservation() {
  const [day, setDay] = useState("")

  const options: Options = {
    onClickDate(self) {
      setDay(self.context.selectedDates as unknown as string)
    },
    selectedTheme: "light",
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
      const res = await sendEmail(email, day[0]);
      if (res.ok) { }
    })();
  };

  return (
    <main className="reservation_page">
      <h1>Reservation</h1>
      <form action="post" onSubmit={handleSubmit}>
        <div className="calendar__wrapper">
          <div className="calendar"></div>
          <input type="submit" name="submit_form" id="submit_form" value="Submit" />
        </div>
        <div className="reservation__form">
          <label>Your email: <br />
            <input type="email" name="email" id="email_form" placeholder="example@gmail.com" required />
          </label>
          <label>
            Quantity of people: <br />
            <input type="number" name="quantity" id="quantity_form" min={1} max={15} defaultValue={2} required />
          </label>
          <label>
            Your menu: <br />
            <select name="menu" id="menu_form">
              <option value="1">Rabbit</option>
              <option value="2">Sheep</option>
              <option value="3">Empanada</option>
            </select>
          </label>
          <label>
            <input type="checkbox" name="paniza" id="paniza_form" />
            Are you stay in Paniza?
          </label>
        </div>
      </form>
    </main>
  )
}
