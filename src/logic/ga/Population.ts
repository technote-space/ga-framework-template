import {PopulationBase} from '@technote-space/genetic-algorithms-js';
import {Genotype} from './Genotype';

export class Population extends PopulationBase {
  public constructor(size: number, adam: Genotype) {
    super(size, adam);
  }
}
