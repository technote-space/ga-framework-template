import {GeneticAlgorithmBase} from '@technote-space/ga-framework/dist/app/logic/Algorithm';
import {ITermination, IMigration} from '@technote-space/genetic-algorithms-js';
import {Genotype} from '#/Genotype';
import {Phenotype} from '#/Phenotype';
import {Termination} from '#/Termination';
import {Migration} from '#/Migration';
import {UpdateResult, Context} from '$/types';
import {MggIsland} from '#/Island/MggIsland';
// import {LocalSearchIsland} from '#/Island/LocalSearchIsland';
import {CulturalIsland} from '#/Island/CulturalIsland';
import {GaIsland} from '#/Island/GaIsland';
import {TestData} from '#/TestData/TestData';

export abstract class Ga extends GeneticAlgorithmBase<UpdateResult> {
  private readonly _islands: Array<GaIsland>;
  private readonly _termination: ITermination;
  private readonly _migration: IMigration;

  protected constructor(bestChanged: undefined | (() => void), context: Context) {
    super(bestChanged);

    this._termination = new Termination(context.terminateOffspringNumber);
    this._migration   = new Migration();
    this._islands     = [];
  }

  public async init(context: Context): Promise<void> {
    const testData             = new TestData(context.length);
    const culturalIslandNumber = Math.floor(context.islandNumber * context.culturalIslandRate);
    const islandNumber         = context.islandNumber - culturalIslandNumber;
    [...Array(islandNumber)].forEach(() => {
      this._islands.push(new MggIsland(context, testData));
      // this._islands.push(new LocalSearchIsland(context, testData));
    });
    if (culturalIslandNumber > 0) {
      [...Array(culturalIslandNumber)].forEach(() => {
        this._islands.push(new CulturalIsland(context, testData));
      });
    }
  }

  get islands(): Array<GaIsland> {
    return this._islands;
  }

  get migration(): IMigration {
    return this._migration;
  }

  get termination(): ITermination {
    return this._termination;
  }

  public async getObject(): Promise<UpdateResult> {
    return {
      population: this.chromosomes.map(chromosome => {
        const genotype = chromosome as Genotype;
        return {
          value: Phenotype.getValue(genotype).join(' '),
          fitness: genotype.fitness ?? 0,
        };
      }),
      progress: this.progress,
    };
  }
}
