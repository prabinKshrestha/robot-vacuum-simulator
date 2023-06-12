import Image from "next/image";
import Link from "next/link";
import { GITHUB_REPOSITORY_LINK } from "@/lib/constants";

export default function Header() {
  return (
    <header className="h-20 px-10 py-4 flex items-center">
      {/* <header className="h-16 px-8 bg-slate-200 flex items-center"> */}

      <div className="grow-0">
        <Link href="/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
      <div className="grow text-right">
        <Link href={GITHUB_REPOSITORY_LINK} target="_blank">
          <button className="transition rounded border border-black px-4 py-1 hover:bg-black hover:text-white duration-100 text-md">GitHub</button>
        </Link>
      </div>
    </header>
  );
}
