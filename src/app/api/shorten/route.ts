"use server"
import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { originalUrl } = await request.json();
    console.log('original url', originalUrl);
    
    const shortnerService = new UrlShortnerService();
    const shortUrl = await shortnerService.shortenUrl(originalUrl);
    return NextResponse.json({ shortUrl }, { status: 201 })
}