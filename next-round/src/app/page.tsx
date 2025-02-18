import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-darkest">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 lg:px-12 bg-white shadow-md">
        <Link href="/" className="text-2xl font-bold text-primary">
          NextHire
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/features" className="text-dark hover:text-primary transition">Features</Link>
          <Link href="/pricing" className="text-dark hover:text-primary transition">Pricing</Link>
          <Link href="/contact" className="text-dark hover:text-primary transition">Contact</Link>
        </div>
        <Button className="bg-primary hover:bg-[#D04E20] text-white px-6">
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-16 px-6 lg:px-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-darkest leading-tight">
          Ace Your Next Interview with AI-Powered Mock Interviews
        </h1>
        <p className="text-lg text-dark mt-4 max-w-2xl">
          Get realistic interview practice with AI, receive instant feedback, and improve your chances of landing your dream job.
        </p>
        <Button className="mt-6 bg-primary hover:bg-[#D04E20] text-white px-8 py-3 text-lg">
          Start Practicing
        </Button>
      </section>
    </main>
  );
}
