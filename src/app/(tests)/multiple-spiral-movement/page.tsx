"use client";

import React, { useState } from "react";
import { DirectionEnum, LocationModel, RobotViewModel } from "@/lib/models";

const N_GRID_SIZE: number = 21;

let grid: number[][] = Array(N_GRID_SIZE).fill(Array(N_GRID_SIZE).fill(1));

export default function SpiralMovement() {
  const [robots, setRobots] = useState([
    new RobotViewModel(new LocationModel(2, 2), DirectionEnum.Right),
    new RobotViewModel(new LocationModel(10, 10), DirectionEnum.Up),
    new RobotViewModel(new LocationModel(18, 20), DirectionEnum.Left),
    new RobotViewModel(new LocationModel(6, 10), DirectionEnum.Down),
  ]);
  const [visitedLocations, setvisitedLocations] = useState([]);

  function _changeLocation() {
    visitedLocations.push(...robots.map(x => x.currentLocation));
    setvisitedLocations([...visitedLocations]);
    robots.forEach(robot => robot.moveRobot());
    setRobots(robots);
  }

  setTimeout(() => {
    _changeLocation();
  }, 100);

  function _isVisited(dx, dy) {
    return (
      visitedLocations.findIndex(
        (x: LocationModel) => x.getX() == dx && x.getY() == dy
      ) > -1
    );
  }

  function _isRobot(dx, dy) {
    return (
      robots.findIndex(
        (x) => x.currentLocation.getX() == dx && x.currentLocation.getY() == dy
      ) > -1
    );
  }

  return (
    <div className="mx-auto flex">
      <div className="inline-grid border border-black grid-cols-21 grid-flow-row gap-0">
        {grid.map((r, iy) =>
          r.map((c, ix) => (
            <Cell
              key={`${iy}_${ix}`}
              value={_isVisited(ix, iy) ? 1 : 0}
              isRobot={_isRobot(ix, iy)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function Cell({ value, isRobot }) {
  return (
    <div
      className={
        `h-5 w-5 border border-black text-center ` +
        (isRobot ? "bg-blue-500" : value == 1 ? "bg-green-500" : "")
      }
    >
      {isRobot ? "R" : ""}
    </div>
  );
}
