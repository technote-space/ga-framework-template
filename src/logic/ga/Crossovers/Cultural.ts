import {CrossoverBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import {Genotype} from '#/Genotype';

export class Cultural extends CrossoverBase {
  private _pool: Array<IChromosome> = [];

  public constructor(probability: number) {
    super(2, 2, probability);

    [...Array(this.childrenNumber)].forEach(() => {
      this._pool.push(new Genotype());
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected performCross(parents: Array<IChromosome>, _probability: number): Array<IChromosome> {
    let index = 0;
    parents.forEach(parent => {
      this._pool[index++].copyFrom(parent);
    });

    return this._pool;
  }
}
