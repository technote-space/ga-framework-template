import {ReinsertionBase, IChromosome} from '@technote-space/genetic-algorithms-js';

export class LocalSearch extends ReinsertionBase {
  constructor(private readonly addParentsToOffspring = true) {
    super();
  }

  public select(population: Array<IChromosome>, offspring: Array<IChromosome>, parents: Array<IChromosome>): Array<IChromosome> {
    const sortedOffspring: Array<IChromosome> = [...offspring];
    if (this.addParentsToOffspring) {
      sortedOffspring.push(...parents);
    }
    sortedOffspring.sort((chromosome1, chromosome2) => chromosome2.fitness - chromosome1.fitness);

    const selected = [...population];
    selected.push(sortedOffspring.splice(0, 1)[0]); // elite

    return selected;
  }
}
