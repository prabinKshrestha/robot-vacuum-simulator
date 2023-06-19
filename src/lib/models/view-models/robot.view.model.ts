import { DirectionEnum, SpiralDirectionEnum } from "../enum.model";
import { LocationModel } from "../location.model";
import { SpiralMover } from "./spiral-mover";

export class RobotViewModel extends SpiralMover {
    public id: number;
    private _initialLocation: LocationModel;
    private _currentLocation: LocationModel;
    private _intialDirection: DirectionEnum;

    constructor(initialLocation: LocationModel, intialDirection: DirectionEnum) {
      super(intialDirection);
      this._initialLocation = initialLocation;
      this._currentLocation = new LocationModel(initialLocation.getX(), initialLocation.getY());
      this.id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now())); // Should change this code
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

    public get intialDirection(): DirectionEnum{
      return this._intialDirection;
    }

    public set intialDirection(direction: DirectionEnum){
      this.changeNextDirection(direction);
      this._intialDirection = direction;
    }

    public moveRobot(){
      this._currentLocation = this.nextLocation(this._currentLocation);
    }
}