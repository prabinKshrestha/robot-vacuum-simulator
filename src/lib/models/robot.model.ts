import { LocationModel } from "./location.model";

export class RobotModel {
    private _initialLocation: LocationModel;

    constructor(initialLocation: LocationModel) {
      this._initialLocation = initialLocation;
    }

    public get initialLocation(): LocationModel{
      return this._initialLocation;
    }

    public set initialLocation(initialLocation: LocationModel){
      this._initialLocation = initialLocation;
    }
  }