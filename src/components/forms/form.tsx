"use client";

import {
  GRID_LENGTH_MAXIMUM,
  GRID_LENGTH_MINIMUM,
  NUMBER_OF_ROBOTS_MAXIMUM,
  NUMBER_OF_ROBOTS_MINIMUM,
  ROBOT_CLEAN_TIME_SEC_PER_CELL_DEFAULT,
  ROBOT_CLEAN_TIME_SEC_PER_CELL_MAXIMUM,
  ROBOT_CLEAN_TIME_SEC_PER_CELL_MINIMUM,
} from "@/lib/constants";
import { RobotViewModel } from "@/lib/models";
import { useState } from "react";
import RobotFormFields from "./robot_form";

export default function RobotConfigurationForm({ onSubmission }) {

  const [gridLength, setGridLength] = useState(GRID_LENGTH_MINIMUM);
  const [time, setTime] = useState(ROBOT_CLEAN_TIME_SEC_PER_CELL_DEFAULT);
  const [clockwise, setClockwise] = useState(false);
  const [robots, setRobots] = useState([RobotViewModel.DefaultRobot()]);

  const [errors, setErrors] = useState([]);

  //#region Functions

  function changeRobot(robot: RobotViewModel) {
    let rt = robots.find((r) => r.id == robot.id);
    rt.currentLocation = robot.currentLocation;
    setRobots([...robots]);
  }

  function addRobot() {
    if (robots.length >= 10) return;
    robots.push(RobotViewModel.DefaultRobot());
    setRobots([...robots]);
  }

  function removeRobot(robot: RobotViewModel) {
    if (robots.length == 1) return;
    let i = robots.findIndex((x) => x.id == robot.id);
    if (i > -1) {
      robots.splice(i, 1);
      setRobots([...robots]);
    }
  }

  function handleSubmit() {
    let newErrors: string[] = _checkErrors();
    setErrors(newErrors);
    if (!newErrors.length) {
      onSubmission(gridLength, time, clockwise, robots);
    }
  }

  function _checkErrors(): string[] {
    let newErrors: string[] = [];
    if (
      !gridLength ||
      gridLength < GRID_LENGTH_MINIMUM ||
      GRID_LENGTH_MINIMUM > GRID_LENGTH_MAXIMUM
    ) {
      newErrors.push(`Grid Size is not valid. Value should be in between ${GRID_LENGTH_MINIMUM} and ${GRID_LENGTH_MAXIMUM}.`);
    }
    if (
      !time ||
      time < ROBOT_CLEAN_TIME_SEC_PER_CELL_MINIMUM ||
      time > ROBOT_CLEAN_TIME_SEC_PER_CELL_MAXIMUM
    ) {
      newErrors.push(`Time is not valid. Value should be in between ${GRID_LENGTH_MINIMUM} and ${GRID_LENGTH_MAXIMUM}.`);
    }
    if (robots.length < NUMBER_OF_ROBOTS_MINIMUM || robots.length > NUMBER_OF_ROBOTS_MAXIMUM) {
      newErrors.push(`Number of robot is invalid. Value should be in between ${NUMBER_OF_ROBOTS_MINIMUM} and ${NUMBER_OF_ROBOTS_MAXIMUM}.`);
    }
    if (
      robots.findIndex(
        (x) =>
          x.currentLocation.getX() > gridLength ||
          x.currentLocation.getY() > gridLength ||
          x.currentLocation.getX() < 1 ||
          x.currentLocation.getY() < 1
      ) > -1
    ) {
      newErrors.push("Location of one or more robot is not valid.");
    }
    return newErrors;
  }

  //#endregion

  return (
    <div className="w-full h-screen py-10 px-20">
      <div className="robot-form w-full h-screen flex justify-items-center">
        <div className="m-auto flex-1 pr-16">
          <h1 className="font-bold text-4xl relative text-center mb-16 z-50 before:content-[''] before:absolute before:h-24 before:w-20 before:border-8 before:border-r-0 before:z-0 before:border-orange-500 before:-top-7 before:-left-6">
            Let's Configure the Robots and Playground.
          </h1>
          <div className="form-wrapper w-full px-10">
            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-right mb-1 mb-0 pr-4"
                  htmlFor="input-gridLength"
                >
                  Grid Size
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="input-gridLength"
                  type="number"
                  min={GRID_LENGTH_MINIMUM}
                  max={GRID_LENGTH_MAXIMUM}
                  defaultValue={gridLength}
                  onChange={(e) => setGridLength(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-right mb-1 mb-0 pr-4"
                  htmlFor="input-time"
                >
                  Time (in seconds)
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="input-time"
                  type="number"
                  min={ROBOT_CLEAN_TIME_SEC_PER_CELL_MINIMUM}
                  max={ROBOT_CLEAN_TIME_SEC_PER_CELL_MAXIMUM}
                  defaultValue={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex items-center mb-12">
              <div className="w-2/4">
                <label
                  className="block font-bold text-right mb-1 mb-0 pr-4"
                  htmlFor="input-clockwise"
                >
                  Clockwise
                </label>
              </div>
              <div className="w-2/4">
                <input
                  id="input-clockwise"
                  className="mr-2 leading-tight"
                  type="checkbox"
                  defaultChecked={clockwise}
                  onChange={(e) => setClockwise(Boolean(e.target.value))}
                />
              </div>
            </div>

            {errors.length > 0 ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                role="alert"
              >
                <p className="font-bold mb-2">Errors</p>
                <ul className="list-disc pl-6 text-sm">
                  {errors.map((x) => (
                    <li>{x}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}

            <div className="flex items-center mt-10">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <button
                  className="shadow bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded"
                  type="button"
                  onClick={handleSubmit}
                >
                  Start Simulation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-14 relative">
            <h3 className="text-center text-xl font-bold mb-2 ">
              <span className="relative after:content-[''] after:absolute after:h-1 after:w-10 after:bg-orange-500 after:left-0 after:-bottom-1">Robots</span>
            </h3>
            <button
              onClick={addRobot}
              className="absolute right-0 top-0 shadow bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-sm text-white py-2 px-3 rounded"
              type="button"
            >
              Add robot
            </button>
          </div>
          <ol className="list-decimal">
            {robots.map((r) => (
              <li>
                <RobotFormFields
                  key={r.id}
                  gridLength={gridLength}
                  robot={r}
                  onRemove={() => removeRobot(r)}
                  onChangeRobots={changeRobot}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
