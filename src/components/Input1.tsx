"use client"
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { UrlShortnerService } from '@/services/UrlShortnerService';
import { Input } from "@/components/ui/input"

function Input1() {
    const  handlePostRequest = async ({originalLink}: {originalLink : string}) => {
        console.log('original Link',originalLink);
        const shortnerService = new UrlShortnerService();
        shortnerService.shortenUrl(originalLink); 
      }
      
        const [originalLink, setOriginalLink] = useState('');
    return (
        <div>
            <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                    Link
                </Label>

                <Input
                    id="link"
                    value={originalLink}
                    onChange={(e) => setOriginalLink(e.target.value)}
                />
            </div>

            <Button type="submit" size="sm" className="px-3" onClick={(e) => handlePostRequest({ originalLink })}>
                <span className="sr-only">shoot</span>
            </Button>
        </div>
    )
}

export default Input1;