const WHATSAPP_PHONE = process.env.WHATSAPP_PHONE;
const WHATSAPP_APIKEY = process.env.WHATSAPP_APIKEY;

if (!WHATSAPP_PHONE || !WHATSAPP_APIKEY) {
  throw new Error("WhatsApp environment variables are not set");
}

export async function sendWhatsApp(text: string) {
  const encoded = encodeURIComponent(text.trim());

  const url =
    `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}` +
    `&text=${encoded}` +
    `&apikey=${WHATSAPP_APIKEY}`;

  try {
    await fetch(url, { method: "GET" });
    return { ok: true };
  } catch {
    console.error("WhatsApp send failed");
    return { ok: false };
  }
}
