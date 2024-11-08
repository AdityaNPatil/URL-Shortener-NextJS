import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 bg-blue-800 text-center text-white">
      <p className="text-sm">© {new Date().getFullYear()} BlinkLinks. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <Link href="https://www.linkedin.com/in/aditya-p-986955237/" target="_blank">
          <Image src="/linkedin-icon.png" alt="LinkedIn" height={24} width={24} />
        </Link>
        <Link href="https://github.com/AdityaNPatil" target="_blank">
          <Image src="/github-icon.png" alt="GitHub" height={24} width={24} />
        </Link>
      </div>
    </footer>
  );
}
