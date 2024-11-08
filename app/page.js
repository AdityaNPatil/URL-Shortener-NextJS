import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh] p-8 bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <p className={`text-4xl md:text-5xl font-bold ${poppins.variable} text-blue-800 text-center`}>
            The Best URL Shortener in the Market
          </p>
          <p className="text-center text-blue-700 max-w-md">
            We offer the most straightforward URL shortener—no sign-in needed.
            Most platforms require account setup, but here, you can shorten URLs without hassle.
          </p>
          <div className="flex gap-3 mt-4">
            <Link href="/shorten">
              <button className="bg-blue-500 shadow-lg px-4 py-2 rounded-lg font-bold text-white hover:bg-blue-600 transition">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/AdityaNPatil/URL-Shortener-NextJS" target="_blank">
              <button className="bg-blue-500 shadow-lg px-4 py-2 rounded-lg font-bold text-white hover:bg-blue-600 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center relative"> {/* this is the relative parent for Image */}
          <Image
            src="/vector.png"
            alt="Vector Illustration"
            fill // fill is relative to parent
            className="object-contain"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Features</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="max-w-sm p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">No Sign Up Required</h3>
            <p className="text-blue-600">
              Start shortening URLs instantly. No need to share personal details or create an account.
            </p>
          </div>
          <div className="max-w-sm p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">Customizable URLs</h3>
            <p className="text-blue-600">
              Create memorable short URLs by customizing the ending to suit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-blue-700">1. Enter Your URL</h3>
            <p className="text-blue-600 mt-2">
              Simply paste the URL you wish to shorten in the input field.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-blue-700">2. Customize (Optional)</h3>
            <p className="text-blue-600 mt-2">
              Customize the URL ending to make it unique and memorable.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-blue-700">3. Share & Track</h3>
            <p className="text-blue-600 mt-2">
              Get a short link that’s ready to share with easy access to analytics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
