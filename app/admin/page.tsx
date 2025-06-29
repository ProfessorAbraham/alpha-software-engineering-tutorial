"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, MessageSquare, Settings, Plus, Copy } from "lucide-react"
import { useState } from "react"

export default function AdminPage() {
  const [copiedEnrollment, setCopiedEnrollment] = useState(false)
  const [copiedContact, setCopiedContact] = useState(false)

  const enrollmentHeaders = [
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

  const contactHeaders = ["Submission Date", "Name", "Email", "Phone", "Subject", "Message", "Inquiry Type", "Status"]

  const copyToClipboard = (text: string, type: "enrollment" | "contact") => {
    navigator.clipboard.writeText(text)
    if (type === "enrollment") {
      setCopiedEnrollment(true)
      setTimeout(() => setCopiedEnrollment(false), 2000)
    } else {
      setCopiedContact(true)
      setTimeout(() => setCopiedContact(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Set up Google Sheets to collect and manage your form submissions</p>
        </div>

        {/* Quick Setup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Users className="w-5 h-5 mr-2" />
                Step 1: Create Enrollment Sheet
              </CardTitle>
              <CardDescription>Create a Google Sheet to collect student enrollment data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <a href="https://docs.google.com/spreadsheets/create" target="_blank" rel="noopener noreferrer">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Google Sheet
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-2">
                  Sheet Name: <code>ASET Enrollments</code>
                </p>
                <p className="text-xs text-gray-600 mb-2">Copy these headers to row 1:</p>
                <div className="bg-white p-2 rounded border text-xs font-mono break-all">
                  {enrollmentHeaders.join("\t")}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 w-full bg-transparent"
                  onClick={() => copyToClipboard(enrollmentHeaders.join("\t"), "enrollment")}
                >
                  <Copy className="w-3 h-3 mr-1" />
                  {copiedEnrollment ? "Copied!" : "Copy Headers"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <MessageSquare className="w-5 h-5 mr-2" />
                Step 2: Create Contact Sheet
              </CardTitle>
              <CardDescription>Create a Google Sheet to collect contact form messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <a href="https://docs.google.com/spreadsheets/create" target="_blank" rel="noopener noreferrer">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Google Sheet
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-2">
                  Sheet Name: <code>ASET Contact Messages</code>
                </p>
                <p className="text-xs text-gray-600 mb-2">Copy these headers to row 1:</p>
                <div className="bg-white p-2 rounded border text-xs font-mono break-all">
                  {contactHeaders.join("\t")}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 w-full bg-transparent"
                  onClick={() => copyToClipboard(contactHeaders.join("\t"), "contact")}
                >
                  <Copy className="w-3 h-3 mr-1" />
                  {copiedContact ? "Copied!" : "Copy Headers"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Setup Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Complete Setup Instructions
            </CardTitle>
            <CardDescription>Follow these steps to connect your Google Sheets to the website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700 mb-2">Step 3: Make Sheets Public (Important!)</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>For each sheet you created:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>
                      Click the <strong>"Share"</strong> button (top right)
                    </li>
                    <li>
                      Click <strong>"Change to anyone with the link"</strong>
                    </li>
                    <li>
                      Set permission to <strong>"Editor"</strong> (so the script can write data)
                    </li>
                    <li>
                      Click <strong>"Copy link"</strong> and save the URLs
                    </li>
                  </ol>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700 mb-2">Step 4: Create Google Apps Script</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      Go to{" "}
                      <a
                        href="https://script.google.com"
                        target="_blank"
                        className="text-blue-600 underline"
                        rel="noreferrer"
                      >
                        script.google.com
                      </a>
                    </li>
                    <li>
                      Click <strong>"New Project"</strong>
                    </li>
                    <li>Replace the default code with the provided script</li>
                    <li>Update the Sheet IDs in the script</li>
                    <li>Save the project</li>
                  </ol>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700 mb-2">Step 5: Deploy as Web App</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      Click <strong>"Deploy"</strong> → <strong>"New deployment"</strong>
                    </li>
                    <li>
                      Choose type: <strong>"Web app"</strong>
                    </li>
                    <li>
                      Execute as: <strong>"Me"</strong>
                    </li>
                    <li>
                      Who has access: <strong>"Anyone"</strong>
                    </li>
                    <li>
                      Click <strong>"Deploy"</strong>
                    </li>
                    <li>Copy the Web App URL</li>
                  </ol>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-700 mb-2">Step 6: Update Environment Variable</h4>
                <div className="text-sm text-gray-600">
                  <p>
                    Add this to your <code>.env.local</code> file:
                  </p>
                  <div className="bg-gray-100 p-2 rounded mt-2 font-mono text-xs">
                    NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_web_app_url_here
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google Apps Script Code */}
        <Card>
          <CardHeader>
            <CardTitle>Google Apps Script Code</CardTitle>
            <CardDescription>Copy this code to your Google Apps Script project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs">
                {`function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { type, data: formData } = data;

    if (type === "enrollment") {
      return handleEnrollment(formData);
    } else if (type === "contact") {
      return handleContact(formData);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: "Invalid type" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleEnrollment(data) {
  // Replace with your actual Google Sheets ID
  const ENROLLMENT_SHEET_ID = "YOUR_ENROLLMENT_SHEET_ID_HERE";

  try {
    const sheet = SpreadsheetApp.openById(ENROLLMENT_SHEET_ID).getActiveSheet();

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
      "New"
    ];

    sheet.appendRow(rowData);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Enrollment submitted successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Enrollment error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleContact(data) {
  // Replace with your actual Google Sheets ID
  const CONTACT_SHEET_ID = "YOUR_CONTACT_SHEET_ID_HERE";

  try {
    const sheet = SpreadsheetApp.openById(CONTACT_SHEET_ID).getActiveSheet();

    // Add the new contact data
    const rowData = [
      data.submissionDate,
      data.name,
      data.email,
      data.phone || "",
      data.subject,
      data.message,
      data.inquiryType,
      "New"
    ];

    sheet.appendRow(rowData);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Contact form submitted successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Contact error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}`}
              </pre>
            </div>
            <Button
              className="mt-4 w-full bg-transparent"
              variant="outline"
              onClick={() => {
                const code = document.querySelector("pre").textContent
                navigator.clipboard.writeText(code)
              }}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Script Code
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>ASET Platform Overview</CardTitle>
            <CardDescription>Your educational platform at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">8-10</div>
                <div className="text-sm text-gray-600">Weeks Duration</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
