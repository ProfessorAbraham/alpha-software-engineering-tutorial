// Google Apps Script to handle form submissions
// Deploy this as a web app and use the URL in your Next.js app

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const { type, data: formData } = data

    if (type === "enrollment") {
      return handleEnrollment(formData)
    } else if (type === "contact") {
      return handleContact(formData)
    }

    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Invalid type" })).setMimeType(
      ContentService.MimeType.JSON,
    )
  } catch (error) {
    console.error("Error:", error)
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

function handleEnrollment(data) {
  // Replace with your actual Google Sheets ID
  const ENROLLMENT_SHEET_ID = "YOUR_ENROLLMENT_SHEET_ID"

  try {
    const sheet = SpreadsheetApp.openById(ENROLLMENT_SHEET_ID).getActiveSheet()

    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Submission Date",
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Country",
        "City",
        "Education",
        "Experience",
        "Motivation",
        "Package Title",
        "Plan",
        "Price (ETB)",
        "Status",
      ]
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    }

    // Add the new enrollment data
    const rowData = [
      data.submissionDate,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.country,
      data.city,
      data.education,
      data.experience,
      data.motivation,
      data.packageTitle,
      data.plan,
      data.price,
      "New", // Default status
    ]

    sheet.appendRow(rowData)

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Enrollment submitted successfully" }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("Enrollment error:", error)
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

function handleContact(data) {
  // Replace with your actual Google Sheets ID
  const CONTACT_SHEET_ID = "YOUR_CONTACT_SHEET_ID"

  try {
    const sheet = SpreadsheetApp.openById(CONTACT_SHEET_ID).getActiveSheet()

    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      const headers = ["Submission Date", "Name", "Email", "Phone", "Subject", "Message", "Inquiry Type", "Status"]
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    }

    // Add the new contact data
    const rowData = [
      data.submissionDate,
      data.name,
      data.email,
      data.phone || "",
      data.subject,
      data.message,
      data.inquiryType,
      "New", // Default status
    ]

    sheet.appendRow(rowData)

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Contact form submitted successfully" }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("Contact error:", error)
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

// Allow CORS for your domain
function doOptions(e) {
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT).setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  })
}
