import { typeMenuItem } from "../../types";

interface EmailData {
  reservationDate: string;
  guestCount: number;
  menu: string;
  walksSelected?: string[];
  typesMenu?: typeMenuItem[];
}

export function sendEmail(email: string, data: EmailData) {
  const textUser = `<!DOCTYPE html>
<html lang="es">
<head>  <meta charset="UTF-8">
  <title>Confirmación de Reserva – Punto Serrano</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f9f9f9;
      color: #333;
      padding: 20px;
      max-width: 600px;
      margin: auto;
    }

    .container {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    h1 {
      color: #8B0000;
      font-size: 24px;
      margin-bottom: 10px;
    }

    .section {
      margin-top: 20px;
    }

    .details {
      margin-top: 10px;
      line-height: 1.6;
    }

    .footer {
      margin-top: 30px;
      font-size: 14px;
      color: #555;
    }

    .highlight {
      font-weight: bold;
      color: #444;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📩 Confirmación de Reserva – Punto Serrano</h1>

    <div class="section">
      <p>¡Gracias por elegir <strong>Punto Serrano</strong>!</p>
      <p>Confirmamos su solicitud de reserva con los siguientes detalles:</p>

      <div class="details">
        🗓 <span class="highlight">Fecha:</span>${data.reservationDate}<br>
        👥 <span class="highlight">Número de personas:</span> ${data.guestCount}<br>
      </div>

      <p>Le recomendamos llegar con al menos 10 minutos de antelación.<br>
      Si necesita modificar o cancelar su reserva, no dude en contactarnos.</p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">

    <div class="section">
      <p>Thank you for choosing <strong>Punto Serrano</strong>!</p>
      <p>We confirm your booking request with the following details:</p>

      <div class="details">
        🗓 <span class="highlight">Date:</span> ${data.reservationDate}<br>
        👥 <span class="highlight">Number of guests:</span> ${data.guestCount}<br>
      </div>

      <p>We kindly recommend arriving at least 10 minutes early.<br>
      If you need to modify or cancel your reservation, feel free to contact us.</p>
    </div>

    <div class="footer">
      <p>🍽️ <strong>Punto Serrano</strong><br>
      Tel: [Teléfono / WhatsApp] • Email: [Correo electrónico]<br>
      [Sitio web / Redes sociales]</p>

      <p><em>¡Esperamos brindarle una experiencia inolvidable!<br>
      We look forward to giving you an unforgettable experience!</em></p>
    </div>
  </div>
</body>
</html>
`

  const textAdmin = `
  Solicitud de reserva recibida:<br>
  Fecha: ${data.reservationDate}.<br>
  Número de personas: ${data.guestCount}.<br>
  Email del cliente: ${email}.<br>
  Menú seleccionado: ${data.menu}.<br>
  Caminatas seleccionadas: ${data.walksSelected ? data.walksSelected.join(", ") : "Ninguna"}.<br>
  Tipo de menú seleccionado: ${data.typesMenu ? data?.typesMenu.map(item => `${item.typeMenu}: ${item.quantity}`).join(", ") : ""}.<br>
  `

  fetch("/api", {
    body: JSON.stringify({ email: "mateoapiana@gmail.com", text: textAdmin }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return fetch("/api", {
    body: JSON.stringify({ email, text: textUser }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}