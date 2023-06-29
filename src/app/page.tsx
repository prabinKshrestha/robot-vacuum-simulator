"use client";

import RobotConfigurationForm from "@/components/forms/form";
import Grid from "@/components/grids/grid";
import WelcomeBanner from "@/components/welcome-banners/welcome-banner";
import { LocationModel, RobotViewModel, SpiralDirectionEnum } from "@/lib/models";
import { useRef, useState } from "react";

export default function Home() {

  const gridRef = useRef(null);
  const formRef = useRef(null);

  const [showForm, setshowForm] = useState(0);
  const [render, setRender] = useState(0);
  const [gridLength, setGridLength] = useState(0);
  const [time, setTime] = useState(0);
  const [robots, setRobots] = useState([]);

  //#region Functions

  function onRestartForm() {
    scrollToForm();
    setTimeout(() => setGridLength(0), 500);
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function startClick() {
    setshowForm(showForm + 1);
    setGridLength(0);
    setTimeout(() => scrollToForm(), 200);
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
      <WelcomeBanner onStartClick={startClick} />
      {
        showForm > 0 ?
          <div ref={formRef} >
            <RobotConfigurationForm onSubmission={onFormSubmission} />
          </div> : ""
      }
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
