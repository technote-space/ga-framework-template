import {Genotype} from './Genotype';

export class Phenotype {
  protected _fitness: number;

  public constructor(protected genotype: Genotype) {
    this._fitness = -1;
  }

  public get fitness(): number {
    return this._fitness;
  }

  public setFitness(fitness: number): void {
    this._fitness = Math.max(0, fitness);
  }

  public get value(): Array<number> {
    return this.genotype.getGenes();
  }
}
