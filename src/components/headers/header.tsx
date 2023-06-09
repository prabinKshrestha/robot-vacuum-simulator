import Image from "next/image";
import Link from "next/link";
import { GITHUB_REPOSITORY_LINK } from "@/lib/constants";

export default function Header() {
  return (
    <header className="h-16 px-8 bg-slate-200 flex items-center">
      {/* <header className="h-16 px-8 bg-slate-200 flex items-center"> */}
      <div className="grow-0">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className="grow text-right">
        <Link
          href={GITHUB_REPOSITORY_LINK}
          target="_blank"
        >
          <button className="border border-black px-4 py-1">GitHub</button>
        </Link>
      </div>
    </header>
  );
}
