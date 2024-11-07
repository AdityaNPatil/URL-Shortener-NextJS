import Image from "next/image";

// import Link
import Link from "next/link";

// import local Font
import localFont from "next/font/local";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-100">
      {/* hero */}
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          {/* use local font poppins */}
          <p className={`text-4xl font-bold ${poppins.variable}`}>The best URL shortener in the Market</p>
          <p className="text-center">We are the most straightforward URL shortener - No sign in needed. Most will ask you to Sign Up or Sign In, no need to give your details here
            .We understand your needs and hence we have created this URL shortener</p>
          <div className='flex gap-3'>
            <Link href="/generate"><button className='bg-blue-400 shadow-lg p-2 py-1 rounded-lg font-bold hover:bg-blue-500 transition'>Try Now</button></Link>
            <Link href="/github"><button className='bg-blue-400 shadow-lg p-2 py-1 rounded-lg font-bold hover:bg-blue-500 transition'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">   {/* make display relative for relative parent of image*/}
          <Image src={"/vector.png"}
            // width={300}
            // height={300}
            alt="Vector"
            fill="true" // fill its relative parent (cant use with height and width)
          />
        </div>
      </section>


    </main>
  );
}
