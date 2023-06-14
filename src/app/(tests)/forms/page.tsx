"use client";

import { DirectionEnum, LocationModel, RobotModel } from "@/lib/models";
import { useState } from "react";

class RobotConfigurationField {
  public GridSize: number = 10;
  public NumberOfRobots: number = 1;
  public IsAnticlockwise: boolean = true;
  public Robots: RobotModel[] = [];
}

export default function RobotConfigurationForm() {
  const [model, setModel] = useState(new RobotConfigurationField());
  const [robots, setRobots] = useState([
    new RobotModel(new LocationModel(0, 0), DirectionEnum.Up),
  ]);

  function addRobot() {
    if (robots.length >= 10) return;
    robots.push(new RobotModel(new LocationModel(0, 0), DirectionEnum.Up));
    setRobots([...robots]);
  }

  function removeRobot(robot: RobotModel) {
    if (robots.length == 1) return;
    let i = robots.findIndex((x) => x.id == robot.id);
    if (i > -1) {
      robots.splice(i, 1);
      setRobots([...robots]);
    }
  }

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className="robot-form w-full h-screen py-20 flex justify-items-center">
      <div className="m-auto flex-1 px-16">
        {/* <h1 className="font-bold text-4xl text-center mb-16">
          Let's Configure the Robots and Playground.
        </h1> */}
        <h1 className="font-bold text-4xl text-center mb-16">Fill the Forms</h1>
        <div className="form-wrapper w-full px-10">
          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label
                className="block font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="input-gridSize"
              >
                Grid Size
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="input-gridSize"
                type="number"
                min={10}
                max={50}
                defaultValue={model.GridSize}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label
                className="block font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="input-gridSize"
              >
                Time (in seconds)
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="input-gridSize"
                type="number"
                min={0.2}
                max={10}
                defaultValue={2}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label
                className="block font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="input-gridSize"
              >
                Clockwise
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                defaultChecked={false}
              />
            </div>
          </div>
          <div className="flex items-center mt-20">
            <div className="w-1/3"></div>
            <div className="w-2/3">
              <button
                className="shadow bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded"
                type="button"
              >
                Start Simulation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <form className="w-full" method="post" onSubmit={handleSubmit}>
          <div className="mb-14 relative">
            <h3 className="text-center text-xl font-bold mb-2">Robots</h3>
            <button
              onClick={addRobot}
              className="absolute right-0 top-0 shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-sm text-white py-2 px-3 rounded"
              type="button"
            >
              Add more robot
            </button>
          </div>
          <ol className="list-decimal">
            {robots.map((r) => (
              <li>
                <RobotFormFields robot={r} onRemove={() => removeRobot(r)} />
              </li>
            ))}
          </ol>
        </form>
      </div>
    </div>
  );
}

function RobotFormFields({ robot, onRemove }) {
  return (
    <div className="flex text-sm ml-4 mt-2 first::mt-0">
      <div className="flex flex-1 items-center">
        <div className="w-1/12">
          <label
            className="block font-bold mb-1 mb-0 pr-2"
            htmlFor="input-gridSize"
          >
            X
          </label>
        </div>
        <div className="w-5/12 pr-2">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="input-gridSize"
            type="number"
            min={10}
            max={50}
            defaultValue={1}
            value={robot.currentLocation.getX()}
          />
        </div>
        <div className="w-1/12">
          <label
            className="block font-bold mb-1 mb-0 pr-2"
            htmlFor="input-gridSize"
          >
            Y
          </label>
        </div>
        <div className="w-5/12">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="input-gridSize"
            type="number"
            min={10}
            max={50}
            value={robot.currentLocation.getY()}
          />
        </div>
      </div>
      <div className="flex flex-1 items-center pl-1">
        <div className="w-2/4">
          <label
            className="block font-bold text-right mb-1 mb-0 pr-2"
            htmlFor="input-gridSize"
          >
            Direction
          </label>
        </div>
        <div className="w-2/4">
          <select
            className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={robot.intialDirection}
          >
            <option value={DirectionEnum.Up}>Up</option>
            <option value={DirectionEnum.Left}>Left</option>
            <option value={DirectionEnum.Down}>Down</option>
            <option value={DirectionEnum.Right}>Right</option>
          </select>
        </div>
      </div>
      <div className="pl-4">
        <button
          onClick={onRemove}
          className="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-sm text-white py-2 px-3 rounded"
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
