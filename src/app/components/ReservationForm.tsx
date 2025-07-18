"use client";

import "./reservationForm.css";

import { sendEmail } from "app/utils/email";
import { MouseEventHandler, useEffect, useState } from "react";
import { Calendar, Options } from "vanilla-calendar-pro";

import type { typeMenuItem } from "../../../types";

export function ReservationForm({ walks_services, t }: { walks_services: string[], t: ((key: string, paramKey?: string) => string) | undefined }) {
  const [day, setDay] = useState("")
  const [page, setPage] = useState<0 | 1>(0)
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [menu, setMenu] = useState("second")
  const [typeMenu, setTypeMenu] = useState<typeMenuItem[]>([])

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
    const formData = new FormData(event.currentTarget)
    const emailValue = formData.get("email")
    const guessValue = formData.get("quantity")
    if (menu === "2") {
      const typeMenuValues = document.querySelectorAll<HTMLInputElement>(".type_menu__label input[type='number']");
      const menu2 = t?.("reservation", "menu2Description") as unknown as string[];
      typeMenuValues.forEach((v, index) => {
        setTypeMenu(prev => [...prev, { typeMenu: menu2[index], quantity: parseInt(v.value) }])
      })
    }
    setGuestCount(guessValue as string)
    setEmail(emailValue as string)
    setError("")
    if (!day) {
      setError(t?.("reservation", "errorDate") || "Error");
      return;
    }
    setPage(1);
  }

  const handleSubmit: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    let walksSelected: string[] = [];
    walks_services.forEach(w => {
      if (formData.get(w)) {
        walksSelected.push(w);
      }
    })
      ; (async () => {
        if (!email) throw new Error("The email is required");
        const res = await sendEmail(email, {
          reservationDate: day[0],
          guestCount: parseInt(guestCount),
          menu,
          walksSelected,
          typesMenu: typeMenu
        });
        if (res.ok) { }
      })();
  };

  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMenu(event.target.value);
  };

  return (
    <>
      <form action="post" onSubmit={handleContinue} style={{ display: page ? "none" : "grid" }} className="reservation_form1">
        <section className="main_content">
          <div className="calendar__wrapper">
            <div className="calendar"></div>
          </div>
          <div className="reservation__form">
            <label>{t && t("reservation", "email")}<br />
              <input type="email" name="email" id="email_form" required />
            </label>
            <label>
              {t && t("reservation", "people")} <br />
              <input type="number" name="quantity" id="quantity_form" min={1} max={15} defaultValue={2} required />
            </label>
            <label>
              {t && t("reservation", "menu")} <br />
              <select name="menu" id="menu_form" onChange={handleMenuChange} value={menu}>
                <option value="1">{t && t("reservation", "menu1")}</option>
                <option value="2">{t && t("reservation", "menu2")}</option>
                <option value="3">{t && t("reservation", "menu3")}</option>
              </select>
            </label>
            {error && <p className="text-red-700">Error: {error}</p>}
            <input type="submit" name="submit_form" id="submit_form" value="Continue" />
          </div>
        </section>
        <section className="description_menu">
          {
            (() => {
              const menu2 = t?.("reservation", "menu2Description") as unknown as string[];
              switch (menu) {
                case "1":
                  return <p>{t && t("reservation", "menu1Description")}</p>;
                case "2":
                  return <div className="type_menu">{menu2.map(type => {
                    return <label key={type} className="type_menu__label">
                      {type + ": "}
                      <input
                        min="0"
                        max="30"
                        defaultValue={0}
                        type="number"
                        name={`${type}_menu`}
                        id=""
                      />
                      <br />
                    </label>
                  })}</div>;
                case "3":
                  return <p>{t && t("reservation", "menu3Description")}</p>;
                default:
                  return <p>{t && t("reservation", "menu1Description")}</p>;
              }
            })()
          }
        </section>
      </form>
      <form className="reservation_form2" onSubmit={handleSubmit} action="post" style={{ display: !page ? "none" : "flex" }} >
        <h2>{t && t("reservation", "chooseWalks")}</h2>
        <section className="reservation_form2__content">
          <img src={"/assets/walks.jpg"} alt="" />
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