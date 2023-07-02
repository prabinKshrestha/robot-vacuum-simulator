"use client";

import RobotConfigurationForm from "@/components/forms/form";
import Grid from "@/components/grids/grid";
import Information from "@/components/information/information";
import WelcomeBanner from "@/components/welcome-banners/welcome-banner";
import { LocationModel, RobotViewModel, SpiralDirectionEnum } from "@/lib/models";
import { useRef, useState } from "react";

export default function Home() {

  const gridRef = useRef(null);
  const formRef = useRef(null);

  const [formRenderCount, setFormRenderCount] = useState(0);
  const [simulationRenderCount, setSimulationRenderCount] = useState(0);
  const [gridLength, setGridLength] = useState(0);
  const [time, setTime] = useState(0);
  const [robots, setRobots] = useState([]);

  //#region Functions

  function welcomeStartClick() {
    setFormRenderCount(formRenderCount + 1);
    setGridLength(0);
    setTimeout(() => scrollToForm(), 200);
  }

  function onRestartForm() {
    scrollToForm();
    setTimeout(() => setGridLength(0), 500);
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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

    setSimulationRenderCount(simulationRenderCount + 1); //to re-render the simulator component

    setTimeout(() =>
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  //#endregion

  return (
    <>
      <WelcomeBanner onStartClick={welcomeStartClick} />
      <Information />
      {
        formRenderCount > 0 ?
          <div ref={formRef} >
            <RobotConfigurationForm onSubmission={onFormSubmission} />
          </div> : ""
      }
      {gridLength ? (
        <div ref={gridRef} key={simulationRenderCount}>
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
