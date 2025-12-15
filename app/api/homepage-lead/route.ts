import { NextRequest, NextResponse } from "next/server";
import { sendWhatsApp } from "@/lib/sendWhatsApp";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, details } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ ok: false, message: "Name & phone required" }, { status: 400 });
    }

    const message = `
📩 *NEW HOMEPAGE QUICK LEAD*

👤 Name: ${name}
📞 Phone: ${phone}
📝 Notes: ${details || "No details"}

⏱️ Submitted: ${new Date().toLocaleString()}
`;

    await sendWhatsApp(message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Homepage lead API error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
