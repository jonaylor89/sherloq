import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, Settings, SearchX } from "lucide-react";
import Link from "next/link";

const exampleSearches = [
  "Taylor Swift",
  "Brad Pitt",
  "Beyoncé",
  "Leonardo DiCaprio",
  "Oprah Winfrey",
  "Tom Hanks",
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-stone-100 to-amber-50">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-stone-800 text-stone-100">
        <Link className="flex items-center justify-center" href="#">
          <SearchX className="h-6 w-6 text-amber-500" />
          <span className="ml-2 text-2xl font-bold font-serif">Sherloq</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-amber-500 transition-colors"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-amber-500 transition-colors"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-amber-500 transition-colors"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-amber-500 transition-colors"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-serif">
                  Uncover the Truth with Sherloq
                </h1>
                <p className="mx-auto max-w-[700px] text-stone-700 md:text-xl font-serif">
                  Safe, thorough, private, and customizable people searches at
                  your fingertips. Let the investigation begin.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="bg-white text-black flex-1 px-3 py-2 text-lg border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Enter a name to search..."
                    type="text"
                  />
                  <Button
                    className="px-4 py-2 text-lg font-semibold text-stone-100 bg-amber-600 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
                    type="submit"
                  >
                    Search
                  </Button>
                </form>
                <p className="text-xs text-stone-600">Try searching:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {exampleSearches.map((name, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-amber-200 bg-stone-200 text-stone-800"
                    >
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-800 text-stone-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-stone-700 p-4 rounded-lg">
                <Shield className="h-10 w-10 text-amber-500" />
                <h2 className="text-xl font-bold font-serif">Secure</h2>
                <p className="text-sm text-stone-300 text-center">
                  Your investigations are protected with state-of-the-art
                  encryption.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-stone-700 p-4 rounded-lg">
                <Search className="h-10 w-10 text-amber-500" />
                <h2 className="text-xl font-bold font-serif">Thorough</h2>
                <p className="text-sm text-stone-300 text-center">
                  We leave no stone unturned in our comprehensive searches.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-stone-700 p-4 rounded-lg">
                <Eye className="h-10 w-10 text-amber-500" />
                <h2 className="text-xl font-bold font-serif">Discreet</h2>
                <p className="text-sm text-stone-300 text-center">
                  Your search history and personal data remain confidential.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-stone-700 p-4 rounded-lg">
                <Settings className="h-10 w-10 text-amber-500" />
                <h2 className="text-xl font-bold font-serif">Customizable</h2>
                <p className="text-sm text-stone-300 text-center">
                  Tailor your investigation parameters to find exactly what you
                  need.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                  The Art of Digital Sleuthing
                </h2>
                <p className="max-w-[600px] text-stone-700 md:text-xl">
                  Sherloq combines cutting-edge technology with the timeless art
                  of investigation. Our platform empowers you to uncover the
                  truth with the precision of a master detective.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                <SearchX className="h-5 w-5 text-amber-600" />
                    <span className="text-black">Advanced identity verification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-amber-600" />
                    <span className="text-black">Deep web scanning capabilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-amber-600" />
                    <span className="text-black">Encrypted data protection</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-[300px] h-[400px] bg-stone-200 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-stone-500 text-lg font-serif">
                    Magnifying glass image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                  Begin Your Investigation Today
                </h2>
                <p className="mx-auto max-w-[600px] text-stone-700 md:text-xl">
                  Join the ranks of digital detectives. Start your first case
                  with Sherloq and experience the power of intelligent
                  investigation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="bg-white flex-1 px-3 py-2 text-stone-900 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="px-4 py-2 font-semibold text-stone-100 bg-amber-600 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
                    type="submit"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-stone-600">
                  Start your free trial. No credit card required.{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-2 hover:text-amber-600"
                  >
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-stone-800 text-stone-100">
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Put a Girl On Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 hover:text-amber-500 transition-colors"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 hover:text-amber-500 transition-colors"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
