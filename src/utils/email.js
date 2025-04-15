export function sendEmail(email, text) {
  fetch("/", {
    body: JSON.stringify({ email: "mateoapiana@gmail.com", text }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return fetch("/", {
    body: JSON.stringify({ email, text: "Form created" }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}