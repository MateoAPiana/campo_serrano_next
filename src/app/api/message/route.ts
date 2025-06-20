import WhatsApp from 'whatsapp';

// Your test sender phone number
const wa = new WhatsApp(Number(process.env.WA_PHONE_NUMBER_ID) || 0);

// Enter the recipient phone number
const recipient_number = process.env.RecipientPhoneNumber;

async function send_message({ msg }: { msg: string }) {
  try {
    const sent_text_message = wa.messages.text({ "body": msg }, Number(recipient_number));

    await sent_text_message.then((_res) => {
      console.log("success");
      console.log({ from: process.env.WA_PHONE_NUMBER_ID, to: process.env.RecipientPhoneNumber });
    });
  }
  catch (e) {
    console.log(JSON.stringify(e));
  }
}

export async function POST(request: Request) {
  const { msg } = await request.json();
  send_message({ msg })
  return new Response(JSON.stringify({ error: false }), { status: 201 });

}