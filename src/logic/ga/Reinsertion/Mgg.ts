import {ReinsertionBase, IChromosome} from '@technote-space/genetic-algorithms-js';

export class Mgg extends ReinsertionBase {
  constructor(private readonly addParentsToOffspring = true) {
    super();
  }

  public select(population: Array<IChromosome>, offspring: Array<IChromosome>, parents: Array<IChromosome>): Array<IChromosome> {
    const sortedOffspring: Array<IChromosome> = [...offspring];
    if (this.addParentsToOffspring) {
      sortedOffspring.push(...parents);
    }
    sortedOffspring.sort((chromosome1, chromosome2) => (chromosome2.fitness ?? -1.0) - (chromosome1.fitness ?? -1.0));

    const selected = [...population];
    selected.push(sortedOffspring.splice(0, 1)[0]); // elite
    selected.push(this.take(sortedOffspring));

    return selected;
  }

  protected take(chromosomes: Array<IChromosome>): IChromosome | never {
    const sumFitness = chromosomes.reduce((acc, chromosome) => acc + (chromosome.fitness ?? 0), 0);
    let cumulative   = 0.0;
    const rand       = Math.random() * sumFitness;
    for (const chromosome of chromosomes) {
      cumulative += chromosome.fitness ?? 0;
      if (cumulative >= rand) {
        return chromosome;
      }
    }

    console.log(chromosomes);
    console.log(sumFitness);
    console.log(rand);
    console.log(cumulative);
    throw new Error('Unexpected error');
  }
}
