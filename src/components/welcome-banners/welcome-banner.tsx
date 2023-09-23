import { GITHUB_REPOSITORY_LINK } from "@/lib/constants";
import Link from "next/link";

export default function WelcomeBanner() {
    return <>
        <div className="h-screen w-full relative">
            <div className="h-screen w-full relative flex justify-end items-center">
                <div className="text-6xl text-white font-extrabold tracking-wider leading-10 uppercase relative pr-10 mr-4 py-2">
                    <h1 className="my-6 text-right">Robot</h1>
                    <h1 className="my-6 text-right">Vacuum</h1>
                    <h1 className="my-6 text-right">Simulation</h1>
                </div>
            </div>
            <div className="absolute top-10 left-14">
                <Link href={GITHUB_REPOSITORY_LINK} target="_blank">
                    <button className="transition rounded border border-white-500 text-white px-4 py-1 hover:bg-white hover:text-black duration-100 text-md">
                        GitHub
                    </button>
                </Link>
            </div>
            <div className=" w-full absolute top-0 left-0 right-0 -z-20" style={{ "height": "calc(100vh + 12rem)" }}>
                <img className="object-cover w-full" style={{ "height": "calc(100vh + 12rem)" }} src="/testt.jpg" />
            </div>
            <div className=" w-full absolute top-0 left-0 right-0  -z-10 bg-black opacity-80" style={{ "height": "calc(100vh + 12rem)" }}>
            </div>
        </div>
    </>
}