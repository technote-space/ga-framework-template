export class TestData {
  public constructor(private _length: number) {
  }

  public get length(): number {
    return this._length;
  }
}
