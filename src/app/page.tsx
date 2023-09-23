"use client";

import RobotConfigurationForm from "@/components/forms/form";
import Grid from "@/components/grids/grid";
import Information from "@/components/information/information";
import WelcomeBanner from "@/components/welcome-banners/welcome-banner";
import { LocationModel, RobotViewModel, SpiralDirectionEnum } from "@/lib/models";
import { useRef, useState } from "react";
import cloneDeep from "lodash/cloneDeep";

export default function Home() {

  const formRef = useRef(null); //reference form section
  const gridRef = useRef(null); //reference grid section

  const [formRenderCount, setFormRenderCount] = useState(0);
  const [simulationRenderCount, setSimulationRenderCount] = useState(0);

  const [gridLength, setGridLength] = useState(0); // state to set N for NxN grid
  const [time, setTime] = useState(0); // state to set time for robot
  const [robots, setRobots] = useState([]); // state to set Robots on Grid

  //#region Functions

  function configurationClick() {
    setFormRenderCount(formRenderCount + 1);
    setGridLength(0);
    setTimeout(() => scrollToForm(), 200);
  }

  function onRestartForm() {
    scrollToForm();
    setTimeout(() => setGridLength(0), 500);
  }

  function scrollToForm() {
    // scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onFormSubmission(
    gridLength: number,
    time: number,
    clockwise: boolean,
    formRobots: RobotViewModel[]
  ) {
    formRobots.forEach(x => {
      //assigning properties to the robot model for the configuration
      x.setGridSize(gridLength);
      x.setSpiralDirection(clockwise ? SpiralDirectionEnum.Clockwise : SpiralDirectionEnum.AnitClockwise);
    });
    setGridLength(gridLength);
    setTime(time);
    setRobots(cloneDeep(formRobots));

    setSimulationRenderCount(simulationRenderCount + 1); //to re-render the simulator component

    setTimeout(() =>
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  //#endregion

  return (
    <>
      <WelcomeBanner />
      <Information onConfigurationClick={configurationClick} />
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
