import { DirectionEnum, SpiralDirectionEnum } from "../enum.model";
import { LocationModel } from "../location.model";
import { SpiralMover } from "./spiral-mover";

export class RobotViewModel extends SpiralMover {
    private _initialLocation: LocationModel;
    private _currentLocation: LocationModel;

    constructor(initialLocation: LocationModel, intialDirection: DirectionEnum) {
      super(intialDirection);
      this._initialLocation = initialLocation;
      this._currentLocation = new LocationModel(initialLocation.getX(), initialLocation.getY());
    }

    public get initialLocation(): LocationModel{
      return this._initialLocation;
    }

    public set initialLocation(initialLocation: LocationModel){
      this._initialLocation = initialLocation;
    }

    public get currentLocation(): LocationModel{
      return this._currentLocation;
    }

    public set currentLocation(location: LocationModel){
      this._currentLocation = location;
    }

    public moveRobot(){
      this._currentLocation = this.nextLocation(this._currentLocation);
    }
}