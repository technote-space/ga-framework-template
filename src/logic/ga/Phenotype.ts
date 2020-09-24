import {Genotype} from './Genotype';

export class Phenotype {
  public static getValue(genotype: Genotype): Array<number> {
    return genotype.getGenes();
  }
}
