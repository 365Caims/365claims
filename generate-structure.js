// generate-structure.js
const fs = require("fs");
const path = require("path");

const structure = {
  // ONLY create the API route now
  "app/api/claim/route.ts": `
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, details } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, message: "Name and phone are required." },
        { status: 400 }
      );
    }

    console.log("✅ New claim submitted:", {
      name,
      phone,
      email,
      details,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
`,
};

for (const filePath in structure) {
  const fullPath = path.join(process.cwd(), filePath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // ✅ Only create or overwrite THIS file (safe because it's new)
  fs.writeFileSync(fullPath, structure[filePath]);
  console.log("Wrote:", filePath);
}

console.log("✅ API route created/updated successfully!");