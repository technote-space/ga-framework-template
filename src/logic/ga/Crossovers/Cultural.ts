import {CrossoverBase, IChromosome} from '@technote-space/genetic-algorithms-js';

export class Cultural extends CrossoverBase {
  public constructor(probability: number) {
    super(2, 2, probability);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected performCross(parents: Array<IChromosome>, _probability: number): Array<IChromosome> {
    return parents.flatMap(parent => parent.clone());
  }
}
