import {FitnessBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import {Genotype} from './Genotype';
import {Phenotype} from './Phenotype';
import {TestData} from './TestData/TestData';

export class Fitness extends FitnessBase {
  constructor(private testData: TestData) {
    super();
  }

  public evaluate(chromosome: IChromosome): void {
    const genotype = chromosome as Genotype;
    const value    = Phenotype.getValue(genotype);

    const diff       = Math.abs(this.testData.length - value.length) + Math.abs(this.testData.length - value.reduce((acc, val) => acc + val, 0));
    genotype.fitness = 1.0 / (diff + 1);
  }
}
