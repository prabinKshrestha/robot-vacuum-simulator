"use client";

import { DirectionEnum, LocationModel, RobotModel } from "@/lib/models";
import { useState } from "react";

class RobotConfigurationField {
  public GridSize: number = 10;
  public NumberOfRobots: number = 1;
  public IsAnticlockwise: boolean = true;
}

export default function RobotConfigurationForm() {
  const [model, setModel] = useState(new RobotConfigurationField());
  const [robots, setRobots] = useState([
    new RobotModel(new LocationModel(0, 0), DirectionEnum.Up),
  ]);

  function addRobot() {
    robots.push(new RobotModel(new LocationModel(0, 0), DirectionEnum.Up));
    setRobots([...robots]);
  }

  function removeRobot(robot: RobotModel) {
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
    <div className="robot-form w-full h-screen py-20 flex justify-items-center items-center">
      <div className="m-auto flex-1 px-10">
        <h1 className="font-bold text-4xl text-center">
          Let's Configure the Robots and Playground.
        </h1>
      </div>
      <div className="flex-1">
        <form className="w-full max-w-sm" method="post" onSubmit={handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="input-gridSize"
              >
                Grid Size
              </label>
            </div>
            <div className="md:w-2/4">
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
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="input-gridSize"
              >
                Time (in seconds)
              </label>
            </div>
            <div className="md:w-2/4">
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
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="input-gridSize"
              >
                Clockwise
              </label>
            </div>
            <div className="md:w-2/4">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                defaultChecked={false}
              />
            </div>
          </div>
          <div className="mb-6 flex justify-between">
            <h3 className="text-center font-bold mb-2 ">Robots</h3>
            <button
              onClick={addRobot}
              className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-sm text-white py-2 px-3 rounded"
              type="button"
            >
              Add more robot
            </button>
          </div>
          <ol>
            {robots.map((r) => (
              <li>
                <RobotFormFields robot={r} onRemove={() => removeRobot(r)} />
              </li>
            ))}
          </ol>
          <div className="h-1 bg-gray-200 w-full my-5"></div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Start Simulation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function RobotFormFields({ robot, onRemove }) {
  return (
    <div className="flex text-sm">
      <div className="pr-4">
        <button
          onClick={onRemove}
          className="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-sm text-white py-2 px-3 rounded"
          type="button"
        >
          Remove
        </button>
      </div>
      <div className="md:flex flex-1 md:items-center mb-6">
        <div className="md:w-1/4">
          <label
            className="block font-bold mb-1 md:mb-0 pr-2"
            htmlFor="input-gridSize"
          >
            X
          </label>
        </div>
        <div className="md:w-3/4 pr-2">
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
        <div className="md:w-1/4">
          <label
            className="block font-bold mb-1 md:mb-0 pr-2"
            htmlFor="input-gridSize"
          >
            Y
          </label>
        </div>
        <div className="md:w-3/4">
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
      <div className="md:flex flex-1 md:items-center mb-6 pl-2">
        <div className="md:w-2/4">
          <label
            className="block font-bold md:text-right mb-1 md:mb-0 pr-2"
            htmlFor="input-gridSize"
          >
            Direction
          </label>
        </div>
        <div className="md:w-2/4">
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
    </div>
  );
}

function ShowModal() {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Deactivate
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
