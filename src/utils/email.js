import { BACKEND_HOST } from "astro:env/client"

export function sendEmail(email, text) {
  fetch(BACKEND_HOST, {
    body: JSON.stringify({ email: "mateoapiana@gmail.com", text }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return fetch(BACKEND_HOST, {
    body: JSON.stringify({ email, text: "Form created" }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}