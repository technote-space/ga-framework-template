import {CrossoverBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import {Genotype} from '#/Genotype';

export class LocalSearch extends CrossoverBase {
  private _pool: Array<IChromosome> = [];

  public constructor(probability: number, private crossoverTime: number) {
    super(1, crossoverTime, probability);

    [...Array(this.childrenNumber)].forEach(() => {
      this._pool.push(new Genotype());
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected performCross(parents: Array<IChromosome>, probability: number): Array<IChromosome> {
    let index = 0;
    [...Array(this.crossoverTime)].forEach(() => {
      this._pool[index++].copyFrom(parents[0]);
    });

    return this._pool;
  }
}
