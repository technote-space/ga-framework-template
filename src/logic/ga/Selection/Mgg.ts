import {IChromosome} from '@technote-space/genetic-algorithms-js';
import {GraphSelectionBase} from './GraphSelectionBase';

export class Mgg extends GraphSelectionBase {
  public select(chromosomes: Array<IChromosome>): { parents: Array<IChromosome>; population: Array<IChromosome> } {
    const population = [...chromosomes];
    const parent1    = this.takeByOrder(population);
    const parent2    = this.takeByOrder(population);
    return {
      parents: [parent1, parent2],
      population,
    };
  }
}
