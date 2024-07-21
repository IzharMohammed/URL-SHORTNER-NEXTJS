import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

const fetchUrls = async () => {
    const shortnerService = new UrlShortnerService();
    const response = await shortnerService.getAllUrls();
    return response;
}

export async function GET() {
    const urls = await fetchUrls();
    const response = NextResponse.json({ urls });
    return response;
}