import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PrismIcon } from "./components/prism-icon"
import { SlowMotionVideo } from "./components/slow-motion-video"
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <Navigation />
      </header>

      {/* Hero Section with Slow Motion Video */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              We handle your data for you.
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent mt-2 block">
                In orbit.
              </span>
            </h1>
            <p className="mb-8 text-lg text-white/70">
              Prism's data processing technology revolutionizes customer satellite capabilities, delivering near
              real-time data insights while significantly reducing costs.
            </p>
          </div>
          <div className="relative">
            {/* Slow Motion Video Component */}
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <SlowMotionVideo src="/prism-video.mp4" playbackRate={0.5} />
            </div>
            {/* Loading New Technology Text */}
            <div className="mt-4 text-center">
              <p className="text-white/70 text-sm">Loading new technology...</p>
              <p className="bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent font-medium mt-1">
                More info coming soon
              </p>
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
              <span className="bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">
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
              <span className="bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">
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
        <div className="overflow-hidden rounded-3xl border border-copper/30">
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
                  <span className="bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">
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

      {/* Contact Form Section - More Casual & Engaging */}
      <section id="contact-section" className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-copper/30 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-copper/10 to-transparent opacity-50"></div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">
                Interested?
              </span>
            </h2>
            <p className="text-white/70 text-center mb-8">
              Let's explore how we can help with your satellite data needs!
            </p>
            <form className="space-y-6" action="https://formsubmit.co/admin@prismspaceinc.com" method="POST">
              <input type="hidden" name="_subject" value="New contact from Prism Space website" />
              <input type="hidden" name="_next" value="https://prismspaceinc.com/thank-you" />
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-white/70">
                  What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-copper/30 bg-black/60 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-copper/50 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-white/70">
                  Where can we reach you?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-copper/30 bg-black/60 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-copper/50 focus:outline-none"
                  placeholder="yourname@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-white/70">
                  What's on your mind?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-copper/30 bg-black/60 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-copper/50 focus:outline-none"
                  placeholder="Tell us about your project or ask us anything..."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-copper-light via-copper to-copper-dark text-black hover:from-copper hover:to-copper-dark font-medium"
              >
                Let's Talk
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with LinkedIn Button */}
      <footer className="border-t border-copper/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-copper-light via-copper to-copper-dark shadow-sm">
                <PrismIcon className="h-4 w-4 text-black" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">
                PRISM SPACE
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-md mb-6">
              Transforming satellite data processing with cutting-edge technology.
            </p>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/company/prism-space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-copper-light via-copper to-copper-dark text-black px-4 py-2 rounded-md hover:from-copper hover:to-copper-dark transition-all mb-6"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">Follow us on LinkedIn</span>
            </a>

            <div className="text-center text-sm text-copper/50">
              © {new Date().getFullYear()} Prism Space. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
