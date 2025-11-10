import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shomalikdavlatov@gmail.com",
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (result.error) {
      console.error("[v0] Resend error:", result.error)
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", id: result.data?.id }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
