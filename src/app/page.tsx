"use client"
import { Copy } from "lucide-react"

import * as React from "react"
import { BiRightArrowAlt } from "react-icons/bi";
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Themes from '@/components/theme-button';
import { useState } from "react"

export default function DialogCloseButton() {

  const [originalLink, setOriginalLink] = useState('');
  const [shortenLink, setShortenLink] = useState('')
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

            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">shoot</span>
              <BiRightArrowAlt />
            </Button>



          </div>

          <div className="flex items-center space-x-2">

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

