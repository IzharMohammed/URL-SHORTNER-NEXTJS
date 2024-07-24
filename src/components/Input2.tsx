"use client"
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy } from "lucide-react"
function Input2() {
    const [shortenLink, setShortenLink] = useState('');
    return (
        <div>
            <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                    Link
                </Label>
                <Input
                    id="link"
                    value={shortenLink}
                //onChange={(e) => setOriginalLink(e.target.value)}
                />
            </div>

            <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default Input2