import { type NextRequest, NextResponse } from "next/server"
import { submitToGoogleSheets } from "@/lib/google-sheets"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Prepare data for Google Sheets
    const contactData = {
      ...data,
      submissionDate: new Date().toISOString(),
    }

    // Submit to Google Sheets
    await submitToGoogleSheets(contactData, "contact")

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      ticketId: `TICKET-${Date.now()}`,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
      },
      { status: 500 },
    )
  }
}
