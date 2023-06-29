export default function WelcomeBanner({onStartClick}) {
    return <>
        <div className="h-screen absolute left-0 right-0  top-0">
            <div className="flex h-full relative px-20">
                <div className="w-1/2 relative">
                    <div className="absolute top-1/2 transorm -translate-y-1/2">
                        <div className="text-5xl font-extrabold tracking-wider leading-10 uppercase relative pl-4 py-2 border-l-8 border-l-orange-500">
                            <h1 className="my-4">Robot</h1>
                            <h1 className="my-4">Vacuum</h1>
                            <h1 className="my-4">Simulator</h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 relative px-10">
                    <img
                        className="object-cover h-auto w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/0.png"
                    />
                </div>
                <div onClick={onStartClick} className="cursor-pointer bg-purple-600 h-28 w-28 rounded-full absolute bottom-10 left-1/2 transorm -translate-x-1/2 p-1 flex items-center justify-center shadow-xl transition duration-200 hover:scale-110">
                    <div className="cursor-pointer bg-purple-600 h-full w-full border-white border-2 rounded-full flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold tracking-wider">Start</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-screen w-full"></div>
    </>
}




// export default function WelcomeBanner() {
//     return <>
//         <div className="h-screen absolute left-0 right-0  top-0">
//             {/* <img
//         className="object-cover h-full w-full"
//         src="/banner.png"
//       /> */}
//             <video
//                 autoPlay={true}
//                 muted={true}
//                 loop={true}
//                 className="object-cover h-full w-full"
//                 src="/robot_vacuum_trimmed.mp4"
//             />
//             <div className="absolute top-1/2 left-1/2">
//                 <h1 className="text-white text-5xl font-bold tracking-wider leading-9 transorm uppercase -translate-x-1/2 -translate-y-1/2">
//                     Robot Vacuum Simulator
//                 </h1>
//             </div>
//         </div>
//         <div className="h-screen w-full"></div>
//     </>
// }