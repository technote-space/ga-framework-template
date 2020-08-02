import {IChromosome} from '@technote-space/genetic-algorithms-js';
import {GraphSelectionBase} from './GraphSelectionBase';

export class LocalSearch extends GraphSelectionBase {
  public select(chromosomes: Array<IChromosome>): { parents: Array<IChromosome>; population: Array<IChromosome> } {
    const population = [...chromosomes];
    const parent     = this.takeByOrder(population);
    // const parent = this.takeByFitness(population);
    return {
      parents: [parent],
      population,
    };
  }
}
