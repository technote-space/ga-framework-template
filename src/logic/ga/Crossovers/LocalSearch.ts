import {CrossoverBase, IChromosome} from '@technote-space/genetic-algorithms-js';

export class LocalSearch extends CrossoverBase {
  public constructor(probability: number, private crossoverTime: number) {
    super(1, crossoverTime, probability);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected performCross(parents: Array<IChromosome>, probability: number): Array<IChromosome> {
    return parents.flatMap(parent => [...Array(this.crossoverTime)].map(() => parent.clone()));
  }
}
