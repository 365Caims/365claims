import { NextRequest, NextResponse } from "next/server";
import { sendWhatsApp } from "@/lib/sendWhatsApp";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message: msg } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ ok: false, message: "Name & phone required" }, { status: 400 });
    }

    const message = `
📩 *NEW CONTACT PAGE ENQUIRY*

👤 Name: ${name}
📞 Phone: ${phone}
${email ? `✉️ Email: ${email}\n` : ""}
📝 Message: ${msg || "No message provided"}

⏱️ Submitted: ${new Date().toLocaleString()}
`;

    await sendWhatsApp(message);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
