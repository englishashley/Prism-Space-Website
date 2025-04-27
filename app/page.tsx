import Image from "next/image"
import { Satellite } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 shadow-lg">
              <Satellite className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              PRISM SPACE
            </span>
          </div>
          <Button className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 text-black hover:from-amber-300 hover:to-yellow-500 font-medium">
            Contact
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Revolutionizing{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Satellite
              </span>{" "}
              Data Processing
            </h1>
            <p className="mb-8 text-lg text-white/70">
              Prism's data processing technology revolutionizes customer satellite capabilities, delivering near
              real-time data insights while significantly reducing costs.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-amber-300/30 p-2">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-300/20 to-transparent opacity-50"></div>
              <Image
                src="/satellite.png"
                alt="Satellite in orbit"
                width={600}
                height={600}
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl border border-amber-300/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              The{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Problem
              </span>
            </h2>
            <p className="text-white/70">
              Satellites have limited power split between data collection and dense communication systems. Traditional
              transmission models have high costs and restricted bandwidth, leading to time delays and inefficient data
              utilization.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-white/70">
              Prism satellites offload power-intensive tasks—freeing customer satellites to capture richer data. With
              all onboard power dedicated to compute, Prism delivers near real-time data insights while significantly
              reducing costs.
            </p>
          </div>
        </div>
      </section>

      {/* SAR Image Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="overflow-hidden rounded-3xl border border-amber-300/30">
          <div className="relative">
            <Image
              src="/sar-image.jpeg"
              alt="Synthetic Aperture Radar (SAR) satellite imagery"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-xl">
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Advanced{" "}
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Data Processing
                  </span>
                </h2>
                <p className="text-white/80">
                  Our cutting-edge technology transforms raw SAR data into actionable intelligence, revealing terrain
                  features and surface characteristics invisible to the human eye, all while reducing processing time
                  from hours to seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-amber-300/30 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-300/10 to-transparent opacity-50"></div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-white/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-amber-300/30 bg-black/60 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-amber-300/50 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-amber-300/30 bg-black/60 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-amber-300/50 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-amber-300/30 bg-black/60 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-amber-300/50 focus:outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 text-black hover:from-amber-300 hover:to-yellow-500 font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-300/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 shadow-sm">
                <Satellite className="h-4 w-4 text-black" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                PRISM SPACE
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-md">
              Revolutionizing satellite data processing with cutting-edge technology.
            </p>
            <div className="mt-6 text-center text-sm text-amber-300/50">
              © {new Date().getFullYear()} Prism Space. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
