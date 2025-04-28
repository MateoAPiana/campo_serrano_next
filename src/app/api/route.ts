import { Resend } from 'resend'
import { schema_email } from "./schemas/email.js"

const resend = new Resend(process.env.API_KEY);

export async function POST(request: Request) {
  try {
    const { email, text } = await request.json()

    if (!schema_email.safeParse({ email, text }).success) {
      return new Response(JSON.stringify({ error: true, msg: "Invalid format" }), { status: 400 })
    }

    resend.emails.send({
      from: 'test@mateoapiana.website',
      to: email,
      subject: 'Punto Serra Reservation',
      html: text
    });

    return new Response(JSON.stringify({ error: false }), { status: 201 })

  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: true }), { status: 500 })
  }
}