import {Acid, ChromosomeBase, IChromosome} from '@technote-space/genetic-algorithms-js';

export class Genotype extends ChromosomeBase {
  protected _fitness: number;

  public constructor() {
    super(0, true);
    this._fitness = -1;
    this.generateAcids();
  }

  public get fitness(): number {
    return this._fitness;
  }

  public set fitness(fitness: number) {
    this._fitness = fitness;
  }

  public createNew(): ChromosomeBase {
    return new Genotype();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public generateAcid(_index: number): Acid {
    return new Acid(Math.floor(Math.random() * 2)); // 0 or 1
  }

  public getGenes(): Array<number> {
    return [...Array(this.length).keys()].map(index => Number(this.getAcid(index).value));
  }

  protected performCopyFrom(_from: IChromosome): void {
    this._fitness = _from.fitness;
  }
}
