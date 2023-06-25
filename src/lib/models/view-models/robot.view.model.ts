import { DirectionEnum, SpiralDirectionEnum } from "../enum.model";
import { LocationModel } from "../location.model";
import { SpiralMover } from "./spiral-mover";
import { v4 as uuidv4 } from "uuid";

export class RobotViewModel extends SpiralMover {
  private _id: number;

  private _currentLocation: LocationModel;
  private _intialDirection: DirectionEnum;

  public static DefaultRobot(): RobotViewModel {
    return new RobotViewModel(new LocationModel(1, 1), DirectionEnum.Up);
  }

  constructor(location: LocationModel, intialDirection: DirectionEnum) {
    super(intialDirection);
    this._intialDirection = intialDirection;
    this._currentLocation = location;
    this._id = uuidv4();
  }

  public get id(): number {
    return this._id;
  }

  public get currentLocation(): LocationModel {
    return this._currentLocation;
  }

  public set currentLocation(location: LocationModel) {
    this._currentLocation = location;
  }

  // Direction
  public get intialDirection(): DirectionEnum {
    return this._intialDirection;
  }

  public set intialDirection(direction: DirectionEnum) {
    this.changeNextDirection(direction);
    this._intialDirection = direction;
  }

  public moveRobot() {
    this._currentLocation = this.nextLocation(this._currentLocation);
  }
}
