"use client"

import { useState } from "react";
import Link from "next/link";
import { Album, ArrowRight, BookText, CreditCard, FileText, LayoutList, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const { user } = useUser();


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader className="mt-8">
          <SheetTitle className="text-left text-md font-bold flex items-center gap-3 ml-2">
            <Image 
              src="/logo.svg" 
              alt="logo" 
              width={26} 
              height={26}
            />
            LinkPage
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 px-4 -mt-2">
          <Link
            href="#"
            className="flex gap-2 px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            <LayoutList className="h-5 w-5"/>
            Features
          </Link>
          <Link
            href="#blog"
            className="flex gap-2 px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            <FileText className="h-5 w-5"/>
            Blog
          </Link>
          <Link
            href="#price"
            className="flex gap-2 px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            <CreditCard className="h-5 w-5"/>
            Pricing
          </Link>
          <Link
            href="#price"
            className="flex gap-2 px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            <BookText className="h-5 w-5"/>
            Docs
          </Link>
          <Link
            href="#price"
            className="flex gap-2 px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            <Album className="h-5 w-5"/>
            Demo
          </Link>
          <div className="pt-4 mt-4 border-t">
            {user ? (
                <>
                  <Button className="w-full mb-4 bg-[#409eff] hover:bg-[#409eff]/90 text-white">
                    Submit
                    <ArrowRight />
                  </Button>
                  <SignOutButton>
                    <Button variant="secondary" className="w-full">Sign out</Button>
                  </SignOutButton>
                </>
              ) : (
                <>
                  <Button size="sm" className="w-full mb-4 rounded-full bg-[#409eff] hover:bg-[#409eff]/90 text-white" asChild>
                    <Link href="/sign-in">Sign in</Link>
                  </Button>
                  
                  <Button size="sm" className="w-full rounded-full bg-[#409eff] hover:bg-[#409eff]/90 text-white" asChild>
                    <Link href="/sign-up">Sign up</Link>
                  </Button>
                </>
              )
            }
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
