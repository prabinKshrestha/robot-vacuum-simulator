import Image from "next/image";
import Link from "next/link";
import { GITHUB_REPOSITORY_LINK } from "@/lib/constants";

export default function Header() {
  return (
    <>
      <header className="h-20 px-20 py-4 flex items-center relative z-10">
        {/* <header className="h-16 px-8 bg-slate-200 flex items-center"> */}

        <div className="grow-0">
          <Link href="/">
            <h4 className=" text-md">Home</h4>
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </Link>
        </div>
        <div className="grow text-right">
          <Link href={GITHUB_REPOSITORY_LINK} target="_blank">
            <button className="transition rounded border border-orange-500 text-orange-500 px-4 py-1 hover:bg-orange-500 hover:text-white duration-100 text-md">
              GitHub
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
