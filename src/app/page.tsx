import RobotConfigurationForm from "@/components/forms/form";
import Grid from "@/components/grids/grid";

export default function Home() {
  return (
    <>
      <div className="h-screen absolute left-0 right-0  top-0">
        {/* <img
        className="object-cover h-full w-full"
        src="/banner.png"
      /> */}
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="object-cover h-full w-full"
          src="/robot_vacuum_trimmed.mp4"
        />
        <div className="absolute top-1/2 left-1/2">
          <h1 className="text-white text-5xl font-bold tracking-wider leading-9 transorm uppercase -translate-x-1/2 -translate-y-1/2">
            Robot Vacuum Simulator
          </h1>
        </div>
      </div>
      <div className="h-screen w-full"></div>
      <RobotConfigurationForm />
      <Grid />
    </>
  );
}
