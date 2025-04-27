"use client"

import { Button } from "@/components/ui/button"
import { PrismIcon } from "./prism-icon"

export function Navigation() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-copper-light via-copper to-copper-dark shadow-lg">
          <PrismIcon className="h-5 w-5 text-black" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">
          PRISM SPACE
        </span>
      </div>
      <Button
        onClick={scrollToContact}
        className="bg-gradient-to-r from-copper-light via-copper to-copper-dark text-black hover:from-copper hover:to-copper-dark font-medium"
      >
        Contact
      </Button>
    </nav>
  )
}
