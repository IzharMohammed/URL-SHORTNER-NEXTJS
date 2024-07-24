

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Themes from '@/components/theme-button';
import { useState } from "react"
import { UrlShortnerService } from "@/services/UrlShortnerService"
import Input1 from "@/components/Input1"
import Input2 from "@/components/Input2"

export default function DialogCloseButton() {

  /* const  handlePostRequest = async ({originalLink}: {originalLink : string}) => {
    console.log('original Link',originalLink);
    const shortnerService = new UrlShortnerService();
    shortnerService.shortenUrl(originalLink); 
  }
  
    const [originalLink, setOriginalLink] = useState('');
    const [shortenLink, setShortenLink] = useState(''); */

  return (
    <>
      < Themes />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center space-x-2">
            <Input1 />
          </div>

          <div className="flex items-center space-x-2">
            <Input2 />
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

