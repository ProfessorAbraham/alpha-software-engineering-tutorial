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
    const { package: packageData, ...studentData } = data;

    // Prepare data for Google Sheets
    const enrollmentData = {
      ...studentData,
      packageTitle: packageData.title,
      plan: packageData.plan,
      price: packageData.price,
      submissionDate: new Date().toISOString(),
    };

    // Submit to Google Sheets
    const result = await submitToGoogleSheets(enrollmentData, "enrollment");

    if (!result?.success) {
      throw new Error(result?.message || "Unknown error from Google Sheets");
    }

    return NextResponse.json({
      success: true,
      message: "Enrollment submitted successfully",
      enrollmentId: `ASET-${Date.now()}`,
      paymentInstructions: {
        cbeAccount: "1000376842707",
        abyssiniaAccount: "86957094",
        amount: packageData.price,
        telegramContact: "https://t.me/Alpha_software_engineering",
      },
    });
  } catch (error: any) {
    console.error("Enrollment error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to process enrollment",
      },
      { status: 500 }
    );
  }
}
