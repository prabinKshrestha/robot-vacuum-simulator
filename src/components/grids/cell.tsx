import Image from "next/image";

export default function Cell({ isCleaned, isRobot }) {
  return (
    <div
      className={
        `h-6 w-6 border border-black text-center ` +
        (isRobot ? "bg-orange-100" : isCleaned ? "bg-white" : "bg-orange-300")
      }
    >
      {isRobot ? <Robot /> : ""}
    </div>
  );
}

function Robot() {
  return (
    <div className="h-full align-middle flex items-center justify-items-center">
      <div className="relative m-auto w-3/4 h-3/4">
        <Image src="/robot.png" alt="Robot" fill />
      </div>
    </div>
  );
}
