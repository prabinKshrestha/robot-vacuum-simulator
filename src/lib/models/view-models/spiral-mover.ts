import { SpiralMovementSettings } from "@/lib/configs";
import { DirectionEnum, SpiralDirectionEnum } from "../enum.model";
import { LocationModel } from "../location.model";

export abstract class SpiralMover{
    private _nextDirection: DirectionEnum;
    
    private _sideLayerCount: number = 1
    private _sideMovementCounter: number = 0
    private _isBoundryExceeded: boolean = false;
  
    constructor(intialDirection: DirectionEnum) {
      this._nextDirection = intialDirection
    }
  
    public nextLocation(location: LocationModel): LocationModel{
      return this._isBoundryExceeded ? this._nextLocationForBoundryMovement(location): this._nextLocationForSpiralMovement(location);
    }
  
    private _nextLocationForSpiralMovement(location: LocationModel): LocationModel{
      let x = location.getX();
      let y = location.getY();
      switch (this._nextDirection) {
        case DirectionEnum.Right:
          x += 1;
          if (this._hasExceededBoundry(x)) {
            x -= 1;
            this._isBoundryExceeded = true;
            if (this._shouldChangeTheDirection()) {
              this._nextDirection = this._getNextDirection(DirectionEnum.Right);
            }
          }else{
            this._sideMovementCounter += 1;
            if (this._shouldChangeTheDirection()) {
              this._sideLayerCount += 1;
              this._nextDirection = this._getNextDirection(DirectionEnum.Right);
              this._sideMovementCounter = 0;
            }
          }
          break;
        case DirectionEnum.Up:
          y -= 1;
          if (this._hasExceededBoundry(y)) {
            y += 1;
            this._isBoundryExceeded = true;
            if (this._shouldChangeTheDirection()) {
              this._nextDirection = this._getNextDirection(DirectionEnum.Up);
            }
          }else{
            this._sideMovementCounter += 1;
            if (this._shouldChangeTheDirection()) {
              this._sideLayerCount += 1;
              this._nextDirection = this._getNextDirection(DirectionEnum.Up);
              this._sideMovementCounter = 0;
            }
          }
          break;
        case DirectionEnum.Left:
          x -= 1;
          if (this._hasExceededBoundry(x)) {
            x += 1;
            this._isBoundryExceeded = true;
            if (this._shouldChangeTheDirection()) {
              this._nextDirection = this._getNextDirection(DirectionEnum.Left);
            }
          }else{
            this._sideMovementCounter += 1;
            if (this._shouldChangeTheDirection()) {
              this._sideLayerCount += 1;
              this._nextDirection = this._getNextDirection(DirectionEnum.Left);
              this._sideMovementCounter = 0;
            }
          }
          break;
        case DirectionEnum.Down:
          y += 1;
          if (this._hasExceededBoundry(y)) {
            y -= 1;
            this._isBoundryExceeded = true;
            if (this._shouldChangeTheDirection()) {
              this._nextDirection = this._getNextDirection(DirectionEnum.Down);
            }
          }else{
            this._sideMovementCounter += 1;
            if (this._shouldChangeTheDirection()) {
              this._sideLayerCount += 1;
              this._nextDirection = this._getNextDirection(DirectionEnum.Down);
              this._sideMovementCounter = 0;
            }
          }
          break;
        }
      return new LocationModel(x, y);
    }
  
    private _nextLocationForBoundryMovement(location: LocationModel): LocationModel{
      let x = location.getX();
      let y = location.getY();
      switch (this._nextDirection) {
        case DirectionEnum.Right:
          x += 1;
          if (x >= SpiralMovementSettings.GRID_SIZE) {
            x -= 1;
            this._nextDirection = this._getNextDirection(DirectionEnum.Right);
          }
          break;
        case DirectionEnum.Up:
          y -= 1;
          if (y < 0) {
            y += 1;
            this._nextDirection = this._getNextDirection(DirectionEnum.Up);
          }
          break;
        case DirectionEnum.Left:
          x -= 1;
          if (x < 0) {
            x += 1;
            this._nextDirection = this._getNextDirection(DirectionEnum.Left);
          }
          break;
        case DirectionEnum.Down:
          y += 1;
          if (y >= SpiralMovementSettings.GRID_SIZE) {
            y -= 1;
            this._nextDirection = this._getNextDirection(DirectionEnum.Down);
          }
          break;
        }
      return new LocationModel(x, y);
    }
  
    private _hasExceededBoundry(oneD: number): boolean {
      return oneD < 0 || oneD >= SpiralMovementSettings.GRID_SIZE;
    }
    
    private _shouldChangeTheDirection(): boolean{
      return Math.floor((this._sideLayerCount + 1) / 2) == this._sideMovementCounter;
    }
  
    // Return the next direction based on currentDirection and spiral direction (clockwise or anticlockwise)
    private _getNextDirection(currentDirection: DirectionEnum): DirectionEnum{
      if(SpiralMovementSettings.SPIRAL_DIRECTION == SpiralDirectionEnum.AnitClockwise){
        switch(currentDirection){
          case DirectionEnum.Right:
            return DirectionEnum.Up;
          case DirectionEnum.Up:
            return DirectionEnum.Left;
          case DirectionEnum.Left:
            return DirectionEnum.Down;
          case DirectionEnum.Down:
            return DirectionEnum.Right;
        }
      }else{
        switch(currentDirection){
          case DirectionEnum.Right:
            return DirectionEnum.Down;
          case DirectionEnum.Down:
            return DirectionEnum.Left;
          case DirectionEnum.Left:
            return DirectionEnum.Up;
          case DirectionEnum.Up:
            return DirectionEnum.Right;
        }
      }
    }
  }