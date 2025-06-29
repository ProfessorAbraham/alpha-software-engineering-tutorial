import { type NextRequest, NextResponse } from "next/server";
import { submitToGoogleSheets } from "@/lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    if (request.method && request.method !== "POST") {
      return NextResponse.json(
        { success: false, message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const data = await request.json();

    // Prepare data for Google Sheets
    const contactData = {
      ...data,
      submissionDate: new Date().toISOString(),
    };

    // Submit to Google Sheets
    const result = await submitToGoogleSheets(contactData, "contact");

    if (!result?.success) {
      throw new Error(result?.message || "Unknown error from Google Sheets");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      ticketId: `TICKET-${Date.now()}`,
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to send message",
      },
      { status: 500 }
    );
  }
}
