import {FitnessBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import {Genotype} from './Genotype';
import {TestData} from './TestData/TestData';

export class Fitness extends FitnessBase {
  constructor(private testData: TestData) {
    super();
  }

  public evaluate(chromosome: IChromosome): void {
    const genotype  = chromosome as Genotype;
    const phenotype = genotype.phenotype;
    const value     = phenotype.value;

    const diff = Math.abs(this.testData.length - value.length) + Math.abs(this.testData.length - value.reduce((acc, val) => acc + val, 0));
    phenotype.setFitness(1.0 / (diff + 1));
  }
}
