import {CrossoverBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import {Genotype} from '#/Genotype';

export class Mgg extends CrossoverBase {
  private _pool: Array<IChromosome> = [];

  public constructor(probability: number, private readonly mixProbability: number, private readonly crossoverTime: number) {
    super(2, crossoverTime * 2, probability);

    // [0, 0.5)
    if (mixProbability > 0.5) {
      this.mixProbability = 1 - mixProbability;
    }
    this.mixProbability = Math.min(Math.max(this.mixProbability, 0), 0.5);

    [...Array(this.childrenNumber)].forEach(() => {
      this._pool.push(new Genotype());
    });
  }

  protected performCross(parents: Array<IChromosome>, probability: number): Array<IChromosome> {
    const parent1 = parents[0];
    const parent2 = parents[1];

    let index = 0;
    [...Array(this.crossoverTime)].forEach(() => {
      const child1 = this._pool[index++];
      const child2 = this._pool[index++];
      child1.copyFrom(parent1);
      child2.copyFrom(parent2);

      if (probability > 0 && Math.random() < probability) {
        const len    = Math.min(parent1.length, parent2.length);
        const start1 = parent1.length - parent2.length <= 0 ? 0 : Math.floor(Math.random() * (parent1.length - parent2.length + 1));
        const start2 = parent1.length - parent2.length >= 0 ? 0 : Math.floor(Math.random() * (parent2.length - parent1.length + 1));
        for (let index = 0; index < len; index++) {
          if (Math.random() < this.mixProbability) {
            child1.setAcid(start1 + index, parent2.getAcid(start2 + index));
            child2.setAcid(start2 + index, parent1.getAcid(start1 + index));
          }
        }
      }
    });

    return this._pool;
  }
}
