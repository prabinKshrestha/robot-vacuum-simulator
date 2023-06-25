"use client";

import RobotConfigurationForm from "@/components/forms/form";
import Grid from "@/components/grids/grid";
import { LocationModel, RobotViewModel, SpiralDirectionEnum } from "@/lib/models";
import { useRef, useState } from "react";

export default function Home() {

  const gridRef = useRef(null);
  const formRef = useRef(null);

  const [render, setRender] = useState(0);
  const [gridLength, setGridLength] = useState(0);
  const [time, setTime] = useState(0);
  const [robots, setRobots] = useState([]);

  //#region Functions

  function onRestartForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setGridLength(0), 500);
  }

  function onFormSubmission(
    gridLength: number,
    time: number,
    clockwise: boolean,
    formRobots: RobotViewModel[]
  ) {
    formRobots.forEach(x => {
      x.setGridSize(gridLength);
      x.setSpiralDirection(clockwise ? SpiralDirectionEnum.Clockwise : SpiralDirectionEnum.AnitClockwise);
    });
    setGridLength(gridLength);
    setTime(time);
    setRobots(formRobots);

    setRender(render + 1);

    setTimeout(() =>
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  //#endregion

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
      <div ref={formRef} >
        <RobotConfigurationForm onSubmission={onFormSubmission} />
      </div>
      {gridLength ? (
        <div ref={gridRef} key={render}>
          <Grid
            gridLength={gridLength}
            time={time}
            formRobots={robots}
            onRestart={onRestartForm}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
