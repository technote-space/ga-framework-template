import {Acid, ChromosomeBase} from '@technote-space/genetic-algorithms-js';
import {Phenotype} from './Phenotype';

export class Genotype extends ChromosomeBase {
  private _phenotype: Phenotype | undefined = undefined;

  public constructor() {
    super(0, true);
    this.generateAcids();
  }

  public get fitness(): number {
    return this.phenotype.fitness;
  }

  public set fitness(_: number) {
    //
  }

  public get phenotype(): Phenotype {
    if (!this._phenotype) {
      this._phenotype = new Phenotype(this);
    }

    return this._phenotype;
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
}
