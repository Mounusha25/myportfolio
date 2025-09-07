import { NextResponse } from "next/server"

export async function GET() {
  const nowData = {
    status: "Building the future with AI/ML",
    location: "Tempe, Arizona",
    currentFocus: ["Statistical Machine Learning", "Big Data Analysis", "Research Projects", "Multi-Agent Systems"],
    reading: "Deep Learning by Ian Goodfellow",
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(nowData)
}
