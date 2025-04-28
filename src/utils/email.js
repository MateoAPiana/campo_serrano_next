export function sendEmail(email, text) {
  fetch("/api", {
    body: JSON.stringify({ email: "mateoapiana@gmail.com", text }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return fetch("/api", {
    body: JSON.stringify({ email, text: "Form created" }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}