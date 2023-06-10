
export class LocationModel {
    private _x: number;
    private _y: number;

    constructor(dx: number, dy: number) {
      this._x = dx;
      this._y = dy;
    }

    public getX(): number{
      return this._x;
    }

    public setX(dx: number){
      this._x = dx;
    }

    public getY(): number{
      return this._y;
    }

    public setY(dy: number){
      this._y = dy;
    }
  }