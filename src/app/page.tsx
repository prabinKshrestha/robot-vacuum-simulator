"use client";

import RobotConfigurationForm from "@/components/forms/form";
import Grid from "@/components/grids/grid";
import { RobotModel } from "@/lib/models";
import { useRef, useState } from "react";

export default function Home() {
  const [render, setRender] = useState(0);
  const [gridLength, setGridLength] = useState(0);
  const [time, setTime] = useState(0);
  const [clockwise, setClockwise] = useState(false);
  const [robots, setRobots] = useState([]);
  const compRef = useRef(null);

  function onFormSubmission(
    gridLength: number,
    time: number,
    clockwise: boolean,
    formRobots: RobotModel[]
  ) {
    setGridLength(gridLength);
    setTime(time);
    setClockwise(clockwise);
    setRobots(formRobots);
    setRender(render+1);
    setTimeout(() =>
      compRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

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
      <RobotConfigurationForm onSubmission={onFormSubmission} />
      {gridLength ? (
        <div ref={compRef} key={render}>
          <Grid
            gridLength={gridLength}
            time={time}
            clockwise={clockwise}
            formRobots={robots}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
