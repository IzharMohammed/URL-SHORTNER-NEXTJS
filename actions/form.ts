"use server"

import { UrlShortnerService } from "@/services/UrlShortnerService";

export const submitAction = async ({ originalLink }: any) => {
    console.log('original Link', originalLink);
    const shortnerService = new UrlShortnerService();
    shortnerService.shortenUrl(originalLink);
}