// Google Sheets integration for form submissions
export interface EnrollmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  education: string;
  experience: string;
  motivation: string;
  packageTitle: string;
  plan: string;
  price: number;
  submissionDate: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: string;
  submissionDate: string;
}

export async function submitToGoogleSheets(
  data: EnrollmentData | ContactData,
  sheetType: "enrollment" | "contact"
) {
  try {
    // Using Google Apps Script Web App URL
    // You'll need to replace this with your actual Google Apps Script URL
    const GOOGLE_SCRIPT_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "YOUR_GOOGLE_SCRIPT_URL";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: sheetType,
        data: data,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    throw error;
  }
}
