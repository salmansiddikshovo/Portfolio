import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message, honeypot } = result.data;

    // Honeypot spam protection: bots fill hidden fields, humans do not
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "salmansiddikshovo@gmail.com";

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipient],
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `From: ${name} <${email}>\n\nMessage:\n${message}`
      });

      if (error) {
        return NextResponse.json(
          { message: "Failed to send message. Please try again later." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}
