import Image from "next/image";

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
        <div className="flex flex-col items-center justify-center gap-4">
          {/* use local font poppins */}
          <p className={`text-4xl font-bold ${poppins.variable}`}>The best URL shortener in the Market</p>
          <p>We are the most straightforward URL shortener - No sign in needed</p>
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
