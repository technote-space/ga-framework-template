import {ReinsertionBase, IChromosome} from '@technote-space/genetic-algorithms-js';

export class Cultural extends ReinsertionBase {
  constructor() {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public select(population: Array<IChromosome>, offspring: Array<IChromosome>, _parents: Array<IChromosome>): Array<IChromosome> {
    return [...population, ...offspring];
  }
}
