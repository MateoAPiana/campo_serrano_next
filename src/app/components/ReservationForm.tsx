"use client";

import "./reservationForm.css";

import { sendEmail } from "app/utils/email";
import { MouseEventHandler, useEffect, useState } from "react";
import { Calendar, Options } from "vanilla-calendar-pro";

export function ReservationForm({ walks_services, t }: { walks_services: string[], t: ((key: string, paramKey?: string) => string) | undefined }) {
  const [day, setDay] = useState("")
  const [page, setPage] = useState<0 | 1>(0)
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

  const handleContinue: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setPage(1);
  }

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
    <>
      <form action="post" onSubmit={handleContinue} style={{ display: page ? "none" : "flex" }} className="reservation_form1">
        <div className="calendar__wrapper">
          <div className="calendar"></div>
        </div>
        <div className="reservation__form">
          <label>{t && t("reservation", "email")}<br />
            <input type="email" name="email" id="email_form" placeholder="example@gmail.com" required />
          </label>
          <label>
            {t && t("reservation", "people")} <br />
            <input type="number" name="quantity" id="quantity_form" min={1} max={15} defaultValue={2} required />
          </label>
          <label>
            {t && t("reservation", "menu")} <br />
            <select name="menu" id="menu_form">
              <option value="1">{t && t("reservation", "menu1")}</option>
              <option value="2">{t && t("reservation", "menu2")}</option>
              <option value="3">{t && t("reservation", "menu3")}</option>
            </select>
          </label>
          <label>
            <input type="checkbox" name="paniza" id="paniza_form" />
            {t && t("reservation", "paniza")}
          </label>
          <input type="submit" name="submit_form" id="submit_form" value="Continue" />
        </div>
      </form>
      <form className="reservation_form2" onSubmit={handleSubmit} action="post" style={{ display: !page ? "none" : "flex" }} >
        <h2>{t && t("reservation", "chooseWalks")}</h2>
        <section className="reservation_form2__content">
          <img src={"/assets/walksmock.png"} alt="" />
          <div className="walks_services__wrapper">
            {
              walks_services.map(key => {
                return (
                  <label key={key}>
                    <input type="checkbox" name={key} id={`${key}_form`} />
                    {t?.("walks_services", key)}
                  </label>
                )
              })
            }
          </div>
        </section>
        <input type="submit" name="submit_form" id="submit_form" value="Submit" />
      </form>
    </>
  )
}