"use client";

import React, { useState } from "react";
import { DirectionEnum, LocationModel } from "@/lib/models";

const N_GRID_SIZE: number = 21;

let grid: number[][] = Array(N_GRID_SIZE).fill(Array(N_GRID_SIZE).fill(1));

let layerSide: number = 1;
let leg: "U" | "L" | "D" | "R" = "D";
let nextDirection: DirectionEnum = DirectionEnum.D;
let counter: number = 0;
let cancel = false;

export default function SpiralMovement() {
  const [currentLocation, setCurrentLocation] = useState(
    new LocationModel(2, 2)
  );
  const [visitedLocations, setvisitedLocations] = useState([]);

  function nextLocation(location: LocationModel) {
    let x = location.getX();
    let y = location.getY();
    if (cancel) {
      switch (leg) {
        case "R":
          if (x >= N_GRID_SIZE-1) {
            leg = "U";
          } else {
            x += 1;
          }
          break;
        case "U":
          if (y == 0) {
            leg = "L";
          } else {
            y -= 1;
          }
          break;
        case "L":
          if (x == 0) {
            leg = "D";
          } else {
            x -= 1;
          }
          break;
        case "D":
          if (y >= N_GRID_SIZE-1) {
            leg = "R";
          } else {
            y += 1;
          }
          break;
      }
    } else {
      switch (leg) {
        case "R":
          x += 1;
          if (x < 0 || x >= N_GRID_SIZE) {
            x -= 1;
            if (Math.floor((layerSide + 1) / 2) == counter) {
              leg = "U";
            }
            counter = 0;
            cancel = true;
            break;
          }
          counter += 1;
          if (Math.floor((layerSide + 1) / 2) == counter) {
            layerSide += 1;
            leg = "U";
            counter = 0;
          }
          break;
        case "U":
          y -= 1;
          counter += 1;
          if (y < 0 || y >= N_GRID_SIZE) {
            y += 1;
            if (Math.floor((layerSide + 1) / 2) == counter) {
              leg = "L";
            }
            counter = 0;
            cancel = true;
            break;
          }
          if (Math.floor((layerSide + 1) / 2) == counter) {
            layerSide += 1;
            leg = "L";
            counter = 0;
          }
          break;
        case "L":
          x -= 1;
          counter += 1;
          if (x < 0 || x >= N_GRID_SIZE) {
            x += 1;
            if (Math.floor((layerSide + 1) / 2) == counter) {
              leg = "D";
            }
            cancel = true;
            counter = 0;
            break;
          }
          if (Math.floor((layerSide + 1) / 2) == counter) {
            layerSide += 1;
            leg = "D";
            counter = 0;
          }
          break;
        case "D":
          y += 1;
          counter += 1;
          if (y < 0 || y >= N_GRID_SIZE) {
            y -= 1;
            if (Math.floor((layerSide + 1) / 2) == counter) {
              leg = "R";
            }
            cancel = true;
            counter = 0;
            break;
          }
          if (Math.floor((layerSide + 1) / 2) == counter) {
            layerSide += 1;
            leg = "R";
            counter = 0;
          }
          break;
      }
    }
    return new LocationModel(x, y);
  }

  function _changeLocation() {
    visitedLocations.push(currentLocation);
    setvisitedLocations([...visitedLocations]);
    // let location = new LocationModel(
    //   currentLocation.getX() + 1,
    //   currentLocation.getY()
    // );
    let location = nextLocation(currentLocation);
    setCurrentLocation(location);
  }

  setTimeout(() => {
    _changeLocation();
  }, 500);

  function _isVisited(dx, dy) {
    return (
      visitedLocations.findIndex(
        (x: LocationModel) => x.getX() == dx && x.getY() == dy
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
              isRobot={
                ix == currentLocation.getX() && iy == currentLocation.getY()
              }
            />
          ))
        )}
      </div>
      <div>
        <button onClick={_changeLocation}>Click</button>
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
