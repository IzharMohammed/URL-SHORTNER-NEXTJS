import UrlRepository from "@/repositories/UrlRepository";
import shortId from 'shortid';

export class UrlShortnerService {
    private urlRepository; // Declare a private variable to hold the UrlRepository instance

    // Constructor initializes the UrlRepository instance
    constructor() {
        this.urlRepository = new UrlRepository();
    }

    // Method to shorten a given original URL
    async shortenUrl(originalUrl: string): Promise<string> {
        if (!originalUrl) return ""; // If originalUrl is not provided, return an empty string

        // Check if the original URL already exists in the database
        let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);

        if (url) {
            return url.shortUrl; // If the URL exists, return the existing short URL
        }

        // Generate a new short URL using the shortId library
        let shortUrl = shortId();
        // Check if the generated short URL already exists in the database
        url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        while (url) {
            // If a collision occurs (short URL already exists), generate a new short URL and check again
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        }

        // Save the new original URL and generated short URL to the database
        await this.urlRepository.createUrl(originalUrl, `urls/${shortUrl}`);
        return shortUrl; // Return the generated short URL
    }

    // Method to retrieve all URLs from the database
    async getAllUrls() {
        return await this.urlRepository.getAllUrls();
    }

    // Method to retrieve a URL by its short URL
    async getUrlByShortUrl(shortUrl: string) {
        return await this.urlRepository.getUrlByShortUrl(shortUrl);
    }
}
