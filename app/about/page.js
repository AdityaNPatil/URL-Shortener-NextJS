import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="bg-blue-50 min-h-screen">
            {/* About Header Section */}
            <section className="bg-gradient-to-r from-blue-200 to-blue-400 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">About BlinkLinks</h1>
                    <p className="text-white text-lg max-w-2xl mx-auto">
                        BlinkLinks is designed to simplify and enhance your online sharing experience. No sign-ups or complex
                        processes—just fast, easy-to-remember links that make sharing hassle-free.
                    </p>
                </div>
            </section>

            {/* Our Purpose Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Purpose</h2>
                    <p className="text-blue-700 mb-8">
                        In a digital world crowded with complex links, BlinkLinks provides a quick and seamless way to transform
                        your URLs. Our mission is to help individuals and businesses create easy-to-share links that improve
                        communication, increase accessibility, and offer valuable insights through link tracking.
                    </p>
                    <Image
                        src="/purpose-illustration.jpg"
                        alt="Our Purpose Illustration"
                        width={400}
                        height={300}
                        className="mx-auto rounded-full"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-blue-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose BlinkLinks?</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-700">No Sign-Up Required</h3>
                            <p className="text-blue-600">
                                Shorten links instantly—no personal information or account creation needed.
                            </p>
                        </div>
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-700">Customizable Short URLs</h3>
                            <p className="text-blue-600">
                                Personalize your short URLs to make them easy to remember and share.
                            </p>
                        </div>
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-700">Analytics & Tracking</h3>
                            <p className="text-blue-600">
                                Track link performance with real-time analytics to understand your audience better.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-8">What Our Users Say</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-md mx-auto">
                            <p className="text-blue-700">"BlinkLinks made link sharing a breeze. Love the custom URL feature!"</p>
                            <p className="mt-4 font-semibold text-blue-800">— Sarah Williams</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-md mx-auto">
                            <p className="text-blue-700">
                                "The analytics helped us understand our audience better. Highly recommended!"
                            </p>
                            <p className="mt-4 font-semibold text-blue-800">— Mike Johnson</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-md mx-auto">
                            <p className="text-blue-700">"Simple and effective! Exactly what I was looking for in a URL shortener."</p>
                            <p className="mt-4 font-semibold text-blue-800">— Emily Clark</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-blue-300 to-blue-500 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Shortening URLs?</h2>
                <p className="text-lg mb-8">Join thousands of users who trust BlinkLinks for efficient link sharing.</p>
                <Link href="/shorten">
                    <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                        Get Started Now
                    </button>
                </Link>
            </section>

        </main>
    );
}
