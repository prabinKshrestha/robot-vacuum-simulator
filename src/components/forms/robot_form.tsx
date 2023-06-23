import { DirectionEnum } from "@/lib/models";

export default function RobotFormFields({
  gridLength,
  robot,
  onRemove,
  onChangeRobots,
}) {
  function triggerChange(type: "X" | "Y" | "Direction", value: number | any) {
    switch (type) {
      case "X":
        robot.currentLocation.setX(value);
        break;
      case "Y":
        robot.currentLocation.setY(value);
        break;
      case "Direction":
        robot.intialDirection = value as DirectionEnum;
        break;
    }
    onChangeRobots(robot);
  }

  return (
    <div className="flex text-sm ml-4 mt-2 first::mt-0">
      <div className="flex flex-1 items-center">
        <div className="w-1/12">
          <label className="block font-bold mb-1 mb-0 pr-2">X</label>
        </div>
        <div className="w-5/12 pr-2">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min={1}
            max={gridLength}
            value={robot.currentLocation.getX()}
            onChange={(e) => triggerChange("X", Number(e.target.value))}
          />
        </div>
        <div className="w-1/12">
          <label className="block font-bold mb-1 mb-0 pr-2">Y</label>
        </div>
        <div className="w-5/12">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min={1}
            max={gridLength}
            value={robot.currentLocation.getY()}
            onChange={(e) => triggerChange("Y", Number(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-1 items-center pl-1">
        <div className="w-2/4">
          <label className="block font-bold text-right mb-1 mb-0 pr-2">
            Direction
          </label>
        </div>
        <div className="w-2/4">
          <select
            className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={robot.intialDirection}
            onChange={(e) => triggerChange("Direction", Number(e.target.value))}
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
