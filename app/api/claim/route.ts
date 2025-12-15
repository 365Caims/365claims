import { NextRequest, NextResponse } from "next/server";
import { sendWhatsApp } from "@/lib/sendWhatsApp";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, details } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, message: "Name and phone are required." },
        { status: 400 }
      );
    }

    const message = `
📩 *NEW CLAIM SUBMISSION*

👤 Name: ${name}
📞 Phone: ${phone}
${email ? `✉️ Email: ${email}\n` : ""}
📝 Details: ${details || "No details provided"}

⏱️ Submitted: ${new Date().toLocaleString()}
`;

    await sendWhatsApp(message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
