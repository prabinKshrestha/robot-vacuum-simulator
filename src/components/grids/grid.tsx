"use client";

import React, { useState } from "react";
import {
    LocationModel,
} from "@/lib/models";
import cloneDeep from "lodash/cloneDeep";
import Cell from "./cell";

let stopMovingRobots: boolean = false;

export default function Grid({ gridLength, time, formRobots, onRestart }) {

    let robotsCloned = cloneDeep(formRobots);
    robotsCloned.forEach(x => {
        x.currentLocation = new LocationModel(x.currentLocation.getX() - 1, x.currentLocation.getY() - 1);
    });

    const [robots, setRobots] = useState(robotsCloned);
    const [showCollision, setshowCollision] = useState(false);
    const [visitedLocations, setvisitedLocations] = useState([]);

    const classGrid = `grid-cols-${gridLength}`;

    function _changeLocation() {
        visitedLocations.push(...robots.map((x) => x.currentLocation));
        setvisitedLocations(cloneDeep(visitedLocations));
        robots.forEach((robot) => robot.moveRobot());
        setRobots(robots);
        if (
            robots.findIndex(
                (r1) =>
                    robots.findIndex(
                        (r2) =>
                            r2.id != r1.id &&
                            r1.currentLocation.getX() == r2.currentLocation.getX() &&
                            r1.currentLocation.getY() == r2.currentLocation.getY()
                    ) > -1
            ) > -1
        ) {
            stopMovingRobots = true;
        }
    }

    setTimeout(() => {
        if (!stopMovingRobots) {
            _changeLocation();
        } else {
            setshowCollision(true);
        }
    }, time * 1000);

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
        <div className="w-full min-h-screen py-20 px-10 flex flex-col justify-center items-center relative">
            <div
                className={`mx-auto inline-grid border border-black grid-flow-row gap-0 ${classGrid}`}
            >
                {Array(gridLength)
                    .fill(Array(gridLength).fill(1))
                    .map((r, iy) =>
                        r.map((c, ix) => (
                            <Cell
                                key={`${iy}_${ix}`}
                                isCleaned={_isVisited(ix, iy)}
                                isRobot={_isRobot(ix, iy)}
                            />
                        ))
                    )}
            </div>
            {
                showCollision ? <div className="mt-16">
                    <button
                        className="shadow-xl bg-red-600 focus:shadow-outline focus:outline-none text-white font-medium py-3 px-8 rounded"
                        type="button"
                    >
                        ****** Collided ******
                    </button>
                </div> : ""
            }
            <div className="mt-20">
                <button
                    className="shadow-xl bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-medium py-3 px-8 rounded"
                    type="button"
                    onClick={() => { stopMovingRobots = false; onRestart(); }}
                >
                    Change Configuration
                </button>
            </div>
        </div>
    );
}
